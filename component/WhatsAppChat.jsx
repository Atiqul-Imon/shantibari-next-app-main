import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/8801325167271"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        textDecoration: "none",
        fontSize: "30px"
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
