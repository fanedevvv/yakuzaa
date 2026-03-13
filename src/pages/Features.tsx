import { motion } from "framer-motion";
import { Shield, Settings, Music, Coins, Wrench, Gift, MessageSquare, Activity, Lightbulb, Gamepad2, Image, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Shield, title: "Moderation", desc: "Powerful moderation tools with auto-mod capabilities",
    longDesc: "Keep your server safe with comprehensive moderation tools. Ban, kick, mute, and warn users with detailed logging. Our auto-moderation system catches spam, raids, and inappropriate content before it becomes a problem.",
    keyFeatures: ["Ban, kick, mute, and timeout commands", "Warning system with automatic punishments", "Detailed moderation logs", "Role hierarchy enforcement", "Bulk message deletion", "Slowmode management"],
  },
  {
    icon: Settings, title: "Admin Tools", desc: "Fully customizable admin settings and configurations",
    longDesc: "Take full control of your server with advanced administrative tools. Configure every aspect of Yakuza to fit your community's needs with an intuitive dashboard and powerful commands.",
    keyFeatures: ["Web dashboard for easy management", "Role and permission management", "Custom command prefixes", "Channel-specific settings", "Backup and restore configurations", "Audit log integration"],
  },
  {
    icon: Music, title: "Music", desc: "High-quality audio playback for your server",
    longDesc: "Bring life to your voice channels with crystal-clear music playback. Support for YouTube, Spotify, SoundCloud, and more. Create playlists, manage queues, and enjoy music together.",
    keyFeatures: ["Multi-platform support (YouTube, Spotify, SoundCloud)", "Queue management with shuffle and loop", "Volume control and equalizer", "Playlist saving and loading", "Lyrics display", "24/7 playback mode"],
  },
  {
    icon: Coins, title: "Economy", desc: "Advanced economy system with ranking features",
    longDesc: "Engage your community with a full-featured economy system. Members can earn, spend, and compete on leaderboards. Set up shops, trading, and gambling games to keep things interesting.",
    keyFeatures: ["Daily rewards and streaks", "Custom currency name and symbol", "Server shop with custom items", "Trading between members", "Gambling mini-games", "Leaderboards and rankings"],
  },
  {
    icon: Wrench, title: "Utilities", desc: "Comprehensive toolkit for server management",
    longDesc: "A Swiss Army knife of useful commands for everyday server management. From user lookups to server statistics, reminders to polls - we've got you covered.",
    keyFeatures: ["User and server information", "Avatar and banner display", "Reminder system", "Poll creation", "Role info and member lists", "Server analytics"],
  },
  {
    icon: Gift, title: "Giveaways", desc: "Run engaging giveaways for your community",
    longDesc: "Boost engagement with easy-to-manage giveaways. Set requirements, duration, and number of winners. Reroll if needed and keep your community excited with frequent events.",
    keyFeatures: ["Customizable duration and winners", "Role requirements for entry", "Automatic winner selection", "Reroll functionality", "Multiple giveaways at once", "Giveaway history tracking"],
  },
  {
    icon: MessageSquare, title: "Tickets", desc: "Efficient support ticket system",
    longDesc: "Provide professional support to your members with a complete ticketing system. Custom categories, staff assignment, transcripts, and more to keep your support organized.",
    keyFeatures: ["Multiple ticket categories", "Custom ticket panels", "Staff role assignment", "Ticket transcripts (HTML & text)", "Auto-close inactive tickets", "Ticket claiming system"],
  },
  {
    icon: Activity, title: "Statistics", desc: "Track and display detailed server stats",
    longDesc: "Understand your community with detailed analytics. Track member activity, message counts, voice time, and more. Display live stats in voice channels or dedicated stat embeds.",
    keyFeatures: ["Member join/leave tracking", "Message and voice activity stats", "Channel activity heatmaps", "Voice channel stat counters", "Growth trends and graphs", "Export data to CSV"],
  },
  {
    icon: Lightbulb, title: "Suggestions", desc: "Member feedback and suggestion system",
    longDesc: "Give your community a voice with a structured suggestion system. Members can submit ideas, vote on them, and staff can approve, deny, or mark suggestions as implemented.",
    keyFeatures: ["Dedicated suggestion channel", "Upvote/downvote system", "Staff review workflow", "Status updates (pending, approved, denied)", "Suggestion search", "Anonymous suggestions option"],
  },
  {
    icon: Gamepad2, title: "Fun", desc: "Entertaining commands and mini-games",
    longDesc: "Keep your server lively with entertaining commands. From classic games to memes, trivia to random generators - there's always something fun to do.",
    keyFeatures: ["Trivia and quiz games", "8ball and fortune telling", "Meme generators", "Random facts and jokes", "Rock-paper-scissors", "Connect 4 and Tic-tac-toe"],
  },
  {
    icon: Image, title: "Image Tools", desc: "Creative image manipulation tools",
    longDesc: "Transform images with powerful manipulation tools. Apply filters, create memes, generate custom graphics, and more - all through simple commands.",
    keyFeatures: ["Image filters and effects", "Meme template generation", "Avatar manipulation", "Text overlay on images", "Image resize and crop", "GIF creation"],
  },
  {
    icon: Settings, title: "Auto Setup", desc: "Easy server setup and configuration",
    longDesc: "Get started in minutes with our intelligent auto-setup system. Yakuza will analyze your server and suggest optimal configurations, creating channels, roles, and settings automatically.",
    keyFeatures: ["One-command server setup", "Template-based configurations", "Automatic channel and role creation", "Moderation setup wizard", "Welcome system configuration", "Backup and restore setups"],
  },
];

const Features = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-noxx-red/30 bg-noxx-red/5 text-sm text-noxx-red">
              <Sparkles className="w-4 h-4" /> Everything You Need
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4" style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}>
            All Features
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Discover every feature Yakuza has to offer. From powerful moderation to engaging entertainment, we've built everything you need to create the perfect Discord community.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-noxx-red/20 flex items-center justify-center">
                        <feat.icon className="w-6 h-6 text-noxx-red" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-foreground text-xl">{feat.title}</h2>
                        <p className="text-sm text-muted-foreground">{feat.desc}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{feat.longDesc}</p>
                    <Link to="/commands" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-noxx-red/10 border border-noxx-red/30 text-sm text-noxx-red font-medium hover:bg-noxx-red/20 transition-colors">
                      View Commands <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Key Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {feat.keyFeatures.map((kf) => (
                        <div key={kf} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-noxx-red shrink-0 mt-0.5" />
                          {kf}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">Add Yakuza to your server today and unlock all these features for free.</p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1448429544112656588&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-noxx-red text-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-noxx-red/20"
            >
              Add to Discord <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
