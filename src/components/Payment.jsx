import React from "react";
import instance from "../services/instance";

const Payment = () => {
  const handlePayment = async () => {
    try {
      // Create an order on the server
      const response = await instance.post("/payments/create-order", {
        amount: 500, // Amount in INR
        currency: "INR",
      });

      const { id: orderId } = response.data;

      // Initialize Razorpay
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: response.data.amount, // Amount in paise
        currency: response.data.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: orderId, // Use the order ID created on the server
        handler: function (response) {
          // Handle successful payment here
          console.log("Payment successful:", response);
          alert("Payment successful!");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
