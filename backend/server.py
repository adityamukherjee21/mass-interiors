from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
SUPABASE_URL = os.environ['SUPABASE_URL']
SUPABASE_KEY = os.environ['SUPABASE_KEY']
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create app
app = FastAPI()

# ── CORS must be added BEFORE routers ────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router with /api prefix
api_router = APIRouter(prefix="/api")


# ── Models ───────────────────────────────────────────────────────────────────

class EnquiryCreate(BaseModel):
    full_name: str
    work_email: str
    phone: str
    company: Optional[str] = None
    project_type: Optional[str] = None
    estimated_area: Optional[str] = None
    product_interests: Optional[List[str]] = []
    message: Optional[str] = None

class Enquiry(EnquiryCreate):
    id: str
    created_at: datetime

class StatusCheckCreate(BaseModel):
    client_name: str

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ── Routes ───────────────────────────────────────────────────────────────────

@api_router.get("/")
async def root():
    return {"message": "MASS INTERIORS API — OK"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(data: EnquiryCreate):
    """Submit a new project enquiry / BOQ request."""
    try:
        payload = data.model_dump()
        result = supabase.table("enquiries").insert(payload).execute()
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to save enquiry")
        row = result.data[0]
        return Enquiry(**row)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error creating enquiry: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    """List all submitted enquiries."""
    try:
        result = supabase.table("enquiries").select("*").order("created_at", desc=True).execute()
        return result.data or []
    except Exception as e:
        logger.error(f"Error fetching enquiries: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)
    try:
        supabase.table("status_checks").insert({
            "id": status_obj.id,
            "client_name": status_obj.client_name,
            "timestamp": status_obj.timestamp.isoformat(),
        }).execute()
    except Exception:
        pass
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    try:
        result = supabase.table("status_checks").select("*").execute()
        return result.data or []
    except Exception:
        return []


# ── Mount router ─────────────────────────────────────────────────────────────
app.include_router(api_router)
