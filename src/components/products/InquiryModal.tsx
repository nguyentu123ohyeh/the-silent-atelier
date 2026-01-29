import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export const InquiryModal = ({
  isOpen,
  onClose,
  productName,
}: InquiryModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName
      ? `I am interested in inquiring about ${productName}. Please contact me to discuss measurements and customization options.`
      : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description:
        "Thank you for your interest. Karin Grosnick will contact you within 48 hours.",
    });
    onClose();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-background z-50 overflow-y-auto"
          >
            <div className="p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close inquiry form"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-12">
                <p className="text-caption text-muted-foreground mb-4">
                  Bespoke Inquiry
                </p>
                <h2 className="text-headline">
                  Request a Private Consultation
                </h2>
                {productName && (
                  <p className="mt-4 text-muted-foreground">
                    Regarding: <span className="text-foreground">{productName}</span>
                  </p>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-caption block mb-3"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-0 border-b border-border rounded-none px-0 py-3 focus:ring-0 focus-visible:ring-0 focus:border-foreground bg-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-caption block mb-3"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="border-0 border-b border-border rounded-none px-0 py-3 focus:ring-0 focus-visible:ring-0 focus:border-foreground bg-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-caption block mb-3"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-0 border-b border-border rounded-none px-0 py-3 focus:ring-0 focus-visible:ring-0 focus:border-foreground bg-transparent"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-caption block mb-3"
                    >
                      Your Inquiry
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="border-0 border-b border-border rounded-none px-0 py-3 focus:ring-0 focus-visible:ring-0 focus:border-foreground bg-transparent resize-none"
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                </div>

                <Button type="submit" className="btn-atelier-primary w-full">
                  Submit Inquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  By submitting this form, you agree to be contacted by Grosnick
                  Couture regarding your bespoke inquiry. We typically respond
                  within 48 hours.
                </p>
              </form>

              {/* Alternative Contact */}
              <div className="mt-16 pt-8 border-t border-border">
                <p className="text-caption text-muted-foreground mb-4">
                  Prefer to call?
                </p>
                <a
                  href="tel:+15042257457"
                  className="font-serif text-xl hover:text-sage transition-colors"
                >
                  +1 504 225 7457
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mon–Fri, 10am–6pm EST
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
