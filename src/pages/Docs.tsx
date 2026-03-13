import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Shield, Zap, Terminal, Music, Bot, TrendingUp, LayoutDashboard, Code, Settings, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";

const sidebarItems = [
  { icon: Bot, label: "Getting Started", id: "getting-started" },
  { icon: Terminal, label: "Commands", id: "commands" },
  { icon: Shield, label: "Moderation", id: "moderation" },
  { icon: Music, label: "Music System", id: "music" },
  { icon: Zap, label: "Auto-Moderation", id: "automod" },
  { icon: TrendingUp, label: "Leveling System", id: "leveling" },
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Code, label: "API Integration", id: "api" },
  { icon: Settings, label: "Customization", id: "customization" },
  { icon: HelpCircle, label: "FAQ", id: "faq" },
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 border-r border-border/50 sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto p-4">
          <div className="flex items-center gap-2 font-display font-bold text-lg text-noxx-red mb-4">
            <Bot className="w-5 h-5" /> Yakuza Docs
          </div>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-noxx-red/50"
            />
          </div>
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                  activeSection === item.id
                    ? "bg-noxx-red/10 text-noxx-red border border-noxx-red/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-display font-bold text-foreground mb-3">Welcome to Yakuza Documentation</h1>
          <p className="text-muted-foreground mb-8">Your comprehensive guide to using the Yakuza Discord bot. Navigate using the sidebar to explore features, commands, and more.</p>
          <hr className="border-border/50 mb-10" />

          {/* Getting Started */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-6">Yakuza is your all-in-one Discord bot designed to supercharge your server with powerful moderation, engaging fun commands, and essential utility features.</p>

            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-display font-semibold text-noxx-red mb-4">How to Invite Yakuza</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                <li>Click on the official invite link from our website or social media.</li>
                <li>Select the server you wish to add the bot to.</li>
                <li>Ensure you have the "Manage Server" permission.</li>
                <li>Authorize the bot's permissions. We recommend keeping defaults for full functionality.</li>
                <li>Once invited, type <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">/setup</code> to configure initial settings.</li>
              </ol>
            </div>

            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-display font-semibold text-noxx-red mb-4">Quick Setup Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li>Configure a mod log channel for tracking moderation actions</li>
                <li>Set up welcome messages to greet new members</li>
                <li>Enable auto-moderation features for enhanced security</li>
                <li>Customize the command prefix if using legacy commands</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-noxx-red" />
                  <h4 className="font-display font-semibold text-foreground">Security First</h4>
                </div>
                <p className="text-sm text-muted-foreground">Built-in protection against spam, raids, and malicious content to keep your community safe.</p>
              </div>
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-noxx-yellow" />
                  <h4 className="font-display font-semibold text-foreground">Lightning Fast</h4>
                </div>
                <p className="text-sm text-muted-foreground">Optimized performance ensures commands execute instantly, even during peak usage.</p>
              </div>
            </div>
          </section>

          {/* Commands */}
          <section id="commands" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Commands Overview</h2>
            <p className="text-muted-foreground mb-6">Yakuza uses slash commands for a seamless user experience.</p>

            {[
              { title: "Moderation", cmds: ["/ban - Ban a user", "/kick - Kick a user", "/mute - Mute a user temporarily", "/clear - Bulk delete messages", "/warn - Issue a warning", "/slowmode - Set channel slowmode"] },
              { title: "Fun & Entertainment", cmds: ["/play - Play music from URL or query", "/8ball - Ask the magic 8-ball", "/meme - Get a random meme", "/cat - Get a random cat picture", "/trivia - Start a trivia game", "/roll - Roll dice"] },
              { title: "Utility", cmds: ["/userinfo - View user details", "/serverinfo - Get server statistics", "/ping - Check bot latency", "/help - Display command list", "/avatar - Get user avatar", "/poll - Create a poll"] },
              { title: "Economy", cmds: ["/balance - Check your balance", "/daily - Claim daily rewards", "/shop - Browse the server shop", "/buy - Purchase items", "/inventory - View your items", "/trade - Trade with other users"] },
              { title: "Leveling", cmds: ["/rank - View your server rank", "/leaderboard - Top server members", "/levelroles - Configure level roles", "/resetlevels - Reset user levels"] },
              { title: "Configuration", cmds: ["/setup - Initial bot setup", "/prefix - Change command prefix", "/logs - Configure log channels", "/welcome - Set welcome messages", "/autorole - Auto-assign roles"] },
            ].map((cat) => (
              <div key={cat.title} className="mb-6">
                <h3 className="font-display font-semibold text-foreground text-lg mb-3">{cat.title}</h3>
                <div className="glass-card p-4">
                  <ul className="space-y-1.5">
                    {cat.cmds.map((cmd) => (
                      <li key={cmd} className="text-sm text-muted-foreground font-mono">• {cmd}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          {/* Moderation */}
          <section id="moderation" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Advanced Moderation</h2>
            <p className="text-muted-foreground mb-6">Yakuza provides a comprehensive moderation system. All actions are logged and reviewable through the dashboard.</p>

            {[
              { cmd: "/ban [user] [reason] [duration]", desc: "Permanently or temporarily ban a user.", example: "/ban @user Spamming 7d" },
              { cmd: "/kick [user] [reason]", desc: "Remove a user from the server. Kicked users can rejoin.", example: "/kick @user Violating rules" },
              { cmd: "/mute [user] [duration] [reason]", desc: "Prevent a user from sending messages.", example: "/mute @user 1h Excessive caps" },
              { cmd: "/warn [user] [reason]", desc: "Issue a formal warning. Warnings are tracked.", example: "/warn @user Inappropriate language" },
              { cmd: "/clear [amount] [user]", desc: "Bulk delete messages. Max 100 at once.", example: "/clear 50 @user" },
            ].map((item) => (
              <div key={item.cmd} className="glass-card p-5 mb-4">
                <h4 className="font-mono font-semibold text-foreground mb-1">{item.cmd}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                <code className="text-xs px-2 py-1 rounded bg-muted text-foreground">Example: {item.example}</code>
              </div>
            ))}

            <div className="glass-card p-5 mt-6">
              <h3 className="font-display font-semibold text-foreground mb-3">Moderation Logs</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Member joins and leaves</li>
                <li>Bans, kicks, and mutes</li>
                <li>Message deletions and edits</li>
                <li>Role changes and permission updates</li>
                <li>Channel modifications</li>
                <li>Warning issuance and expiry</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Use <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">/logs set #channel</code> to configure.
              </p>
            </div>
          </section>

          {/* Music */}
          <section id="music" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Music System</h2>
            <p className="text-muted-foreground mb-6">Enjoy high-quality music playback from YouTube, Spotify, SoundCloud, and more.</p>
            <div className="glass-card p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { cmd: "/play [query/url]", desc: "Play a song or add to queue" },
                  { cmd: "/pause", desc: "Pause current playback" },
                  { cmd: "/resume", desc: "Resume paused music" },
                  { cmd: "/skip", desc: "Skip to next song" },
                  { cmd: "/queue", desc: "View current queue" },
                  { cmd: "/volume [1-100]", desc: "Adjust playback volume" },
                  { cmd: "/loop [mode]", desc: "Set loop mode (off/song/queue)" },
                  { cmd: "/shuffle", desc: "Shuffle the queue" },
                  { cmd: "/nowplaying", desc: "Display current song info" },
                  { cmd: "/stop", desc: "Stop playback and clear queue" },
                ].map((item) => (
                  <div key={item.cmd} className="flex flex-col">
                    <span className="font-mono text-sm text-foreground">{item.cmd}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-5 mt-4">
              <h3 className="font-display font-semibold text-foreground mb-3">Advanced Music Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>24/7 music playback (bot stays in voice channel)</li>
                <li>Enhanced audio quality with bitrate boost</li>
                <li>Save and load custom playlists</li>
                <li>Audio effects (bass boost, nightcore, vaporwave)</li>
              </ul>
            </div>
          </section>

          {/* Auto-Moderation */}
          <section id="automod" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Auto-Moderation</h2>
            <p className="text-muted-foreground mb-6">Protect your server automatically with intelligent auto-moderation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Spam Protection", items: ["Message spam detection", "Mention spam (mass pings)", "Emoji spam filtering", "Duplicate message removal", "Configurable thresholds"] },
                { title: "Content Filtering", items: ["Profanity filter with custom word lists", "Link filtering and whitelisting", "Invite link blocking", "NSFW content detection", "Caps lock enforcement"] },
                { title: "Raid Protection", items: ["Rapid join detection", "Automatic lockdown mode", "New account age restrictions", "Verification level adjustment", "Alert notifications to staff"] },
                { title: "Auto-Punishment", items: ["Warning system (3 strikes rule)", "Temporary mutes escalation", "Automatic kicks for repeat offenders", "Ban for severe violations", "Customizable punishment tiers"] },
              ].map((section) => (
                <div key={section.title} className="glass-card p-5">
                  <h3 className="font-display font-semibold text-foreground mb-3">{section.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Use <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">/automod setup</code> to launch the interactive configuration wizard.
            </p>
          </section>

          {/* Leveling */}
          <section id="leveling" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Leveling System</h2>
            <p className="text-muted-foreground mb-6">Encourage engagement with an XP-based leveling system.</p>
            <div className="glass-card p-5 mb-4">
              <h3 className="font-display font-semibold text-foreground mb-3">How Leveling Works</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Sending messages (15-25 XP per message, with cooldown)</li>
                <li>Voice chat participation (5 XP per minute)</li>
                <li>Completing server events and challenges</li>
                <li>Daily activity bonuses</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">Formula: <code className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">XP = 5 × (level²) + 50 × level + 100</code></p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-display font-semibold text-foreground mb-3">Level Roles</h3>
              <div className="space-y-2">
                {[
                  { level: 5, role: "Active Member" },
                  { level: 10, role: "Regular" },
                  { level: 25, role: "Veteran" },
                  { level: 50, role: "Legend" },
                ].map((lr) => (
                  <div key={lr.level} className="flex items-center gap-3 text-sm">
                    <span className="text-noxx-red font-semibold">Level {lr.level}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-foreground">{lr.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dashboard */}
          <section id="dashboard" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Web Dashboard</h2>
            <p className="text-muted-foreground mb-6">Complete control over Yakuza's settings for your server.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Command Management", desc: "Enable or disable specific commands." },
                { title: "Customization", desc: "Set welcome messages, log channels, and more." },
                { title: "Analytics", desc: "Overview of your server's activity and bot usage." },
                { title: "Role Management", desc: "Configure roles for auto-assignment or punishment." },
                { title: "Module Control", desc: "Toggle entire feature sets on or off." },
                { title: "Backup & Restore", desc: "Save and restore your server configuration." },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* API */}
          <section id="api" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">API Integration</h2>
            <p className="text-muted-foreground mb-6">For developers and advanced users, Yakuza offers a comprehensive REST API.</p>
            <div className="glass-card p-5 mb-4">
              <p className="text-sm text-muted-foreground mb-2">Base URL:</p>
              <code className="px-3 py-1.5 rounded bg-muted text-foreground text-sm font-mono">https://api.yakuza.my/v1/</code>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-5">
                <h4 className="font-mono text-sm text-noxx-green mb-2">GET /server/:id</h4>
                <p className="text-sm text-muted-foreground mb-2">Retrieve server information and statistics</p>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto text-foreground">{`{
  "id": "123456789",
  "name": "My Server",
  "memberCount": 1500
}`}</pre>
              </div>
              <div className="glass-card p-5">
                <h4 className="font-mono text-sm text-noxx-yellow mb-2">POST /moderation/ban</h4>
                <p className="text-sm text-muted-foreground mb-2">Programmatically ban a user</p>
                <pre className="text-xs bg-muted p-3 rounded overflow-x-auto text-foreground">{`{
  "serverId": "123456789",
  "userId": "987654321",
  "reason": "API ban test",
  "duration": "7d"
}`}</pre>
              </div>
            </div>
            <div className="glass-card p-5 mt-4">
              <h3 className="font-display font-semibold text-foreground mb-3">Rate Limits</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Basic Plan: 100 requests per hour</li>
                <li>Pro Plan: 500 requests per hour</li>
                <li>Enterprise Plan: Unlimited requests</li>
              </ul>
            </div>
          </section>

          {/* Customization */}
          <section id="customization" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Customization Options</h2>
            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">Welcome Messages</h3>
                <p className="text-sm text-muted-foreground mb-3">Greet new members with customizable welcome messages. Supports embeds, images, and variables.</p>
                <div className="grid grid-cols-2 gap-2">
                  {["{user} - Member mention", "{username} - Member name", "{server} - Server name", "{membercount} - Total members"].map((v) => (
                    <code key={v} className="text-xs px-2 py-1 rounded bg-muted text-foreground">{v}</code>
                  ))}
                </div>
              </div>
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">Auto-Roles</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Join roles for verification</li>
                  <li>Bot role separation</li>
                  <li>Level-based role rewards</li>
                  <li>Reaction role systems</li>
                </ul>
              </div>
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">Logging Channels</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <span>Moderation: Bans, kicks, mutes</span>
                  <span>Messages: Edits, deletions</span>
                  <span>Members: Joins, leaves</span>
                  <span>Voice: Join/leave VC</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How do I invite Yakuza to my server?", a: "Visit our official website and click the \"Invite Yakuza\" button. Then select the server you'd like to add it to. Make sure you have the \"Manage Server\" permission." },
                { q: "Is there a support server?", a: "Yes! Join our Discord support server. You'll find the link on our website. Our team and community members are always ready to help." },
                { q: "Why are my slash commands not showing up?", a: "It can take up to an hour for Discord to register the commands. If they still don't appear, try re-inviting the bot with the correct permissions." },
                { q: "Can I use Yakuza for free?", a: "Absolutely! Yakuza is completely free to use with all core features available to everyone." },
                { q: "How do I report a bug or request a feature?", a: "Join our support server and use the #bug-reports or #feature-requests channels. We actively review all submissions!" },
                { q: "Does Yakuza work with other bots?", a: "Yes! Yakuza is designed to work alongside other bots. You can disable specific Yakuza commands if needed through the dashboard." },
                { q: "Is my data safe with Yakuza?", a: "We take privacy seriously. Yakuza only stores necessary data for functionality. We never sell your data." },
              ].map((item) => (
                <div key={item.q} className="glass-card p-5">
                  <h4 className="font-display font-semibold text-foreground mb-2">Q: {item.q}</h4>
                  <p className="text-sm text-muted-foreground">A: {item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Docs;
