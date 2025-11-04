import React from "react";
import "../style/custom.css";
import qrImage from "../assets/image.png"; // <-- Add your QR code image in /src/assets/

export default function PaymentPage() {
  return (
    <div className="payment-page">
      <div className="payment-card shadow-lg">
        <h1>💳 Secure Payment — Aptitude Formula PDF</h1>
        <p className="subtext">
          TCS NQT 2025 Study Material — Level-Wise Questions & Shortcuts
        </p>

        <div className="price-box">
          <span className="currency">₹</span>
          <span className="amount">99</span>
        </div>

        <p className="desc">
          Scan the QR code below or click the button to pay securely using UPI /
          Paytm / GPay.
        </p>

        <img src={qrImage} alt="Payment QR" className="qr-code" />

        <div className="button-group">
          <a href="" target="_blank" rel="noreferrer" className="pay-button">
            Proceed to Payment Page
          </a>
        </div>

        <p className="note">
          ⚠️ After payment, send a screenshot on WhatsApp to get your PDF &
          bonuses instantly.
        </p>
      </div>
    </div>
  );
}
