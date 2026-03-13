import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const partners = [
  {
    name: "Tennessee State Roleplay",
    desc: "An immersive and fun ERLC roleplay server",
    tags: ["Active", "Immersive", "Fun"],
    links: [{ label: "Website", url: "#" }],
  },
  {
    name: "Yakuza",
    desc: "Yakuza Bot - a multifunctional Discord bot with over 90 commands, systems and a cool dashboard",
    tags: ["Discord Bot", "Multifunctional", "Dashboard"],
    links: [{ label: "Website", url: "#" }, { label: "Dashboard", url: "#" }],
  },
  {
    name: "Omnix Bot",
    desc: "A powerful multipurpose Discord bot with advanced moderation, role systems, and automation tools.",
    tags: ["Discord Bot", "Moderation", "Utility"],
    links: [{ label: "Website", url: "#" }, { label: "Dashboard", url: "#" }],
  },
  {
    name: "Kasumei Tickets",
    desc: "A fast and reliable ticketing bot designed for support teams and organized community systems.",
    tags: ["Tickets", "Support", "Utility"],
    links: [{ label: "Website", url: "#" }, { label: "Dashboard", url: "#" }],
  },
];

const Partners = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center text-gradient-warm mb-4">
            Sponsors & Partners
          </h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            A proud showcase of the amazing bots and services that support and collaborate with our projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-noxx-yellow/10">
                    <Star className="w-5 h-5 text-noxx-yellow" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{partner.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{partner.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {partner.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-muted border border-border text-sm text-foreground hover:bg-muted/80 transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {partner.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-muted/50 text-xs text-muted-foreground border border-border/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">Supporting the community, one partnership at a time.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
