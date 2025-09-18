import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <div className="h-4 w-4 rounded bg-primary-foreground opacity-90"></div>
              </div>
              <span className="font-bold">Digilink IT Solutions</span>
            </div>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">
              Connecting You to the Digital World.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.linkedin.com/company/109102904/admin/dashboard/" className="text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-accent-foreground/80">Modern Work (Microsoft 365)</span>
              </li>
              <li>
                <span className="text-accent-foreground/80">Voice on Teams</span>
              </li>
              <li>
                <span className="text-accent-foreground/80">Mimecast Email Security</span>
              </li>
              <li>
                <span className="text-accent-foreground/80">Migration: A Seamless Transition to the Cloud</span>
              </li>
               <li>
                <span className="text-accent-foreground/80">Cloud Backup Solutions</span>
              </li>
               <li>
                <span className="text-accent-foreground/80">Outsourced IT Support</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-foreground/60" />
                <a
                  href="mailto:info@digilinkict.co.za"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  info@digilinkict.co.za
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-foreground/60" />
                <a
                  href="https://wa.me/270603961862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors cursor-pointer"
                >
                  +27 (0) 60 396 1862
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-accent-foreground/60">© 2025 Digilink IT Solutions. All rights reserved.</p>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
