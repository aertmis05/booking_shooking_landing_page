import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
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
            <h3 className="text-2xl font-bold" data-testid="text-footer-brand">Krishna Harsh Travels</h3>
            <p className="text-sm text-accent-foreground/80" data-testid="text-footer-tagline">
              Your trusted partner in creating extraordinary travel experiences around the world since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover-elevate flex h-10 w-10 items-center justify-center rounded-md border border-accent-border bg-accent-foreground/10"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover-elevate flex h-10 w-10 items-center justify-center rounded-md border border-accent-border bg-accent-foreground/10"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover-elevate flex h-10 w-10 items-center justify-center rounded-md border border-accent-border bg-accent-foreground/10"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
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
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" data-testid="icon-address" />
                <span className="text-accent-foreground/80" data-testid="text-address">
                  123 Travel Street, Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" data-testid="icon-phone" />
                <span className="text-accent-foreground/80" data-testid="text-phone">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" data-testid="icon-email" />
                <span className="text-accent-foreground/80" data-testid="text-email">hello@krishnaharshtravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-accent-foreground/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-accent-foreground/80 sm:flex-row">
          <p data-testid="text-copyright">&copy; 2025 Krishna Harsh Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-foreground" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-foreground" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent-foreground" data-testid="link-cookies">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
