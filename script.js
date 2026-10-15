/*
  GLOSSITUP.IN — simple static landing page.
  Before launch, replace WHATSAPP_NUMBER with your WhatsApp number in international format:
  India example: 919876543210 (country code + number, no +, spaces, or dashes).
*/
const WHATSAPP_NUMBER = "9082494056"; // TODO: replace with your business WhatsApp number

const orderMessage = (product) =>
  `Hi Gloss It Up! 💗 I'd like to order ${product}. Please share availability and delivery details.`;

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    window.open(whatsappUrl(orderMessage(product)), "_blank", "noopener,noreferrer");
  });
});

const floatButton = document.getElementById("whatsapp-float");
floatButton.href = whatsappUrl("your lip gloss collection");
floatButton.target = "_blank";
floatButton.rel = "noopener noreferrer";

const contactLink = document.getElementById("contact-link");
contactLink.href = whatsappUrl("Hi Gloss It Up! I'd like to know more.");
contactLink.target = "_blank";
contactLink.rel = "noopener noreferrer";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const existing = document.querySelector(".mobile-nav");
  if (existing) {
    existing.remove();
    menuToggle.setAttribute("aria-expanded", "false");
    return;
  }
  const nav = document.createElement("nav");
  nav.className = "mobile-nav";
  nav.innerHTML = '<a href="#shop">Shop gloss</a><a href="#about">Our vibe</a><a href="#reviews">Love notes</a>';
  Object.assign(nav.style, {
    position: "absolute", top: "70px", left: "0", right: "0", padding: "18px 7%",
    display: "grid", gap: "16px", background: "#fffaf8", borderBottom: "1px solid #f0dfe5",
    boxShadow: "0 10px 20px #301a2510", fontSize: "13px", zIndex: "10"
  });
  document.querySelector(".site-header").appendChild(nav);
  menuToggle.setAttribute("aria-expanded", "true");
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.remove();
    menuToggle.setAttribute("aria-expanded", "false");
  }));
});
