const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
