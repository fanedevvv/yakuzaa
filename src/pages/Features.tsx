import { motion } from "framer-motion";
import { Shield, Settings, Music, BarChart3, Wrench, Gift, MessageSquare, Activity, Lightbulb, Gamepad2, Image } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const features = [
  { icon: Shield, title: "Moderation", desc: "Powerful moderation tools with auto-mod capabilities, anti-spam, and customizable punishment actions." },
  { icon: Settings, title: "Admin Tools", desc: "Fully customizable admin settings, role management, and server configurations." },
  { icon: Music, title: "Music", desc: "High-quality audio playback with queue management, playlists, and multiple source support." },
  { icon: BarChart3, title: "Economy", desc: "Advanced economy system with currency, shops, gambling, and ranking features." },
  { icon: Wrench, title: "Utilities", desc: "Comprehensive toolkit for server management including reminders, polls, and embeds." },
  { icon: Gift, title: "Giveaways", desc: "Run engaging giveaways with customizable duration, winners, and requirements." },
  { icon: MessageSquare, title: "Tickets", desc: "Efficient support ticket system with categories, logs, and staff management." },
  { icon: Activity, title: "Statistics", desc: "Track and display detailed server stats, member activity, and growth metrics." },
  { icon: Lightbulb, title: "Suggestions", desc: "Member feedback and suggestion system with voting and status tracking." },
  { icon: Gamepad2, title: "Fun", desc: "Entertaining commands and mini-games to keep your community engaged." },
  { icon: Image, title: "Image Tools", desc: "Creative image manipulation tools with filters, overlays, and generation." },
  { icon: Settings, title: "Auto Setup", desc: "Easy server setup and configuration with guided wizards and templates." },
];

const Features = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-4">All Features</h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            Explore everything Yakuza has to offer for your Discord community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card-hover p-6"
              >
                <feat.icon className="w-8 h-8 text-noxx-red mb-4" />
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
