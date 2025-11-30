import { Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  destinations: [
    { label: "Asia", href: "#" },
    { label: "Europe", href: "#" },
    { label: "Africa", href: "#" },
    { label: "Americas", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Travel Insurance", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold" data-testid="text-footer-brand">Booking Shooking</h3>
            <p className="text-sm text-accent-foreground/80" data-testid="text-footer-tagline">
            Booking Shooking makes travel simple, personal, and stress-free, just the way holidays should feel.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover-elevate flex h-10 w-10 items-center justify-center rounded-md border border-accent-border bg-accent-foreground/10"
                aria-label="WhatsApp"
                data-testid="link-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/booking.shooking?igsh=MWZ1N3loa3ZtNGozZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate flex h-10 w-10 items-center justify-center rounded-md border border-accent-border bg-accent-foreground/10"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/booking-shooking/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate flex h-10 w-10 items-center justify-center rounded-md border border-accent-border bg-accent-foreground/10"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold" data-testid="text-footer-company-heading">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-accent-foreground/80 hover:text-accent-foreground" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold" data-testid="text-footer-destinations-heading">Destinations</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-accent-foreground/80 hover:text-accent-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold" data-testid="text-footer-contact-heading">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" data-testid="icon-phone" />
                <span className="text-accent-foreground/80" data-testid="text-phone">+91 9558243706</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" data-testid="icon-email" />
                <span className="text-accent-foreground/80" data-testid="text-email">mailbookingshooking@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-accent-foreground/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-accent-foreground/80 sm:flex-row">
          <p data-testid="text-copyright">&copy; 2025 Booking Shooking. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="/Privacy policy..pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-foreground" 
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a 
              href="/Terms and conditions .pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-foreground" 
              data-testid="link-terms"
            >
              Terms of Service
            </a>
            <a 
              href="/Cancellation and refund policy.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-foreground" 
              data-testid="link-cancellation"
            >
             Cancellation and refund policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
