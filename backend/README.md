# Backend API Documentation

## Base URL
```
http://localhost:5000
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer your_jwt_token_here
```

## Endpoints

### Health Check
```http
GET /health
```
Test if the server and database are running.

#### Response
```json
{
  "success": true,
  "timestamp": "2025-09-12T14:XX:XX.XXXZ",
  "service": "Backend API",
  "status": "running",
  "database": {
    "status": "connected"
  }
}
```

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123",
  "role": "Admin"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer your_token_here
```

### Products

#### Get All Products
```http
GET /api/products
```

#### Get Single Product
```http
GET /api/products/:id
```

#### Create Product
```http
POST /api/products
Authorization: Bearer your_token_here
Content-Type: application/json

{
  "name": "Test Product",
  "category": "Electronics",
  "stockLevel": 100,
  "reorderPoint": 10
}
```

#### Update Product
```http
PUT /api/products/:id
Authorization: Bearer your_token_here
Content-Type: application/json

{
  "name": "Updated Product",
  "category": "Electronics",
  "stockLevel": 150,
  "reorderPoint": 20
}
```

#### Delete Product
```http
DELETE /api/products/:id
Authorization: Bearer your_token_here
```

#### Update Stock Level
```http
PATCH /api/products/:id/stock
Authorization: Bearer your_token_here
Content-Type: application/json

{
  "stockLevel": 75
}
```

### Suppliers

#### Get All Suppliers
```http
GET /api/suppliers
Authorization: Bearer your_token_here
```

#### Get Single Supplier
```http
GET /api/suppliers/:id
Authorization: Bearer your_token_here
```

#### Create Supplier
```http
POST /api/suppliers
Authorization: Bearer your_token_here
Content-Type: application/json

{
  "name": "Test Supplier",
  "contactInfo": "contact@supplier.com"
}
```

#### Update Supplier
```http
PUT /api/suppliers/:id
Authorization: Bearer your_token_here
Content-Type: application/json

{
  "name": "Updated Supplier",
  "contactInfo": "updated@supplier.com"
}
```

#### Delete Supplier
```http
DELETE /api/suppliers/:id
Authorization: Bearer your_token_here
```

## Database Setup

1. Local MongoDB:
   - Install MongoDB locally
   - Use the default connection string in .env:
     ```
     MONGODB_URI=mongodb://localhost:27017/inventory_management
     ```

2. MongoDB Atlas (Recommended for development):
   - Create a free account at MongoDB Atlas
   - Create a cluster
   - Get your connection string and update .env:
     ```
     MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/inventory_management
     ```

## Testing Steps

1. Start the server:
   ```bash
   npm start
   ```

2. Test health endpoint:
   ```bash
   curl http://localhost:5000/health
   ```

3. Register an admin user:
   ```bash
   curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123","role":"Admin"}'
   ```

4. Login to get JWT token:
   ```bash
   curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'
   ```

5. Use the token for authenticated requests:
   ```bash
   curl -H "Authorization: Bearer your_token_here" http://localhost:5000/api/products
   ```

## Role-Based Access

- Admin: Full access to all endpoints
- Manager: Can create/update products and suppliers
- Staff: Can view products and update stock levels

## Error Responses

```json
{
  "success": false,
  "message": "Error message here"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error