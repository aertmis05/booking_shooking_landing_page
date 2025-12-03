import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function InstagramButton() {
  const instagramUrl = "https://www.instagram.com/booking.shooking?igsh=MWZ1N3loa3ZtNGozZQ=="; // Replace with your Instagram username

  return (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50"
      data-testid="button-instagram"
      aria-label="Follow on Instagram"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-purple-500 opacity-0"
      />
      <Instagram className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300" />
    </motion.a>
  );
}
