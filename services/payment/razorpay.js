const Razorpay = require("razorpay"); // Correct import with uppercase 'R'

const dotenv = require("dotenv");
dotenv.config({ path: ".env" }); // Loads environment variables from the .env file

// Create a new Razorpay instance with uppercase 'R'
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID, // Your Razorpay API key ID
  key_secret: process.env.RAZORPAY_API_SECRET, // Your Razorpay API secret
});

// Export the instance
module.exports = { instance };
