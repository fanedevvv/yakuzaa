import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const rules = [
  { title: "Respect Everyone", desc: "Treat all members with respect and kindness. Harassment, bullying, or discrimination of any kind will not be tolerated." },
  { title: "No Spam or Self-Promotion", desc: "Do not spam messages, links, or self-promote without permission. This includes unsolicited DMs to members." },
  { title: "Keep Channels On-Topic", desc: "Use channels for their intended purpose. Check the channel description before posting." },
  { title: "No NSFW Content", desc: "Explicit, adult, or NSFW content is strictly prohibited in all channels and DMs." },
  { title: "No Impersonation", desc: "Do not impersonate staff members, other users, or public figures. Be yourself!" },
  { title: "Follow Discord ToS", desc: "All members must follow Discord's Terms of Service and Community Guidelines at all times." },
];

const dos = [
  "Be helpful and welcoming to new members",
  "Report rule violations to moderators",
  "Use appropriate channels for your content",
  "Keep discussions civil and constructive",
  "Have fun and enjoy the community!",
];

const donts = [
  "Share personal information publicly",
  "Engage in drama or toxic behavior",
  "Advertise without permission",
  "Use excessive caps or emojis",
  "Mini-mod (let staff handle issues)",
];

const EasyRules = () => {
  return (
    <Layout>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Link to="/easy" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Easy-Code
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-noxx-red/30 bg-noxx-red/5 text-sm text-noxx-red">
              <BookOpen className="w-4 h-4" /> Community Guidelines
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4"
            style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}
          >
            Community Rules
          </motion.h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            Please read and follow these rules to ensure a positive experience for everyone in the Easy-Code community.
          </p>

          {/* Rules */}
          <div className="space-y-4 mb-12">
            {rules.map((rule, i) => (
              <AnimatedSection key={rule.title} delay={i * 0.05}>
                <div className="glass-card p-6">
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{rule.title}</h3>
                  <p className="text-sm text-muted-foreground">{rule.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quick Reference */}
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-noxx-green text-lg mb-4">Do's</h3>
              <div className="space-y-2">
                {dos.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-noxx-green shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display font-bold text-noxx-red text-lg mb-4">Don'ts</h3>
              <div className="space-y-2">
                {donts.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-noxx-red shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rule Enforcement */}
          <div className="glass-card p-6 mb-12">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <h2 className="text-lg font-display font-bold text-foreground">Rule Enforcement</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Violations may result in warnings, mutes, kicks, or permanent bans depending on severity. Staff decisions are final. If you believe a decision was unfair, you may appeal by contacting a senior moderator.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/easy" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
              ← Back to Easy-Code
            </Link>
            <a href="https://easy-code.ro/discord" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-noxx-red text-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20">
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EasyRules;
