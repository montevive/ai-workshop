# Time Bank Experience Platform - Backend

## Overview
Backend service for the Time Bank Experience Platform built with FastAPI and PostgreSQL 16, handling experience management, bookings, and user interactions for the Granada MVP.

## 🛠 Tech Stack
- **Runtime**: Python 3.11+
- **Framework**: FastAPI 0.104+
- **Database**: PostgreSQL 16
- **ORM**: SQLAlchemy 2.0+
- **Authentication**: JWT (python-jose)
- **Password Hashing**: Passlib with bcrypt
- **Payment Processing**: Stripe
- **Email Service**: FastAPI-Mail
- **File Storage**: AWS S3 (boto3)
- **Caching**: Redis
- **Task Queue**: Celery
- **Testing**: Pytest
- **Documentation**: OpenAPI (Swagger UI & ReDoc)
- **Logging**: Loguru
- **Monitoring**: Prometheus + Grafana
- **Schema Validation**: Pydantic v2

## 📁 Project Structure
app/
├── alembic/            # Database migrations
├── api/                # API routes
│   ├── v1/             # API v1 endpoints
│   └── dependencies/   # Endpoint dependencies
├── core/               # Core functionality
│   ├── config.py      # Configuration settings
│   ├── security.py    # Security utilities
│   └── events.py      # Event handlers
├── db/                 # Database
│   ├── base.py        # Base classes
│   ├── session.py     # Database session
│   └── init_db.py     # Database initialization
├── models/            # SQLAlchemy models
├── schemas/           # Pydantic schemas
├── services/          # Business logic
├── utils/             # Utility functions
├── tests/             # Test files
└── main.py            # Application entry point
## 🗄️ Database Schema (PostgreSQL 16)

### Core Tables
```sql
-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Providers Table
CREATE TABLE providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    business_name VARCHAR(255),
    description TEXT,
    location GEOMETRY(Point, 4326),
    verification_status VARCHAR(50),
    rating DECIMAL(3,2),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Experiences Table
CREATE TABLE experiences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID REFERENCES providers(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL,
    max_participants INTEGER,
    base_price DECIMAL(10,2),
    location GEOMETRY(Point, 4326),
    category VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Time Slots Table
CREATE TABLE time_slots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    experience_id UUID REFERENCES experiences(id),
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    availability INTEGER,
    credits_required INTEGER,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    time_slot_id UUID REFERENCES time_slots(id),
    status VARCHAR(50),
    credits_used INTEGER,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
🚀 Getting StartedPrerequisites
Python 3.11+
PostgreSQL 16
Redis
AWS Account (for S3)
Stripe Account
Environment SetupCreate a .env file in the root directory:# App
APP_ENV=development
DEBUG=True
SECRET_KEY=your_secret_key
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/timebank
ASYNC_DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/timebank

# JWT
JWT_SECRET_KEY=your_jwt_secret
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# AWS
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=eu-west-1
S3_BUCKET=your_bucket_name

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# Redis
REDIS_URL=redis://localhost:6379

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_password
Installation# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Unix
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Run database migrations
alembic upgrade head

# Start development server
uvicorn app.main:app --reload
📋 API DocumentationFastAPI automatically generates OpenAPI documentation. Access it at:
Swagger UI: http://localhost:8000/docs
ReDoc: http://localhost:8000/redoc
Main API Routes# Authentication
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password

# Users
GET /api/v1/users/me
PUT /api/v1/users/me
GET /api/v1/users/{id}

# Providers
POST /api/v1/providers
GET /api/v1/providers
GET /api/v1/providers/{id}
PUT /api/v1/providers/{id}
DELETE /api/v1/providers/{id}

# Experiences
POST /api/v1/experiences
GET /api/v1/experiences
GET /api/v1/experiences/{id}
PUT /api/v1/experiences/{id}
DELETE /api/v1/experiences/{id}
GET /api/v1/experiences/search

# Bookings
POST /api/v1/bookings
GET /api/v1/bookings
GET /api/v1/bookings/{id}
PUT /api/v1/bookings/{id}/status
DELETE /api/v1/bookings/{id}
🧪 Testing# Run all tests
pytest

# Run specific test file
pytest tests/api/test_experiences.py

# Run with coverage
pytest --cov=app

# Generate coverage report
pytest --cov=app --cov-report=html
🔄 Database Migrations# Create new migration
alembic revision --autogenerate -m "description"

# Run migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
🔍 Monitoring and LoggingLogging Configurationfrom loguru import logger

logger.add(
    "logs/timebank.log",
    rotation="500 MB",
    retention="10 days",
    level="INFO"
)
Monitoring EndpointsGET /health           # Health check
GET /metrics          # Prometheus metrics
🚀 DeploymentDocker DeploymentFROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
# Build image
docker build -t timebank-backend .

# Run container
docker run -p 8000:8000 timebank-backend
📈 Performance Optimization
Database query optimization
Async database operations
Redis caching
Background task processing with Celery
Response compression
Database connection pooling
Requirementsfastapi>=0.104.0
uvicorn>=0.24.0
sqlalchemy>=2.0.23
alembic>=1.12.1
asyncpg>=0.29.0
python-jose>=3.3.0
passlib>=1.7.4
pydantic>=2.4.2
pydantic-settings>=2.0.3
loguru>=0.7.2
pytest>=7.4.3
pytest-asyncio>=0.21.1
httpx>=0.25.1
redis>=5.0.1
celery>=5.3.4
stripe>=7.6.0
boto3>=1.29.3
python-multipart>=0.0.6
🤝 Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 LicenseMIT License - see the LICENSE.md file for details