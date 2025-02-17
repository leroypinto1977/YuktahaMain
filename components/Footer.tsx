import { FooterMain } from "./ui/footer-section";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="block">
      {/* <div className="container mx-auto flex justify-between items-center">
        <p>&copy; Yuktaha 2025 | All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-600">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div> */}
      <FooterMain />
    </footer>
  );
}
