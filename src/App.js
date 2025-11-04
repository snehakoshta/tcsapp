import React, { useState } from "react";
import "./style/custom.css";
import QRImage from "./assets/image.png"; // ✅ Ensure the image exists

// 🧩 Define all product sections
const PRODUCTS = [
  {
    id: 1,
    name: "Complete Aptitude PDF",
    price: 29,
    color: "indigo",
    whatsapp: "https://chat.whatsapp.com/F1FLKhjhHVY5von88wddJU?mode=wwt",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfTpVy8Ue7nfakGf7Qie4usfIbm2frL3UKOfk1AhPi6r_o_Cw/viewform?usp=publish-editor",
    description:
      "20+ Topic Summaries, Shortcut Methods, and Level-wise Questions designed for TCS NQT 2025.",
    features: [
      "Time & Work, Profit–Loss, Ratio, and Geometry topics",
      "Level-wise Practice Sets (L1–L5)",
      "Formula Tables & Short Tricks",
    ],
  },
  {
    id: 2,
    name: "Verbal Mastery Set",
    price: 29,
    color: "pink",
    whatsapp: "https://chat.whatsapp.com/CuGU5rWKUahHC70Q7dYz9R?mode=wwt",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfTpVy8Ue7nfakGf7Qie4usfIbm2frL3UKOfk1AhPi6r_o_Cw/viewform?usp=publish-editor",
    description:
      "Polish your grammar, vocabulary, and reading skills with topic-wise questions and explanations.",
    features: [
      "Grammar & Sentence Correction",
      "Reading Comprehension Practice",
      "Vocabulary, Antonyms, and Synonyms",
    ],
  },
  {
    id: 3,
    name: "Programming Practice Set",
    price: 29,
    color: "green",
    whatsapp: "https://chat.whatsapp.com/JMiqqmbLmSk5fcwgSVnp7i?mode=wwt",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfTpVy8Ue7nfakGf7Qie4usfIbm2frL3UKOfk1AhPi6r_o_Cw/viewform?usp=publish-editor",
    description:
      "C, C++, Java, and Python MCQs with concept explanations & coding snippets for TCS-style problems.",
    features: [
      "50+ Programming MCQs",
      "Language Syntax & Concepts",
      "C, C++, Java, and Python Basics",
    ],
  },
  {
    id: 4,
    name: "Reasoning Booster Pack",
    price: 29,
    color: "yellow",
    whatsapp: "https://chat.whatsapp.com/ChxD0tPjkGKCGCLDsshvep?mode=wwt",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfTpVy8Ue7nfakGf7Qie4usfIbm2frL3UKOfk1AhPi6r_o_Cw/viewform?usp=publish-editor",
    description:
      "Reasoning  ability questions covering puzzles, seating arrangements, syllogisms, and more.",
    features: [
      "Puzzles & Seating Arrangements Questions",
      "Syllogisms, Blood Relations, and Directions",
      "Detailed Explanations for Each Question",
    ],
  },
  {
    id: 5,
    name: "Previous Year Questions (PYQs)",
    price: 29,
    color: "yellow",
    whatsapp: "https://chat.whatsapp.com/F1FLKhjhHVY5von88wddJU?mode=wwt",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfTpVy8Ue7nfakGf7Qie4usfIbm2frL3UKOfk1AhPi6r_o_Cw/viewform?usp=publish-editor",
    description:
      "Curated set of 2021–2024 TCS NQT & TCS Digital previous year questions with detailed explanations.",
    features: [
      "Actual TCS NQT & Digital Questions (2021–2024)",
      "Solutions with step-by-step explanations",
      "Topic tags for each question (Aptitude, Verbal, Reasoning, etc.)",
    ],
  },
];

export default function TCSNQTApp() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // ✅ Join WhatsApp Group
  const handleJoinGroup = (product) => {
    window.open(product.whatsapp, "_blank");

    setTimeout(() => {
      const phoneNumber = "7089185009"; // 🔁 Replace with your own number
      const message = encodeURIComponent(
        `Hi! I’ve joined the WhatsApp group for ${product.name}. Please share the payment link.`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }, 2000);
  };

  // ✅ Open QR Modal for a specific product
  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowQRModal(true);
  };

  // ✅ Copy Google Form link
  const handleCopyForm = (link) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ✅ Open form after payment
  const handleAfterPayment = () => {
    if (selectedProduct?.form) {
      window.open(selectedProduct.form, "_blank");
    }
    setShowQRModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        🚀 TCS NQT 2025-2026 Preparation PDFs
      </h1>
      <p className="text-gray-600 text-center max-w-2xl">
        Choose the module you want to master — join the WhatsApp group for
        guidance, preview, and instant payment options.
      </p>

      {/* 🧠 Product Cards */}
      {PRODUCTS.map((product) => (
        <div
          key={product.id}
          className={`max-w-3xl w-full bg-white border-l-4 border-${product.color}-500 rounded-2xl shadow-md p-6 transition-all hover:shadow-lg`}
        >
          <div className="flex justify-between flex-wrap items-start gap-3">
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p>
            </div>
            <span
              className={`bg-${product.color}-50 text-${product.color}-700 px-3 py-1 rounded-full font-medium`}
            >
              ₹{product.price}
            </span>
          </div>

          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1 text-sm">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => handleJoinGroup(product)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
            >
              Join WhatsApp Group
            </button>

            <button
              onClick={() => handleBuyNow(product)}
              className={`px-4 py-2 bg-${product.color}-600 text-white rounded-lg hover:bg-${product.color}-700 shadow`}
            >
              Buy Now (Scan QR)
            </button>

            <button
              onClick={() => handleCopyForm(product.form)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Copy Form Link
            </button>
          </div>

          {copied && (
            <p className="mt-2 text-sm text-green-600">
              ✅ Google Form link copied to clipboard!
            </p>
          )}
        </div>
      ))}

      {/* ✅ Payment QR Modal */}
      {showQRModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center animate-fadeSlideIn">
            <h3 className="text-lg font-semibold">
              Scan & Pay ₹{selectedProduct.price}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Use any UPI app (Google Pay / PhonePe / Paytm)
            </p>
            <img
              src={QRImage}
              alt="Payment QR"
              className="mx-auto w-56 h-56 rounded-lg border"
            />
            <p className="text-xs text-gray-500 mt-3">
              After payment, click below to fill your details form.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={handleAfterPayment}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                I’ve Paid — Fill Form
              </button>
              <button
                onClick={() => setShowQRModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
