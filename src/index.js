import express from "express";

const app = express();

// Define a route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
