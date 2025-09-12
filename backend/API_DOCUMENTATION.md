# API Documentation

## Base URL
```
http://localhost:5000
```

## Authentication Endpoints

### 1. Register User
```http
POST /api/auth/register
```

#### Request Body
```json
{
    "username": "testadmin",
    "password": "Test@123",
    "role": "Admin"
}
```

#### Success Response
```json
{
    "success": true,
    "message": "User registered successfully",
    "user": {
        "username": "testadmin",
        "role": "Admin",
        "createdAt": "2025-09-12T15:30:00.000Z",
        "_id": "example_user_id"
    }
}
```

#### Error Response
```json
{
    "success": false,
    "message": "Username already exists"
}
```

### 2. Login
```http
POST /api/auth/login
```

#### Request Body
```json
{
    "username": "testadmin",
    "password": "Test@123"
}
```

#### Success Response
```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "example_user_id",
        "username": "testadmin",
        "role": "Admin"
    }
}
```

#### Error Response
```json
{
    "success": false,
    "message": "Invalid credentials"
}
```

## Product Endpoints

### 1. Get All Products
```http
GET /api/products
Authorization: Bearer your_token_here
```

#### Success Response
```json
{
    "success": true,
    "products": [
        {
            "_id": "product_id_1",
            "name": "Product 1",
            "category": "Electronics",
            "stockLevel": 100,
            "reorderPoint": 10,
            "createdAt": "2025-09-12T15:30:00.000Z",
            "updatedAt": "2025-09-12T15:30:00.000Z"
        }
    ]
}
```

### 2. Create Product
```http
POST /api/products
Authorization: Bearer your_token_here
```

#### Request Body
```json
{
    "name": "New Product",
    "category": "Electronics",
    "stockLevel": 100,
    "reorderPoint": 10
}
```

#### Success Response
```json
{
    "success": true,
    "product": {
        "_id": "new_product_id",
        "name": "New Product",
        "category": "Electronics",
        "stockLevel": 100,
        "reorderPoint": 10,
        "createdAt": "2025-09-12T15:30:00.000Z",
        "updatedAt": "2025-09-12T15:30:00.000Z"
    }
}
```

## Supplier Endpoints

### 1. Get All Suppliers
```http
GET /api/suppliers
Authorization: Bearer your_token_here
```

#### Success Response
```json
{
    "success": true,
    "suppliers": [
        {
            "_id": "supplier_id_1",
            "name": "Supplier 1",
            "contactInfo": "contact@supplier1.com",
            "createdAt": "2025-09-12T15:30:00.000Z",
            "updatedAt": "2025-09-12T15:30:00.000Z"
        }
    ]
}
```

### 2. Create Supplier
```http
POST /api/suppliers
Authorization: Bearer your_token_here
```

#### Request Body
```json
{
    "name": "New Supplier",
    "contactInfo": "contact@newsupplier.com"
}
```

#### Success Response
```json
{
    "success": true,
    "supplier": {
        "_id": "new_supplier_id",
        "name": "New Supplier",
        "contactInfo": "contact@newsupplier.com",
        "createdAt": "2025-09-12T15:30:00.000Z",
        "updatedAt": "2025-09-12T15:30:00.000Z"
    }
}
```

## Health Check Endpoint

### Check Server and Database Health
```http
GET /health
```

#### Success Response
```json
{
    "success": true,
    "timestamp": "2025-09-12T15:30:00.000Z",
    "service": "Backend API",
    "status": "running",
    "database": {
        "status": "connected"
    }
}
```

## Testing Guide

1. First, test the health endpoint to ensure server and database are running:
```bash
curl http://localhost:5000/health
```

2. Register a new admin user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testadmin",
    "password": "Test@123",
    "role": "Admin"
  }'
```

3. Login to get JWT token:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testadmin",
    "password": "Test@123"
  }'
```

4. Use the received token for authenticated requests:
```bash
# Replace YOUR_TOKEN with the token received from login
curl http://localhost:5000/api/products \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Error Handling

All endpoints follow this error response format:
```json
{
    "success": false,
    "message": "Error description here"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized (missing or invalid token)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 500: Server Error

## Notes
- All authenticated endpoints require the JWT token in the Authorization header
- Token format: `Bearer your_token_here`
- Role hierarchy: Admin > Manager > Staff
- Dates are in ISO 8601 format