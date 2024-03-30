const express = require("express");
const session = require("express-session");
const passport = require("./passport");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const User = require("./model/user");
const app = express();
const PORT = process.env.PORT || 5000;
const { isLoggedIn } = require("./middleware/checkAuth");

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      dbName: "beckn",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  dbName: "beckn",
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected");
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route to fetch user data
app.get("/api/user", isLoggedIn, async (req, res) => {
  const email = req.user.email; // Assuming the email ID is passed as a query parameter
  try {
    // Fetch user data from the database based on the email ID
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Send user data as a JSON response
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/signup",
    successRedirect: "http://localhost:3000/dashboard",
  }),
  (req, res) => {
    res.send("Thank You for signing in!");
  }
);

app.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
      res.send("Error logging out");
    } else {
      res.redirect(`http://localhost:3000/`);
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
