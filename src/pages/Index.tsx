import { motion } from "framer-motion";
import { Bot, ArrowRight, Sparkles, Shield, Zap, Code, MessageSquare, Users, Server, Clock, Activity, ChevronRight, Star, Music, Gift, Wrench, BarChart3, Lightbulb, Image, Settings, Gamepad2 } from "lucide-react";
import Layout from "@/components/Layout";
import YakuzaLogo from "@/assets/yakuza-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stats = [
  { value: "20ms", label: "Low Latency" },
  { value: "120+", label: "Customizable Bots" },
  { value: "99%", label: "Cloud Backups" },
  { value: "350+", label: "Total Commands" },
];

const liveStats = [
  { value: "2,000+", label: "Active Users" },
  { value: "52+", label: "Servers" },
  { value: "99.9%", label: "Uptime" },
  { value: "v2.0.5", label: "Version" },
];

const features = [
  { icon: Shield, title: "Advanced Moderation", desc: "Automated filtering, anti-spam, and customizable punishment actions to keep your community safe 24/7." },
  { icon: Zap, title: "Seamless Integrations", desc: "Connect with GitHub, YouTube, Twitch, and more for automated server announcements and engagement." },
  { icon: Code, title: "Developer API", desc: "Use our powerful, well-documented API to build your own custom extensions and server utilities." },
  { icon: MessageSquare, title: "Slash Command Ready", desc: "Full support for Discord's modern Slash Commands, offering a cleaner, more intuitive user experience.", comingSoon: true },
];

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
  { num: "1", title: "Invite the Bot", desc: "Click \"Add to Discord\" and select the server you want to add the bot to. Grant the required permissions." },
  { num: "2", title: "Configure Your Settings", desc: "Use the simple web dashboard or chat commands to set up moderation, welcome messages, and custom features." },
  { num: "3", title: "Enjoy Your Server", desc: "Sit back and let the bot handle the hard work, from moderation to entertainment." },
];

const testimonials = [
  { quote: "This bot single-handedly replaced three other bots we were using. The dashboard is intuitive and the moderation is top-notch.", name: "Eris", role: "Admin @ The Gamer's Lounge" },
  { quote: "The integration features are a game-changer. Our GitHub and Twitch alerts are now seamless. Highly recommend!", name: "Cmdr. Jaxon", role: "Owner @ Sci-Fi Nexus" },
  { quote: "Our community loves the fun commands, and as a mod, I love the anti-spam features. It's the perfect balance.", name: "Luna", role: "Moderator @ Art & Chill" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 text-noxx-yellow" />
            Next-Generation Discord Bot
            <Sparkles className="w-4 h-4 text-noxx-yellow" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold text-gradient mb-6"
          >
            Yakuza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            A powerful Discord bot that brings advanced features and seamless automation to your server.
          </motion.p>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="w-32 h-32 mx-auto rounded-full border-2 border-noxx-red/50 overflow-hidden shadow-lg shadow-noxx-red/20">
              <img
                src={YakuzaLogo}
                alt="Yakuza avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-muted/40 border border-border/50 mb-10"
          >
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-noxx-green animate-pulse" />
              <span className="text-sm text-muted-foreground">Online & Ready</span>
            </span>
            <span className="text-sm font-semibold text-noxx-purple">52+ Servers</span>
          </motion.div>

          {/* CTA Buttons - Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-3"
          >
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-btn-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <Bot className="w-4 h-4" />
              Add to Discord
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/commands" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
              <Sparkles className="w-4 h-4" />
              View Commands
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-btn-accent text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <Sparkles className="w-4 h-4" />
              Visit F34R.mp4!
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* CTA Buttons - Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="/partners" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-btn-secondary text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <Star className="w-4 h-4" />
              Our Partners
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/news" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-btn-accent text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <MessageSquare className="w-4 h-4" />
              Latest News
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/devs" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-btn-secondary text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              <Users className="w-4 h-4" />
              Meet the Devs
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Engineered for Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl font-display font-bold text-noxx-green glow-text-green mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {liveStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 text-center"
              >
                <div className="text-2xl font-display font-bold text-noxx-purple glow-text-purple mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Power Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-3">POWER FEATURES</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Everything Your Server Needs</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            From security to fun, our comprehensive feature set ensures your community thrives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-noxx-purple/10">
                    <feat.icon className="w-5 h-5 text-noxx-purple" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-foreground">{feat.title}</h3>
                      {feat.comingSoon && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-noxx-yellow/10 text-noxx-yellow font-semibold">COMING SOON</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{feat.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">Ready to elevate your server?</h2>
            <p className="text-muted-foreground mb-6">Join thousands of happy communities today and see the difference.</p>
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-btn-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Invite Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-3">GET STARTED</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Up & Running in 3 Easy Steps</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            Our intuitive setup process means you can enhance your server in minutes, not hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-btn-secondary flex items-center justify-center text-sm font-bold text-foreground">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-3">COMMUNITY VOICE</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Trusted by Amazing Communities</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            See what server owners and moderators are saying about Yakuza.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6"
              >
                <p className="text-sm text-muted-foreground italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-noxx-purple/20 flex items-center justify-center text-noxx-purple font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-3">Comprehensive Feature Set</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-4">Powerful Features</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
            Everything you need to create an engaging Discord community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {featureGrid.map((feat, i) => (
              <motion.div
                key={feat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card-hover p-5 text-center"
              >
                <feat.icon className="w-6 h-6 text-noxx-purple mx-auto mb-3" />
                <h3 className="font-display font-semibold text-sm text-foreground mb-1">{feat.title}</h3>
                <p className="text-xs text-muted-foreground">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
