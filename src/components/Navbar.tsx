"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Instagram, Facebook, Linkedin, Twitter, Youtube, Send, Music, TrendingUp, Globe, Search, FileText, PenTool, MessageCircle, Smartphone, BarChart2 } from "lucide-react";
import { megaMenuCategories } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Instagram, Facebook, Linkedin, Twitter, Youtube, Send, Music, TrendingUp,
  Globe, Search, FileText, PenTool, MessageCircle, Smartphone, BarChart2,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
    transition: "all 0.4s ease",
    background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={navStyle}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
              <img
                src="/logo.png"
                alt="MySocialCrux"
                style={{ height: "44px", width: "auto", display: "block", objectFit: "contain" }}
              />
            </Link>

            {/* Desktop Nav */}
            <div ref={megaRef} style={{ display: "flex", alignItems: "center", gap: "4px" }} className="desktop-nav">
              <button
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen(!megaOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  padding: "8px 14px", borderRadius: "8px", border: "none",
                  background: "transparent", color: "#D1D5DB", fontSize: "14px",
                  fontWeight: 500, cursor: "pointer",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = "#D1D5DB"; }}
              >
                Services
                <ChevronDown size={13} style={{ transition: "transform 0.3s", transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {[
                { label: "About", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href} style={{
                  padding: "8px 14px", borderRadius: "8px",
                  color: "#D1D5DB", fontSize: "14px", fontWeight: 500,
                  textDecoration: "none", transition: "color 0.2s",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-nav">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(255,62,165,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "10px 22px", borderRadius: "999px",
                    background: "linear-gradient(135deg, #FF3EA5, #FF6B00)",
                    color: "#FFFFFF", fontWeight: 700, fontSize: "13px",
                    cursor: "pointer", textDecoration: "none",
                  }}
                >
                  Let&apos;s Talk <ArrowRight size={13} />
                </motion.span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: "8px" }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              onMouseLeave={() => setMegaOpen(false)}
              style={{
                position: "absolute", top: "100%", left: 0, right: 0,
                background: "rgba(11,15,25,0.97)", backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 32px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
                  {megaMenuCategories.map((cat, ci) => (
                    <motion.div
                      key={cat.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ci * 0.04 }}
                    >
                      <div style={{
                        fontSize: "10px", fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.12em", color: cat.color,
                        marginBottom: "14px", paddingBottom: "10px",
                        borderBottom: `1px solid ${cat.color}30`,
                      }}>
                        {cat.title}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {cat.services.map((svc) => {
                          const Icon = iconMap[svc.icon] || Globe;
                          return (
                            <Link
                              key={svc.slug}
                              href={svc.slug}
                              onClick={() => setMegaOpen(false)}
                              style={{ textDecoration: "none" }}
                            >
                              <motion.div
                                whileHover={{ background: "rgba(255,255,255,0.05)", x: 2 }}
                                style={{
                                  display: "flex", alignItems: "center", gap: "10px",
                                  padding: "9px 10px", borderRadius: "8px",
                                  cursor: "pointer",
                                }}
                              >
                                <div style={{
                                  width: "30px", height: "30px", borderRadius: "7px", flexShrink: 0,
                                  background: cat.color + "20", display: "flex",
                                  alignItems: "center", justifyContent: "center",
                                }}>
                                  <Icon size={13} style={{ color: cat.color }} />
                                </div>
                                <span style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.3, flex: 1 }}>
                                  {svc.name}
                                </span>
                                <ArrowRight size={11} style={{ color: "#4B5563", flexShrink: 0 }} />
                              </motion.div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div style={{
                  marginTop: "28px", paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <p style={{ fontSize: "13px", color: "#6B7280" }}>
                    Not sure which service?{" "}
                    <Link href="/contact" onClick={() => setMegaOpen(false)} style={{ color: "#FF3EA5", textDecoration: "none" }}>
                      Get a free consultation →
                    </Link>
                  </p>
                  <Link href="/services" onClick={() => setMegaOpen(false)} style={{
                    fontSize: "13px", fontWeight: 600, color: "#FFFFFF",
                    background: "rgba(255,255,255,0.08)", padding: "8px 16px",
                    borderRadius: "8px", textDecoration: "none",
                  }}>
                    View All Services
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 999,
              background: "#0B0F19", overflowY: "auto",
              paddingTop: "88px", paddingLeft: "24px", paddingRight: "24px", paddingBottom: "40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 0", background: "none", border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  color: "#FFFFFF", fontSize: "16px", fontWeight: 600, cursor: "pointer", width: "100%",
                }}
              >
                Services
                <ChevronDown size={16} style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden" }}
                  >
                    {megaMenuCategories.map((cat) => (
                      <div key={cat.title} style={{ paddingLeft: "16px", paddingTop: "12px", paddingBottom: "4px" }}>
                        <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: cat.color, marginBottom: "8px" }}>
                          {cat.title}
                        </div>
                        {cat.services.map((svc) => (
                          <Link key={svc.slug} href={svc.slug} onClick={() => setMobileOpen(false)} style={{
                            display: "block", padding: "8px 0", fontSize: "14px",
                            color: "#9CA3AF", textDecoration: "none",
                          }}>
                            {svc.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {[
                { label: "About", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} style={{
                  display: "block", padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  color: "#FFFFFF", fontSize: "16px", fontWeight: 600, textDecoration: "none",
                }}>
                  {link.label}
                </Link>
              ))}
              <div style={{ paddingTop: "24px" }}>
                <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
                  display: "block", textAlign: "center", padding: "16px",
                  borderRadius: "999px", background: "linear-gradient(135deg, #FF3EA5, #FF6B00)",
                  color: "#FFFFFF", fontWeight: 700, fontSize: "15px", textDecoration: "none",
                }}>
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 1023px) { .desktop-nav { display: none !important; } }
      `}</style>
    </>
  );
}
