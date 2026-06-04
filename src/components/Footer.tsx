"use client";

import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter, Youtube, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Instagram Growth", href: "/instagram-growth-services/" },
    { label: "YouTube Growth", href: "/youtube-silver-play-button-assistance/" },
    { label: "SEO Services", href: "/seo-services/" },
    { label: "Website Development", href: "/website-development-services/" },
    { label: "Press Release", href: "/press-release-creation-global-publication-services/" },
    { label: "WhatsApp Marketing", href: "/whatsapp-marketing-services/" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Return & Refund Policy", href: "/return-refund" },
  ],
};

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/mysocialcrux/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/p/Mysocialcrux-100091347507129/", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0B0F19", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginBottom: "20px" }}>
              <img
                src="/logo.png"
                alt="MySocialCrux"
                style={{ height: "52px", width: "auto", display: "block" }}
              />
            </Link>
            <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: 1.7, marginBottom: "8px", maxWidth: "280px" }}>
              A premium digital marketing agency helping ambitious brands scale their social presence, dominate search rankings, and drive real revenue growth.
            </p>
            <p style={{ color: "#6B7280", fontSize: "11px", lineHeight: 1.6, marginBottom: "24px", maxWidth: "280px" }}>
              Owned &amp; operated by<br />
              <span style={{ color: "#9CA3AF", fontWeight: 600 }}>MEILLEURE PROMOTIONS SERVICES PRIVATE LIMITED</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {[
                { icon: Mail, text: "ankit@mysocialcrux.com", href: "mailto:ankit@mysocialcrux.com" },
                { icon: Phone, text: "+91 72299 23456", href: "tel:+917229923456" },
                { icon: MapPin, text: "E-42, Anand Puri, Adarsh Nagar, Jaipur 302004", href: "https://maps.google.com/?q=E-42+Anand+Puri+Adarsh+Nagar+Jaipur" },
              ].map((item) => (
                <a key={item.text} href={item.href} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#9CA3AF", fontSize: "13px", textDecoration: "none" }}>
                  <item.icon size={13} style={{ color: "#FF3EA5", flexShrink: 0 }} />
                  {item.text}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                }}>
                  <s.icon size={15} style={{ color: "#9CA3AF" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ color: "#9CA3AF", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter removed */}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.4)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto", padding: "18px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "8px",
        }}>
          <div>
            <p style={{ color: "#6B7280", fontSize: "12px", marginBottom: "2px" }}>
              © 2026 MEILLEURE PROMOTIONS SERVICES PRIVATE LIMITED. All Rights Reserved.
            </p>
            <p style={{ color: "#4B5563", fontSize: "11px" }}>
              MySocialCrux is a brand operated by MEILLEURE PROMOTIONS SERVICES PRIVATE LIMITED
            </p>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
              { label: "Refund Policy", href: "/return-refund" },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{ color: "#6B7280", fontSize: "12px", textDecoration: "none" }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:640px){.footer-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}
