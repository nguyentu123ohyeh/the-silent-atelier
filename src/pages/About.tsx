import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import atelierTools from "@/assets/atelier-tools.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-caption text-muted-foreground mb-4">
              The Atelier
            </p>
            <h1 className="text-display mb-8">Our Craft</h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed">
              Since establishing our Syracuse atelier, Grosnick Couture has
              remained committed to one principle: clothing should outlast
              trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[21/9] overflow-hidden"
          >
            <img
              src={atelierTools}
              alt="Tailoring tools in the atelier"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* The Narrative */}
      <section className="py-section bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-caption text-muted-foreground mb-6">
                The Beginning
              </p>
              <h2 className="text-headline mb-8">
                A Return to Intention
              </h2>
              <div className="space-y-6 text-body-elegant text-muted-foreground">
                <p>
                  Grosnick Couture was born from a simple frustration: the
                  modern wardrobe has become disposable. Fast fashion promised
                  accessibility but delivered ephemerality. Karin Grosnick, after
                  years studying under master tailors in Milan and London, returned
                  to her hometown of Syracuse with a different vision.
                </p>
                <p>
                  The atelier on Chestnut Street operates on principles that
                  industry giants abandoned decades ago. Each garment begins with
                  a conversation. Measurements are taken by hand. Patterns are
                  drafted specifically for the client's body. And construction
                  happens slowly, deliberately, with an attention to detail that
                  cannot be rushed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-caption text-muted-foreground mb-6">
                The Philosophy
              </p>
              <h2 className="text-headline mb-8">
                Slow Fashion, Considered
              </h2>
              <div className="space-y-6 text-body-elegant text-muted-foreground">
                <p>
                  We source materials with the same care we apply to construction.
                  Our silk comes from mulberry farms in Como and Hangzhou. Our wool
                  from heritage mills in Yorkshire and Scotland. Our cashmere from
                  the high plateaus of Inner Mongolia, where the harshest winters
                  produce the finest fibers.
                </p>
                <p>
                  This is not mere sourcing—it is relationship. We visit our
                  suppliers. We understand their processes. We know that quality
                  fabric is the foundation upon which everything else depends.
                </p>
                <p>
                  The result is clothing that improves with age. Silk that softens.
                  Wool that shapes to your body. Cashmere that grows more
                  comfortable with each wear. This is the opposite of planned
                  obsolescence. This is clothing as investment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-section bg-primary text-primary-foreground">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-relaxed mb-8">
              "In an age of endless choice, the radical act is to choose less,
              but choose well. To invest in pieces that will outlive their
              maker."
            </blockquote>
            <p className="text-lg text-primary-foreground/70">
              — Karin Grosnick
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-section bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">
              The Process
            </p>
            <h2 className="text-headline">From Consultation to Creation</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Every commission begins with conversation. We discuss your vision, lifestyle, and the occasions this piece will serve. This is where clothing becomes personal.",
              },
              {
                step: "02",
                title: "Measurement",
                description:
                  "Forty-three measurements taken by hand. Not just size, but posture, movement, the way you carry yourself. The pattern is drafted specifically for you.",
              },
              {
                step: "03",
                title: "Creation",
                description:
                  "Construction begins. Hand-finished seams. Hand-picked stitches. Multiple fittings. The timeline depends on complexity—a shirt takes two weeks, a coat takes six.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="border-t border-border pt-8"
              >
                <span className="text-6xl font-serif text-sage/30 block mb-4">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-body-elegant text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-section bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-caption text-muted-foreground mb-4">
              Visit the Atelier
            </p>
            <h2 className="text-headline mb-8">Syracuse, New York</h2>
            <address className="not-italic text-body-elegant text-muted-foreground mb-8">
              <p>Chestnut Street 118</p>
              <p>Syracuse, New York 13212</p>
              <p className="mt-4">
                By appointment only
                <br />
                Mon–Fri, 10am–6pm EST
              </p>
            </address>
            <a
              href="/contact"
              className="btn-atelier-primary"
            >
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
