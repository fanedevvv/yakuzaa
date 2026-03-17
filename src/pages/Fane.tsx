import { motion } from "framer-motion";
import { Code, Bot, Clock, Sparkles, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Code, value: "50k+", label: "LINES OF CODE" },
  { icon: Bot, value: "2 major", label: "DISCORD BOTS" },
  { icon: Clock, value: "2+", label: "YEARS CODING" },
  { icon: Sparkles, value: "VS Code", label: "FAVORITE IDE" },
];

const timeline = [
  { year: "2024", title: "Advanced Full-Stack Training (Self-Directed)", tech: "Full-Stack Development", desc: "Deep dive into Next.js architecture, server-side components, and advanced authentication patterns. Started building complex web dashboards for bot projects." },
  { year: "2023", title: "Launched Major Discord Bot (Yakuza)", tech: "Discord.js & MongoDB", desc: "Scaled primary bot to serve multiple communities. Focused on performance optimization, robust command handling, and implementing advanced MongoDB schemas." },
  { year: "2022", title: "Frontend Foundation with React & Tailwind CSS", tech: "Frontend Development", desc: "Shifted focus to modern frontend development. Built several utility sites and this portfolio using React and Tailwind CSS." },
  { year: "2021", title: "First Code Experience (Python & Node.js)", tech: "Foundation", desc: "Initial introduction to programming through IT projects and hobby scripts." },
  { year: "2018", title: "First Discord Account", tech: "Starting", desc: "First contact with Discord, and haven't left it since." },
];

const skills = {
  "Frontend": ["React", "Next.js", "HTML/CSS/JS"],
  "Backend/Logic": ["Node.js", "Express.js", "Python", "Discord.js", "API Design"],
  "Databases": ["MongoDB", "SQLite", "Data Modeling"],
  "Tools/DevOps": ["Git/GitHub", "VS Code", "Docker", "Linux CLI", "CI/CD"],
};

const toolbox = [
  { cat: "Frameworks & Libraries", items: [
    { name: "React", level: "Intermediate", desc: "Primary frontend library, used in all web projects." },
    { name: "Node.js", level: "Advanced", desc: "Go-to environment for all backend and bot development." },
    { name: "Express.js", level: "Intermediate", desc: "Used for building RESTful APIs for web dashboards." },
    { name: "Tailwind CSS", level: "Intermediate", desc: "The only way to style. Fast, responsive, utility-first." },
  ]},
  { cat: "Data & Databases", items: [
    { name: "MongoDB", level: "Advanced", desc: "Primary NoSQL database for flexible schema in bot projects." },
    { name: "SQLite", level: "Intermediate", desc: "Used for lightweight, embedded databases in small projects." },
    { name: "PostgreSQL", level: "Learning", desc: "Exploring for more complex relational data structures." },
  ]},
  { cat: "Tools & Ecosystem", items: [
    { name: "VS Code", level: "Daily Driver", desc: "Preferred IDE for its extensions and integrated terminal." },
    { name: "Git/GitHub", level: "Confident", desc: "Essential for version control, collaboration, and deployment." },
    { name: "Linux CLI", level: "Intermediate", desc: "Used for server management, hosting, and script execution." },
    { name: "Docker", level: "Learning", desc: "Setting up containers for consistent development and deployment." },
  ]},
];

const projects = [
  { name: "Yakuza", desc: "A powerful, multi-purpose Discord bot focused on moderation, utility, and community-building.", tags: ["Node.js", "Discord.js", "MongoDB", "API Integration"], link: "https://discord.com/oauth2/authorize?client_id=1448429544112656588&permissions=8&integration_type=0&scope=bot+applications.commands" },
  { name: "Yakuza Dashboard", desc: "A modern web dashboard for managing Yakuza bot settings, commands, and server configurations.", tags: ["React", "Tailwind CSS", "Supabase", "TypeScript"], link: "https://dashboard.yakuza.my/" },
  { name: "Kaos Dev.", desc: "One of the best sources forum in the market.", tags: ["Community", "Sources", "#1"], link: "/kaos" },
];

const Fane = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-noxx-red/30 bg-noxx-red/5 text-sm text-noxx-red">
              <Sparkles className="w-4 h-4" /> Developer & Coding Enthusiast | Future Software Engineer
            </span>
          </motion.div>

          {/* Profile Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-28 h-28 rounded-full border-2 border-noxx-pink/50 overflow-hidden shadow-lg shadow-noxx-pink/20 shrink-0">
                <img
                  src="https://images-ext-1.discordapp.net/external/8MmXv3-D9mAyQkTiQvOZeip2RVv3rYVIwRPmMyXA3qE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1443369756462944330/a_cf2b646b85b3e6fc50a9713d98ced037.gif?width=275&height=275"
                  alt="FanE" className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-display font-bold text-foreground">FanE</h1>
                <p className="text-muted-foreground mb-4">Developer & Coding Enthusiast | Web Designer | Discord Bot Developer</p>
                <div className="flex gap-3">
                  <a href="https://discord.com/channels/@me/1443369756462944330" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-[hsl(235,86%,65%)]/20 border border-[hsl(235,86%,65%)]/30 text-sm text-[hsl(235,86%,65%)] font-medium hover:bg-[hsl(235,86%,65%)]/30 transition-colors">Discord</a>
                  <a href="https://www.instagram.com/_stefandrei_" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-noxx-pink/20 border border-noxx-pink/30 text-sm text-noxx-pink font-medium hover:bg-noxx-pink/30 transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <AnimatedSection>
            <h2 className="text-2xl font-display font-bold text-center text-foreground mb-6">My Coding Life at a Glance</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <div className="glass-card p-5 h-full">
                  <stat.icon className="w-5 h-5 text-noxx-red mb-2" />
                  <div className="text-xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* About */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2"><Sparkles className="w-5 h-5 text-noxx-red" /> A Little More About Me</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p>Hey there! I'm <strong className="text-foreground">FanE</strong>, a passionate developer with a love for <strong className="text-foreground">technology</strong> and <strong className="text-foreground">software development</strong>. My coding journey started a few years ago and I've been hooked ever since.</p>
              <p>The thrill of taking an idea and turning it into a functional piece of software is what drives me. I thrive in the Node.js ecosystem, especially with Discord.js, but I'm actively expanding my horizons into the full-stack world with React and aspiring to master Next.js.</p>
              <p>When I'm not coding, I'm usually gaming, listening music, or just chilling.</p>
              <p>I have a real life too. I'm a physiotherapist, working in hospital.</p>
            </div>
          </div>

          {/* Timeline */}
          <AnimatedSection>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">My Developer Journey</h2>
          </AnimatedSection>
          <div className="space-y-4 mb-12">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.08} direction="left">
                <div className="glass-card p-5 flex gap-4">
                  <div className="text-noxx-red font-display font-bold text-lg shrink-0 w-12">{item.year}</div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs text-noxx-red">{item.tech}</span>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Technical Skills Deep Dive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="glass-card p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1 rounded-full bg-noxx-red/10 border border-noxx-red/20 text-noxx-red">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Toolbox */}
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">The Developer Toolbox</h2>
          <div className="space-y-6 mb-12">
            {toolbox.map((section) => (
              <div key={section.cat}>
                <h3 className="font-display font-semibold text-foreground mb-3">{section.cat}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="glass-card p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-foreground text-sm">{item.name}</span>
                        <span className="text-xs text-noxx-red">{item.level}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Featured Projects & Stack</h2>
          <div className="space-y-4 mb-12">
            {projects.map((proj) => (
              <div key={proj.name} className="glass-card p-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{proj.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <a href={proj.link} target={proj.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-noxx-red hover:underline">View Project →</a>
              </div>
            ))}
          </div>

          {/* General Info */}
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">General Info</h2>
          <div className="glass-card p-6 mb-12">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: "Name", value: "FanE" },
                { label: "Role", value: "Developer / Creator" },
                { label: "Favorite Stack", value: "React • Node • Python" },
                { label: "Hobbies", value: "Gaming • Music • Design" },
                { label: "Status", value: "Available" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-muted-foreground">{item.label}</span>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Connect With Me</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://discord.com/channels/@me/1443369756462944330" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-[hsl(235,86%,65%)]/20 border border-[hsl(235,86%,65%)]/30 text-sm text-[hsl(235,86%,65%)] font-medium hover:bg-[hsl(235,86%,65%)]/30 transition-colors">Discord</a>
            <a href="https://www.instagram.com/_stefandrei_" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-noxx-pink/20 border border-noxx-pink/30 text-sm text-noxx-pink font-medium hover:bg-noxx-pink/30 transition-colors">Instagram</a>
            <a href="https://www.instagram.com/_stefandrei_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground font-medium hover:bg-muted/80 transition-colors"><Globe className="w-4 h-4" /> Website</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fane;
