# 🐾 PawMart - Server

Backend API server for PawMart e-commerce platform, handling business logic, database operations, and secure data management for pet supply operations.

## 🌐 Live Links

- **Server API**: [https://paw-mart-server-fawn.vercel.app](https://paw-mart-server-fawn.vercel.app)
- **Client Application**: [https://pawmartclient321.firebaseapp.com](https://pawmartclient321.firebaseapp.com)
- **Server Repository**: [GitHub](https://github.com/mamun007molla/PawMartServer.git)
- **Client Repository**: [GitHub](https://github.com/mamun007molla/pawMartClient.git)

## 📋 Project Overview

PawMart Server is a robust RESTful API built with Node.js and Express.js, providing comprehensive backend services for the PawMart e-commerce platform. It handles user authentication, product management, order processing, and secure database operations.

## 🛠️ Technologies Used

### Runtime & Framework
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework

### Database
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JSON Web Tokens (JWT)** - Secure authentication
- **bcrypt** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Additional Tools
- **Nodemon** - Development server auto-restart
- **Vercel** - Deployment platform

## ✨ Core Features

- **RESTful API Architecture**: Clean and scalable API design
- **User Management**: Registration, login, and profile management
- **Product Operations**: CRUD operations for pet supplies
- **Order Processing**: Complete order management system
- **Authentication Middleware**: JWT-based route protection
- **Database Integration**: MongoDB with Mongoose ODM
- **Error Handling**: Comprehensive error management
- **CORS Configuration**: Secure cross-origin requests
- **Environment Configuration**: Secure credential management

## 📦 Dependencies

```json
{
  "dependencies": {
    "express": "^4.x",
    "mongodb": "^6.x",
    "mongoose": "^8.x",
    "cors": "^2.x",
    "dotenv": "^16.x",
    "jsonwebtoken": "^9.x",
    "bcrypt": "^5.x"
  },
  "devDependencies": {
    "nodemon": "^3.x"
  }
}
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mamun007molla/PawMartServer.git
   cd PawMartServer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLIENT_URL=https://pawmartclient321.firebaseapp.com
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The server will start at `http://localhost:5000`

### Production Deployment

For production deployment on Vercel:

```bash
npm run build
vercel --prod
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status (Admin)

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (Admin)

## 📁 Project Structure

```
PawMartServer/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── productController.js
│   ├── orderController.js
│   └── userController.js
├── middleware/
│   ├── auth.js            # JWT authentication
│   ├── admin.js           # Admin authorization
│   └── errorHandler.js    # Error handling
├── models/
│   ├── User.js            # User schema
│   ├── Product.js         # Product schema
│   └── Order.js           # Order schema
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── userRoutes.js
├── utils/
│   ├── validation.js      # Input validation
│   └── helpers.js         # Helper functions
├── .env                   # Environment variables
├── .gitignore
├── server.js              # Entry point
├── package.json
└── vercel.json            # Vercel configuration
```

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **JWT Authentication**: Token-based authentication system
- **Input Validation**: Comprehensive request validation
- **CORS Protection**: Configured cross-origin policies
- **Environment Variables**: Sensitive data protection
- **Error Handling**: Secure error messages

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

## 📊 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['user', 'admin']),
  createdAt: Date,
  updatedAt: Date
}
```

### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  category: String,
  brand: String,
  stock: Number,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Model
```javascript
{
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: String,
  shippingAddress: Object,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Deployment

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Set environment variables in Vercel dashboard

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Mamun Molla**
- GitHub: [@mamun007molla](https://github.com/mamun007molla)

## 🙏 Acknowledgments

- Thanks to the Node.js and Express.js communities
- MongoDB for excellent database solutions
- Vercel for seamless deployment

---

**Note**: Ensure all environment variables are properly configured before running the server. Never commit the `.env` file to version control.
