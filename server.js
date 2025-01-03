const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const errorHandler = require('./middleware/errorMiddleware');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express App
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
