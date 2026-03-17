import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Percent, Award, Clock, MessageSquare, Gamepad2, Palette, Shield, Gift, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const metrics = [
  { value: "4000+", label: "Total Members" },
  { value: "98%", label: "Retention Rate" },
  { value: "4", label: "Years of Experience" },
  { value: "24/7", label: "Support" },
];

const offers = [
  { icon: Users, title: "Active Community", desc: "Engage with friendly members, share stories, and join weekly events." },
  { icon: Gift, title: "Exclusive Events", desc: "Participate in epic competitions, giveaways, and seasonal celebrations." },
  { icon: Gamepad2, title: "Gaming & Creativity", desc: "Collaborate in games, showcase art, and express creativity in a supportive community." },
  { icon: Shield, title: "Fair & Safe", desc: "A moderated environment ensuring a positive and respectful experience for all members." },
  { icon: Code, title: "Custom Resources", desc: "Unique resources for your wildest projects. You can access all with only an account. You don't need to pay anything." },
];

const testimonials = [
  { quote: "The best forum for resource ever. I build my FiveM and Minecraft servers with this forum!", name: "quix" },
  { quote: "Joined last week and already have a Minecraft server in construction. It's wild!", name: "kedoo" },
  { quote: "I will be forever grateful. This is where I learned to create servers..", name: "antiexe" },
  { quote: "Easy-Code provides a fantastic platform for showing off my builds and art. Highly recommend to any developer.", name: "kseny" },
];

const categories = [
  { title: "Game Dev", desc: "SA:MP, FiveM, RedM, Rage:MP, MTA:SA, CS2, Rust, Metin2 and Minecraft.", link: "https://easy-code.ro/" },
  { title: "Web Dev", desc: "Invision Community, Xenforo, WordPress and others.", link: "https://easy-code.ro/" },
  { title: "Leaks", desc: "Cracking, Source Codes, Tools, Python, NodeJS and others.", link: "https://easy-code.ro/" },
];

const maintenanceSchedule = [
  { title: "Christmas Holiday Break", period: "Dec 24th - Jan 1st", desc: "Annual holiday for staff to rest and recharge." },
  { title: "Easter Event Lock", period: "Varies (Friday - Monday)", desc: "Short staff holiday closure and event setup for the Easter weekend." },
  { title: "Halloween Holiday Break", period: "October 31st (Day Lock)", desc: "Server lock for the day to give staff a break on trick or treating etc." },
];

const Easy = () => {
  return (
    <Layout>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, hsl(0 80% 50%), hsl(280 70% 55%), hsl(200 80% 55%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kaos Dev.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground mb-8">
            A <strong className="text-foreground">thriving resources forum</strong> for all your wildest dreams.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-3">
            <Link to="/kaos/rules" className="px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
              View Rules
            </Link>
            <a href="https://easy-code.ro/discord" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-noxx-red text-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20 flex items-center gap-2">
              Join Discord Now! <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-2">
              About <span className="text-noxx-red">Kaos Dev.</span>
            </h2>
            <div className="w-16 h-1 bg-noxx-red mx-auto rounded mb-8" />
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.1}>
            <div className="glass-card p-6 mb-6">
              <p className="text-muted-foreground">
                Easy-Code is a thriving <span className="text-noxx-red font-semibold">resources forum</span> of developers, gamers and passionates. We have all kind of resources, leaks and fun stuff.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <p className="text-muted-foreground text-center">
              We unite people across the digital landscape, sharing epic moments, make new <span className="text-noxx-red font-semibold">dreams</span> and fostering a friendly and welcoming environment for all skill levels. Join Easy-Code to access quality resources in game dev, web dev, scripting, design and more. Connect with other creators and level up your project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-2">Server Lock & Maintenance Schedule</h2>
          <div className="w-16 h-1 bg-noxx-red mx-auto rounded mb-6" />
          <p className="text-center text-muted-foreground mb-8">
            Easy-Code occasionally implements planned server locks for staff breaks, holidays (Easter, Christmas), or major technical maintenance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {maintenanceSchedule.map((item) => (
              <div key={item.title} className="glass-card p-5 text-center">
                <h3 className="font-display font-semibold text-noxx-red mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">Lock Period: {item.period}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground italic">Always Check: Specific dates for seasonal locks are announced in the #announcements channel on Discord.</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">What We Offer</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="glass-card-hover p-5 h-full">
                  <item.icon className="w-6 h-6 text-noxx-red mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">Community Metrics</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.08}>
                <div className="glass-card p-5 text-center h-full">
                  <div className="text-2xl font-display font-bold text-noxx-red mb-1">{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">Voices from the Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-5">
                <p className="text-sm text-muted-foreground italic mb-3">"{t.quote}"</p>
                <p className="text-sm text-foreground font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">Explore Our Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.title} className="glass-card-hover p-5">
                <h3 className="font-display font-semibold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
                <a href={cat.link} target="_blank" rel="noopener noreferrer" className="text-sm text-noxx-red hover:underline">View Channel →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Forge Your Code!</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Don't just observe the adventure, live it. Become a part of the Easy-Code community today and dive into the grand, collaborative experience!</p>
          <a href="https://easy-code.ro/discord" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-noxx-red text-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20">
            Join Easy-Code <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Easy;
