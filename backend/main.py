from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from loguru import logger

#from app.api.v1 import auth, users, providers, experiences, bookings
from app.api.v1 import users
from app.core.config import settings
#from app.db.init_db import init_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting up Time Bank Experience Platform")
    # await init_db()
    yield
    # Shutdown
    logger.info("Shutting down Time Bank Experience Platform")

app = FastAPI(
    title="Time Bank Experience Platform",
    description="Backend service for the Time Bank Experience Platform",
    version="1.0.0",
    lifespan=lifespan,
)

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins='*',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
#app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
#app.include_router(providers.router, prefix="/api/v1/providers", tags=["Providers"])
#app.include_router(experiences.router, prefix="/api/v1/experiences", tags=["Experiences"])
#app.include_router(bookings.router, prefix="/api/v1/bookings", tags=["Bookings"])

# Set up logging
logger.add(
    "logs/timebank.log",
    rotation="500 MB",
    retention="10 days",
    level="INFO"
)

@app.get("/health", tags=["Health"])
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)