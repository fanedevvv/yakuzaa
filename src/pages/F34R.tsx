import { motion } from "framer-motion";
import { Sparkles, Code, Bot, Clock, Monitor, ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const stats = [
  { icon: Code, value: "10k+", label: "LINES OF CODE", desc: "Estimated total lines across all active, private, and open-source projects." },
  { icon: Bot, value: "3 Major", label: "DISCORD BOTS", desc: "Actively maintained and hosted bots serving various communities." },
  { icon: Clock, value: "1+", label: "YEARS CODING", desc: "Formal and hobby experience since diving deep into IT and development." },
  { icon: Monitor, value: "VS Code", label: "FAVORITE IDE", desc: "Visual Studio Code for its versatility, extensions, and integrated terminal." },
];

const timeline = [
  { year: "2024", title: "Advanced Full-Stack Training (Self-Directed)", tag: "Full-Stack Development", desc: "Deep dive into Next.js architecture, server-side components, and advanced authentication patterns (e.g., NextAuth.js). Started building complex web dashboards for bot projects." },
  { year: "2023", title: "Launched Major Discord Bot (Noxx)", tag: "Discord.js & MongoDB", desc: "Scaled the primary bot to serve multiple communities. Focused on performance optimization, robust command handling, and implementing advanced MongoDB schemas for data persistence." },
  { year: "2022", title: "Frontend Foundation with React & Tailwind CSS", tag: "Frontend Development", desc: "Shifted focus from pure back-end scripting to modern frontend development. Built several small utility sites and portfolio using React and the utility-first approach of Tailwind CSS." },
  { year: "2021", title: "First Code Experience (Python & Node.js)", tag: "Foundation", desc: "Initial introduction to programming through homeschooling IT projects and hobby scripts. This was the spark!" },
];

const skillCategories = [
  { title: "Frontend", skills: ["React", "Next.js (Learning)", "Tailwind CSS", "Vite", "HTML/CSS/JS"] },
  { title: "Backend/Logic", skills: ["Node.js", "Express.js", "Python (Scripting)", "Discord.js", "API Design"] },
  { title: "Databases", skills: ["MongoDB", "SQLite", "PostgreSQL (Basic)", "Data Modeling"] },
  { title: "Tools/DevOps", skills: ["Git/GitHub", "VS Code", "Docker (Basic)", "Linux CLI", "CI/CD (Planned)"] },
];

const certifications = [
  { title: "Advanced Backend Systems", desc: "Focusing on Redis caching and microservices architecture to scale Discord bot performance.", status: "In Progress", statusColor: "text-noxx-yellow" },
  { title: "Cybersecurity Fundamentals", desc: "Self-taught basics of web security, API protection, and secure data handling.", status: "Completed", statusColor: "text-noxx-green" },
  { title: "UI/UX Design Systems", desc: "Learning Figma to improve the visual design of web dashboards and React apps.", status: "Active", statusColor: "text-noxx-purple" },
];

const toolbox = [
  { category: "Frameworks & Libraries", items: [
    { name: "React", level: "Expert", desc: "Primary frontend library, used in all web projects." },
    { name: "Node.js", level: "Advanced", desc: "Go-to environment for all backend and bot development." },
    { name: "Express.js", level: "Intermediate", desc: "Used for building RESTful APIs for web dashboards." },
    { name: "Tailwind CSS", level: "Advanced", desc: "The only way to style. Fast, responsive, utility-first." },
  ]},
  { category: "Data & Databases", items: [
    { name: "MongoDB", level: "Advanced", desc: "Primary NoSQL database for flexible schema in bot projects." },
    { name: "SQLite", level: "Intermediate", desc: "Used for lightweight, embedded databases in small projects." },
    { name: "Redis (Basic)", level: "Learning", desc: "Exploring for caching and session management to boost performance." },
  ]},
  { category: "Tools & Ecosystem", items: [
    { name: "VS Code", level: "Daily Driver", desc: "Preferred IDE for its extensions and integrated terminal." },
    { name: "Git/GitHub", level: "Confident", desc: "Essential for version control, collaboration, and deployment." },
    { name: "Linux CLI", level: "Intermediate", desc: "Used for server management, hosting, and script execution." },
    { name: "Docker (Basic)", level: "Learning", desc: "Setting up containers for consistent development and deployment." },
  ]},
];

const projects = [
  { name: "Noxx", desc: "A powerful, multi-purpose Discord bot focused on moderation, utility, and community-building, featuring custom commands and database integration.", tags: ["Node.js", "Discord.js", "MongoDB", "API Integration"], url: "#" },
  { name: "Cattito", desc: "A silly cat bot where you collect cats.", tags: ["Python", "Discord.py", "SQLite", "API Integration"], url: "#" },
  { name: "Personal Portfolio v3", desc: "The very site you are viewing now! A modern, animated, and fully responsive showcase of skills in modern frontend development and design principles.", tags: ["React", "Tailwind CSS", "Vite", "Frontend"], url: "#" },
  { name: "Kasumei Tickets", desc: "A dedicated, lightweight Discord tickets bot solution with a custom web dashboard for configuration and management.", tags: ["Node.js", "EJS", "SQLite", "Web Panel"], url: "https://kasumei.com/" },
];

const statusKeys = [
  { color: "bg-noxx-green", label: "Online", desc: "Available for collaboration and communication. Ready to code!" },
  { color: "bg-noxx-yellow", label: "Idle", desc: "Temporarily AFK, probably fetching a coffee or in a quick break. I'll respond later!" },
  { color: "bg-noxx-red", label: "Do Not Disturb", desc: "Deep in code or focused on homeschooling tasks. Interruptions blocked unless urgent." },
  { color: "bg-muted-foreground", label: "Offline", desc: "Currently offline, sleeping, or completely unreachable via Discord. 😴" },
];

const generalInfo = [
  { label: "Name", value: "Tay Or F34R.mp4!" },
  { label: "Age", value: "18+" },
  { label: "Location", value: "UK 🇬🇧" },
  { label: "Role", value: "Homeschooled Student / Dev" },
  { label: "Favorite Stack", value: "React • Node • Python" },
  { label: "Hobbies", value: "Gaming • Music • Design" },
];

const socials = [
  { label: "TikTok", url: "https://www.tiktok.com/@f34rr_vr" },
  { label: "YouTube", url: "https://www.youtube.com/@Skyyyymusicc" },
  { label: "Discord", url: "https://discord.gg/a9Kea3ymC7" },
  { label: "Github", url: "https://github.com/f34r-vr" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const F34R = () => {
  return (
    <Layout>
      {/* Hero badge */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground mb-6"
          >
            <Sparkles className="w-4 h-4 text-noxx-yellow" />
            Homeschooled IT & Coding Enthusiast | Future Software Engineer
            <Sparkles className="w-4 h-4 text-noxx-yellow" />
          </motion.div>
        </div>
      </section>

      {/* Profile Card */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card overflow-hidden"
          >
            {/* Banner */}
            <div className="h-40 bg-gradient-to-r from-noxx-purple/30 via-noxx-pink/20 to-noxx-green/20 relative">
              <img
                src="https://cdn.discordapp.com/banners/1075077561454973020/4b17f08b5cd80da2519ec83fb4f109de.png?size=1024"
                alt="Profile Banner"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Avatar + Info */}
            <div className="px-6 pb-6 -mt-12 relative">
              <div className="w-24 h-24 rounded-full border-4 border-background overflow-hidden mb-4">
                <img
                  src="https://cdn.discordapp.com/avatars/1075077561454973020/0a2a725861ba7e6f1f041888ef183635.png?size=512"
                  alt="f34r_fn"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">f34r_fn</h2>
              <p className="text-muted-foreground text-sm mt-1">
                Homeschooled IT & Coding Enthusiast | Full-Stack Aspirant | Discord Bot Developer 🤖
              </p>
              <div className="mt-4 border-t border-border/50 pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">ABOUT ME</p>
                <a href="#bio" className="text-sm text-noxx-purple flex items-center gap-1 hover:underline">
                  View My Full Bio Section Below <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 mt-4 text-center text-sm text-muted-foreground space-y-1"
          >
            <p>Current Banner by <a href="https://www.fiverr.com/arlandwii" className="text-noxx-purple hover:underline">Arlan Dwi</a></p>
            <p>Previous Banner by <a href="https://www.fiverr.com/ok123we" className="text-noxx-purple hover:underline">Illustro Alfin</a></p>
            <p>Profile Picture by <a href="https://www.fiverr.com/yuki_ono" className="text-noxx-purple hover:underline">Yuma Yukino</a></p>
          </motion.div>
        </div>
      </section>

      {/* Coding Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">My Coding Life at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card p-5">
                <stat.icon className="w-5 h-5 text-noxx-green mb-3" />
                <div className="text-2xl font-display font-bold text-foreground mb-0.5">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section id="bio" className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-6">A Little More About Me</h2>
          <div className="glass-card p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>My name is Tay, but online I'm <strong className="text-foreground">F34R.mp4!</strong>. I'm a <strong className="text-foreground">homeschooled</strong> student in the UK with a massive passion for <strong className="text-foreground">Information Technology</strong> and <strong className="text-foreground">Software Development</strong>. Being homeschooled gives me the unique flexibility to dive deep into my coding projects while maintaining a focused academic schedule.</p>
            <p>The thrill of taking an idea and turning it into a functional piece of software is what drives me. I thrive in the <strong className="text-foreground">Node.js</strong> ecosystem, especially with <strong className="text-foreground">Discord.js</strong>, but I'm actively expanding my horizons into the full-stack world with <strong className="text-foreground">React</strong> and aspiring to master <strong className="text-foreground">Next.js</strong>.</p>
            <p>When I'm not coding, I'm usually <strong className="text-foreground">gaming</strong>, <strong className="text-foreground">producing music</strong> (hence the YouTube channel), or just chilling on Discord. My ultimate goal is to become a professional Software Engineer, leveraging my practical experience and formal education.</p>
          </div>
        </div>
      </section>

      {/* Developer Journey Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">My Developer Journey</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div key={item.year} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card p-6 relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-noxx-purple/10 text-noxx-purple text-xs font-semibold">{item.year}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <span className="text-xs text-noxx-green">{item.tag}</span>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">Technical Skills Deep Dive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div key={cat.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground border border-border/30">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">Learning & Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card p-5 flex justify-between items-start">
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </div>
                <span className={`text-xs font-semibold ${cert.statusColor} whitespace-nowrap ml-4`}>{cert.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Toolbox */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">The Developer Toolbox</h2>
          <div className="space-y-8">
            {toolbox.map((cat) => (
              <div key={cat.category}>
                <h3 className="font-display font-semibold text-foreground mb-4">{cat.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="glass-card p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-display font-semibold text-foreground text-sm">{item.name}</span>
                        <span className="text-xs text-noxx-purple">{item.level}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">Featured Projects & Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.url}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card-hover p-5 block"
              >
                <h3 className="font-display font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-muted/50 text-xs text-muted-foreground border border-border/30">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">Availability & Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Schedule */}
            <div className="glass-card p-5">
              <h3 className="font-display font-semibold text-foreground mb-3">Typical Availability</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Weekdays:</strong> 7:00 AM - 10:00 PM</li>
                <li><strong className="text-foreground">Weekends:</strong> 7:00 AM - 1:00 AM</li>
                <li className="text-xs italic mt-2">Note: During homeschooling hours, response times may vary slightly.</li>
              </ul>
            </div>

            {/* Discord Status */}
            <div className="glass-card p-5">
              <h3 className="font-display font-semibold text-foreground mb-3">Discord Status Key</h3>
              <div className="space-y-3">
                {statusKeys.map((s) => (
                  <div key={s.label} className="flex items-start gap-3">
                    <span className={`w-3 h-3 rounded-full ${s.color} mt-1 shrink-0`} />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{s.label}</span>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Info */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">General Info</h2>
          <div className="glass-card p-5">
            <div className="grid grid-cols-2 gap-4">
              {generalInfo.map((info) => (
                <div key={info.label}>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{info.label}</p>
                  <p className="text-sm font-semibold text-foreground">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-10">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card-hover text-sm font-medium text-foreground"
              >
                {s.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default F34R;
