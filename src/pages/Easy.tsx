import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Users,
  Percent,
  Award,
  Clock,
  MessageSquare,
  Gamepad2,
  Palette,
  Shield,
  Gift,
  Code,
} from "lucide-react";
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
  {
    icon: Users,
    title: "Active Community",
    desc: "Engage with friendly members, share stories, and join weekly events.",
  },
  {
    icon: Gift,
    title: "Exclusive Events",
    desc: "Participate in epic competitions, giveaways, and seasonal celebrations.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Creativity",
    desc: "Collaborate in games, showcase art, and express creativity in a supportive community.",
  },
  {
    icon: Shield,
    title: "Fair & Safe",
    desc: "A moderated environment ensuring a positive and respectful experience for all members.",
  },
  {
    icon: Code,
    title: "Support",
    desc: "We offer support for both bots, Yakuza and Roco, 24/7 support.",
  },
];

const testimonials = [
  { quote: "Yakuza is the best multipurpose Discord bot I ever seen", name: "quix" },
  { quote: "I added Yakuza and Roco on my Community and it's really helpful", name: "kedoo" },
  { quote: "Roco is a work of art, and Yakuza is a beast.", name: "antiexe" },
  {
    quote: "Kaos Dev. is really helpful with support and a good chat.",
    name: "kseny",
  },
];

const categories = [
  {
    title: "Yakuza",
    about: "Just another multifunctional bot.",
    link: "https://yakuza.my/",
    invite: "https://discord.com/oauth2/authorize?client_id=1448429544112656588&permissions=8&integration_type=0&scope=bot+applications.commands",
    avatar: "https://cdn.discordapp.com/avatars/1448429544112656588/88dc0b2a67b7e887842f1c23c0ffc897.png?size=128",
    banner: "https://cdn.discordapp.com/banners/1448429544112656588/117e83ea5e163b2a26b1539c6ed10de5.png?size=480",
    tags: ["automod", "fun", "moderation", "multipurpose", "music"],
  },
  {
    title: "Roco",
    about: "A music Discord bot.",
    link: "https://rocobot.xyz/",
    invite: "https://discord.com/oauth2/authorize?client_id=960624234688811188&permissions=8&integration_type=0&scope=bot+applications.commands",
    avatar: "https://cdn.discordapp.com/avatars/960624234688811188/6c297dc2ccd81cf05359b10d102855fe.png?size=128",
    banner: "https://cdn.discordapp.com/banners/960624234688811188/fc6eecd9c9ad4a8cd6e41d4b98b52242.png?size=480",
    tags: ["music", "soundcloud", "spotify", "superfast"],
  },
];

const Easy = () => {
  return (
    <Layout>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-8"
          >
            The home for <strong className="text-foreground">Yakuza & Roco bots</strong> .
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link
              to="/kaos/rules"
              className="px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
            >
              View Rules
            </Link>
            <a
              href="https://discord.gg/MR9PSKdJpT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-noxx-red text-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20 flex items-center gap-2"
            >
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
                Kaos Dev. is the <span className="text-noxx-red font-semibold">home for Yakuza & Roco bot</span>, here
                you have all the informations and support you need.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.15}>
            <p className="text-muted-foreground text-center">
              We unite two bots in one place, in <span className="text-noxx-red font-semibold">Kaos World</span>. Our
              world is for your, projected and designed for your needs. We unite Yakuza and Roco for the first time,
              both bots are made and hosted by us.
            </p>
          </AnimatedSection>
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
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">
            Voices from the Community
          </h2>
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
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-8">Explore Our Bots</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="glass-card-hover overflow-visible w-full md:w-80">
                {/* Banner */}
                <div className="relative h-28 rounded-t-lg overflow-hidden">
                  <img src={cat.banner} alt={`${cat.title} banner`} className="w-full h-full object-cover" />
                </div>
                {/* Avatar */}
                <div className="relative px-4">
                  <img
                    src={cat.avatar}
                    alt={`${cat.title} avatar`}
                    className="w-16 h-16 rounded-full border-4 border-background -mt-8 relative z-10"
                  />
                </div>
                {/* Content */}
                <div className="p-5 pt-2">
                  <h3 className="font-display font-semibold text-foreground text-lg mb-1">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cat.about}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={cat.invite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-lg bg-noxx-red text-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20"
                    >
                      Invite Bot
                    </a>
                    <a
                      href={cat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Forge Your Community!</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Make a great Community with this two bots, anything else is pointless.
          </p>
          <a
            href="https://discord.gg/MR9PSKdJpT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-noxx-red text-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20"
          >
            Join Kaos Dev. <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Easy;
