import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I invite Yakuza to my server?",
    a: "Click the 'Add to Discord' button on our homepage or use the invite link. Make sure you have 'Manage Server' permissions on the server you want to add Yakuza to.",
  },
  {
    q: "Is there a support server?",
    a: "Yes! You can join our Discord support server at discord.gg/a9Kea3ymC7 where our team and community are ready to help you.",
  },
  {
    q: "Why are my slash commands not showing up?",
    a: "Make sure Yakuza has the 'applications.commands' scope. Try re-inviting the bot with the correct permissions. It may also take up to an hour for Discord to register new commands.",
  },
  {
    q: "Can I use Yakuza for free?",
    a: "Yes! Yakuza offers a comprehensive free tier with most features available. Premium features with additional perks are coming soon.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "Join our support server and use the appropriate channels to report bugs or suggest features. You can also contact fane_dev directly.",
  },
  {
    q: "Does Yakuza work with other bots?",
    a: "Absolutely! Yakuza is designed to work alongside other bots without conflicts. Each bot operates independently.",
  },
  {
    q: "How do I configure auto-moderation?",
    a: "Use the /automod commands or the dashboard to configure auto-moderation settings including word filters, spam detection, and link filtering.",
  },
  {
    q: "Is my data safe with Yakuza?",
    a: "Yes. We only store necessary data for bot functionality and never share your data with third parties. You can request data deletion at any time.",
  },
  {
    q: "What happens if Yakuza goes offline?",
    a: "Yakuza has 99.9% uptime. In rare cases of downtime, all settings and data are preserved and will resume automatically when the bot comes back online.",
  },
  {
    q: "How do I delete all my server's data?",
    a: "Use the /data delete command or contact our support team. All server data will be permanently removed within 24 hours.",
  },
  {
    q: "Can I self-host Yakuza?",
    a: "No, Yakuza is not available for self-hosting. This ensures consistent updates, security, and reliability for all users.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-noxx-red/30 bg-noxx-red/5 flex items-center justify-center"
          >
            <HelpCircle className="w-12 h-12 text-noxx-red" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4"
            style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-10">
            Find answers to common questions about Yakuza Bot
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <AccordionItem value={`faq-${i}`} className="glass-card border-border/30 px-6 rounded-xl">
                    <AccordionTrigger className="text-foreground hover:no-underline text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Still have questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card p-8 text-center mt-10"
            >
              <h2 className="text-xl font-bold text-foreground mb-2">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Join our support server and our team will be happy to help!
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://discord.gg/a9Kea3ymC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-noxx-red text-white font-semibold text-sm hover:bg-noxx-red/90 transition-colors"
                >
                  Get Support
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
