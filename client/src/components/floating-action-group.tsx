import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Instagram, X, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FloatingActionGroup() {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "919558243706";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in booking a trip with Booking Shooking.")}`;
    const callUrl = `tel:+${phoneNumber}`;
    const instagramUrl = "https://www.instagram.com/booking.shooking?igsh=MWZ1N3loa3ZtNGozZQ==";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col gap-3 mb-2">
                        {/* Call Button */}
                        <motion.a
                            href={callUrl}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-2"
                            title="Call Us"
                        >
                            <span className="bg-background text-foreground text-xs font-medium py-1 px-2 rounded-md shadow-md hidden sm:block">
                                Call Us
                            </span>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600">
                                <Phone className="h-6 w-6" />
                            </div>
                        </motion.a>

                        {/* Instagram Button */}
                        <motion.a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ delay: 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-2"
                            title="Instagram"
                        >
                            <span className="bg-background text-foreground text-xs font-medium py-1 px-2 rounded-md shadow-md hidden sm:block">
                                Follow us
                            </span>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg">
                                <Instagram className="h-6 w-6" />
                            </div>
                        </motion.a>

                        {/* WhatsApp Button */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ delay: 0 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-2"
                            title="WhatsApp"
                        >
                            <span className="bg-background text-foreground text-xs font-medium py-1 px-2 rounded-md shadow-md hidden sm:block">
                                Chat on WhatsApp
                            </span>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600">
                                <MessageCircle className="h-6 w-6" />
                            </div>
                        </motion.a>
                    </div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors ${isOpen ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare className="h-6 w-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
