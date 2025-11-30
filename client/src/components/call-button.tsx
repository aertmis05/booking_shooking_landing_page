import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CallButton() {
  const phoneNumber = "+919558243706"; // Replace with your phone number
  const telUrl = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={telUrl}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.3 }}
      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-[168px] right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/50"
      data-testid="button-call"
      aria-label="Call us"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute h-14 w-14 rounded-full border-2 border-blue-500 opacity-0"
      />
      <Phone className="h-7 w-7 transition-transform duration-300" />
    </motion.a>
  );
}
