import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. We will respond within 48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-caption text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="text-display mb-8">Private Consultation</h1>
            <p className="text-xl font-light text-muted-foreground">
              Begin your bespoke journey with a conversation. We invite you to
              visit our Syracuse atelier or reach out to discuss your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-section bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-headline mb-8">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-caption block mb-3">
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
                    <label htmlFor="email" className="text-caption block mb-3">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="text-caption block mb-3">
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
                      htmlFor="subject"
                      className="text-caption block mb-3"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="border-0 border-b border-border rounded-none px-0 py-3 focus:ring-0 focus-visible:ring-0 focus:border-foreground bg-transparent"
                      placeholder="Bespoke inquiry, atelier visit, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-caption block mb-3">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="border-0 border-b border-border rounded-none px-0 py-3 focus:ring-0 focus-visible:ring-0 focus:border-foreground bg-transparent resize-none"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                <Button type="submit" className="btn-atelier-primary">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <div className="space-y-16">
                {/* Address */}
                <div>
                  <h3 className="text-caption text-muted-foreground mb-6">
                    The Atelier
                  </h3>
                  <address className="not-italic space-y-2">
                    <p className="font-serif text-2xl">Chestnut Street 118</p>
                    <p className="text-lg text-muted-foreground">
                      Syracuse, New York 13212
                    </p>
                    <p className="text-lg text-muted-foreground">
                      United States
                    </p>
                  </address>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-caption text-muted-foreground mb-6">
                    Telephone
                  </h3>
                  <a
                    href="tel:+15042257457"
                    className="font-serif text-2xl hover:text-sage transition-colors"
                  >
                    +1 504 225 7457
                  </a>
                  <p className="text-muted-foreground mt-2">
                    Mon–Fri, 10am–6pm EST
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-caption text-muted-foreground mb-6">
                    Email
                  </h3>
                  <a
                    href="mailto:wlzdcskr15730@hotmail.com"
                    className="font-serif text-xl hover:text-sage transition-colors break-all"
                  >
                    wlzdcskr15730@hotmail.com
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-caption text-muted-foreground mb-6">
                    Atelier Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between max-w-xs">
                      <span>Monday – Friday</span>
                      <span>10:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Saturday</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-primary">
        <div className="aspect-[21/9] md:aspect-[21/6] relative">
          <div className="absolute inset-0 bg-charcoal/90 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-primary-foreground"
            >
              <p className="font-serif text-8xl md:text-9xl text-sage/20 mb-4">
                118
              </p>
              <p className="text-caption text-primary-foreground/60">
                Chestnut Street · Syracuse, NY 13212
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
