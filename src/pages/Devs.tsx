import { motion } from "framer-motion";
import { Target, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  desc: string;
  focusArea: string;
  contribution: string;
  skills: string[];
  category: "Leadership" | "Development" | "Community";
}

const team: TeamMember[] = [
  {
    name: "f34r_fn",
    role: "Lead Architect & Founder",
    avatar: "https://cdn.discordapp.com/avatars/1075077561454973020/0a2a725861ba7e6f1f041888ef183635.png?size=128",
    desc: "The mastermind behind Yakuza Development. Leads the technical vision, designs complex systems, and sets the architectural standard for the entire team.",
    focusArea: "Backend Systems, Scaling & Core Architecture",
    contribution: "Yakuza Core API, Primary Bot Logic, Deployment Infrastructure",
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    category: "Leadership",
  },
  {
    name: "zhyperxdev",
    role: "Lead Developer",
    avatar: "https://cdn.discordapp.com/avatars/952009664600608808/3731e9415785c19a0b09e4412297661f.png?size=128",
    desc: "A master of JavaScript, bot creation, and web automation. Shapes Discord experiences with precision and creativity.",
    focusArea: "Bot Systems, Web Automation & API Design",
    contribution: "Website Management, Bot Development, Core Bot Creation",
    skills: ["JavaScript", "Python", "HTML", "Node.js", "CSS", "React", "Discord.js"],
    category: "Leadership",
  },
  {
    name: "trainerjeo",
    role: "Developer",
    avatar: "https://cdn.discordapp.com/avatars/579080596723335181/f5379a340f520511e77470787045dd11.png?size=128",
    desc: "Focused on building reliable bot systems and backend tooling. Keeps things running smoothly behind the scenes.",
    focusArea: "Bot Infrastructure & Backend Tooling",
    contribution: "Bot Development, Backend Systems, Bot Creation",
    skills: ["JavaScript", "Python", "HTML", "Node.js", "CSS", "React", "Discord.js"],
    category: "Development",
  },
  {
    name: "angel2524____",
    role: "Developer",
    avatar: "",
    desc: "Dedicated contributor to bot systems and backend functionality. Always finding ways to improve stability.",
    focusArea: "Bot Development, Backend Features & System Improvements",
    contribution: "Bot Development, Backend Features, System Improvements",
    skills: ["JavaScript", "Python", "Node.js", "Discord.js"],
    category: "Development",
  },
  {
    name: "st.ar.y",
    role: "Full-Stack Developer",
    avatar: "",
    desc: "Versatile full-stack contributor known for clean code and rapid problem-solving.",
    focusArea: "Frontend Development, API Integration & Automation",
    contribution: "Frontend Development, API Integration, Automation",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "CSS"],
    category: "Development",
  },
];

const categories = ["Leadership", "Development", "Community"] as const;

const Devs = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label text-center mb-3">YAKUZA DEVELOPMENT</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center text-foreground mb-4">
            The Team
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            {team.length} people building and maintaining the Yakuza ecosystem
          </p>

          {categories.map((cat) => {
            const members = team.filter((m) => m.category === cat);
            if (members.length === 0) return null;

            return (
              <div key={cat} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="section-label">{cat}</span>
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-sm text-muted-foreground">{members.length}</span>
                </div>

                <div className={`grid grid-cols-1 ${cat === "Leadership" ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6`}>
                  {members.map((member, i) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card-hover p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-noxx-purple/20 flex items-center justify-center">
                          {member.avatar ? (
                            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-noxx-purple font-bold">{member.name[0].toUpperCase()}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                          <p className="text-xs text-noxx-pink flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-noxx-pink" />
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-3 mb-4 border-l-2 border-noxx-purple/30">
                        <p className="text-sm text-muted-foreground italic">{member.desc}</p>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <Target className="w-4 h-4 text-noxx-green mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Focus Area</p>
                            <p className="text-xs text-foreground">{member.focusArea}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-noxx-yellow mt-0.5 shrink-0" />
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Contribution</p>
                            <p className="text-xs text-foreground">{member.contribution}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Skills</p>
                        <div className="flex flex-wrap gap-1.5">
                          {member.skills.slice(0, 4).map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded-full bg-muted/50 text-xs text-muted-foreground border border-border/30">
                              {skill}
                            </span>
                          ))}
                          {member.skills.length > 4 && (
                            <button
                              onClick={() => setExpanded(expanded === member.name ? null : member.name)}
                              className="px-2 py-0.5 rounded-full bg-muted/50 text-xs text-noxx-purple border border-noxx-purple/30 cursor-pointer"
                            >
                              +{member.skills.length - 4} more
                            </button>
                          )}
                        </div>
                        {expanded === member.name && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {member.skills.slice(4).map((skill) => (
                              <span key={skill} className="px-2 py-0.5 rounded-full bg-muted/50 text-xs text-muted-foreground border border-border/30">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Devs;
