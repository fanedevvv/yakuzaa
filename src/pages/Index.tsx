import { motion } from "framer-motion";
import { Bot, ArrowRight, Sparkles, Shield, Settings, Music, BarChart3, Wrench, Gift, MessageSquare, Activity, Lightbulb, Gamepad2, Image, Users, Server, Command } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import YakuzaLogo from "@/assets/yakuza-logo.png";
import { useDiscordBotStats } from "@/hooks/useDiscordBotStats";
import { useDiscordBotCommands } from "@/hooks/useDiscordBotCommands";

const featureGrid = [
  { icon: Shield, title: "Moderation", desc: "Powerful moderation tools with auto-mod capabilities" },
  { icon: Settings, title: "Admin Tools", desc: "Fully customizable admin settings and configurations" },
  { icon: Music, title: "Music", desc: "High-quality audio playback for your server" },
  { icon: BarChart3, title: "Economy", desc: "Advanced economy system with ranking features" },
  { icon: Wrench, title: "Utilities", desc: "Comprehensive toolkit for server management" },
  { icon: Gift, title: "Giveaways", desc: "Run engaging giveaways for your community" },
  { icon: MessageSquare, title: "Tickets", desc: "Efficient support ticket system" },
  { icon: Activity, title: "Statistics", desc: "Track and display detailed server stats" },
  { icon: Lightbulb, title: "Suggestions", desc: "Member feedback and suggestion system" },
  { icon: Gamepad2, title: "Fun", desc: "Entertaining commands and mini-games" },
  { icon: Image, title: "Image Tools", desc: "Creative image manipulation tools" },
  { icon: Settings, title: "Auto Setup", desc: "Easy server setup and configuration" },
];

const steps = [
  { num: "1", title: "Invite the Bot", desc: "Click the \"Add to Discord\" button and select the server you want to add the bot to." },
  { num: "2", title: "Configure Your Settings", desc: "Use the simple web dashboard or chat commands to set up features." },
  { num: "3", title: "Enjoy Your Server", desc: "Sit back and let the bot handle the hard work." },
];

const testimonials = [
  { quote: "This bot single-handedly replaced three other bots we were using.", name: "Alex", role: "Admin @ Gaming Community" },
  { quote: "The integration features are a game-changer.", name: "Jordan", role: "Owner @ Tech Hub" },
  { quote: "Our community loves the fun commands.", name: "Luna", role: "Moderator @ Art & Chill" },
];

const Index = () => {
  const { data: botStats } = useDiscordBotStats();
  const { data: botCommands } = useDiscordBotCommands();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-40 text-center overflow-hidden">
        {/* Ambient glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-noxx-red/5 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-noxx-red/30 bg-noxx-red/5 text-sm text-noxx-red mb-8 shimmer"
          >
            <Sparkles className="w-4 h-4" />
            Next-Generation Discord Bot
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-7xl md:text-9xl font-display font-bold text-noxx-red mb-6"
            style={{ textShadow: "0 0 60px hsl(0 80% 45% / 0.4)" }}
          >
            Yakuza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A powerful Discord bot that brings advanced features and seamless automation to your server.
          </motion.p>

          {/* Avatar with glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-3 relative inline-block"
          >
            <div className="absolute inset-0 rounded-full bg-noxx-red/20 blur-xl animate-pulse-glow" />
            <div className="w-36 h-36 mx-auto relative">
              <img src={YakuzaLogo} alt="Yakuza Bot" className="w-full h-full object-contain relative z-10" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm z-20">
              <span className="w-2 h-2 rounded-full bg-noxx-green animate-pulse" />
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </motion.div>

          {/* Status badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-10 mt-6 flex-wrap"
          >
            {[
              { icon: Server, label: `${botStats?.servers ?? "..."} Servers`, highlight: true },
              { icon: Users, label: `${botStats?.totalMembers ? botStats.totalMembers.toLocaleString() : "..."} Members` },
              { icon: Command, label: `${botCommands?.totalFlattened ? botCommands.totalFlattened.toLocaleString() : "..."} Commands` },
            ].map((badge, i) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40 border border-border/50 text-sm font-semibold ${badge.highlight ? "text-noxx-red" : "text-muted-foreground"}`}
              >
                <badge.icon className="w-3.5 h-3.5" />
                {badge.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://discord.com/oauth2/authorize?client_id=1448429544112656588&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-noxx-red text-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20 btn-glow"
            >
              <Bot className="w-4 h-4" />
              Add to Discord
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/commands"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
              >
                View Commands
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-center mb-3">Comprehensive Feature Set</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Powerful Features</h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-4">
              Everything you need to create an engaging Discord community
            </p>
            <div className="text-center mb-12">
              <Link to="/features" className="text-sm text-noxx-red hover:underline">View All Features →</Link>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {featureGrid.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={i * 0.06} className="h-full">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card-hover p-5 text-center h-full"
                >
                  <feat.icon className="w-6 h-6 text-noxx-red mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-sm text-foreground mb-1">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground">{feat.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-center mb-3">What's New</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Latest Updates</h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Stay up to date with the latest features and improvements
            </p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection direction="left">
              <motion.div whileHover={{ scale: 1.01 }} className="glass-card p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-foreground text-lg">Dashboard version 2.0.4 BETA</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-noxx-red/20 text-noxx-red font-semibold shimmer">v2.0.4</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">January 30, 2026</p>
                <p className="text-sm text-muted-foreground mb-4">
                  We fixed some more bugs on dashboard, including music system and anti-spam system.
                </p>
                <Link to="/news" className="inline-flex items-center gap-1 text-sm text-noxx-red hover:underline group">
                  View all updates <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-center mb-3">GET STARTED</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Up & Running in 3 Easy Steps</h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              Our intuitive setup process means you can enhance your server in minutes, not hours.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card p-6 text-center relative h-full"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-noxx-red flex items-center justify-center text-sm font-bold text-foreground shadow-lg shadow-noxx-red/30">
                    {step.num}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="section-label text-center mb-3">COMMUNITY VOICE</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Trusted by Amazing Communities</h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              See what server owners and moderators are saying about Yakuza.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card-hover p-6 h-full"
                >
                  <p className="text-sm text-muted-foreground italic mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-noxx-red/20 flex items-center justify-center text-noxx-red font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="glass-card p-10 text-center max-w-3xl mx-auto relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-noxx-red/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-noxx-red/5 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-muted-foreground text-sm mb-2">Ready to elevate your server?</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">Join Thousands of Happy Communities Today</h2>
                <p className="text-muted-foreground mb-6">Start using Yakuza now and see the difference.</p>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://discord.com/oauth2/authorize?client_id=1448429544112656588&permissions=8&integration_type=0&scope=bot+applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-noxx-red text-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20 btn-glow"
                >
                  Add to Discord
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
