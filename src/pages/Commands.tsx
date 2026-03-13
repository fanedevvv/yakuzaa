import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Crown, Shield, Coins, Gavel, Music, Gamepad2, Wrench, TrendingUp, Gift, MessageSquare, Heart, ScrollText } from "lucide-react";
import Layout from "@/components/Layout";

interface Command {
  name: string;
  desc: string;
  usage?: string;
}

interface Category {
  icon: any;
  title: string;
  desc: string;
  color: string;
  commands: Command[];
}

const categories: Category[] = [
  {
    icon: Crown, title: "Premium", desc: "Exclusive premium commands and features", color: "bg-yellow-500/20 text-yellow-400",
    commands: [
      { name: "/premium info", desc: "View your premium status and benefits", usage: "/premium info" },
      { name: "/premium activate", desc: "Activate a premium key on your server", usage: "/premium activate <key>" },
      { name: "/premium transfer", desc: "Transfer premium to another server", usage: "/premium transfer <server_id>" },
      { name: "/customembed", desc: "Create fully customizable embeds (premium only)", usage: "/customembed <title> <description> [color] [image]" },
      { name: "/autorole premium", desc: "Set up premium auto-roles for new members", usage: "/autorole premium <role>" },
    ],
  },
  {
    icon: Shield, title: "Automod", desc: "Automatic moderation tools to keep your server safe", color: "bg-blue-500/20 text-blue-400",
    commands: [
      { name: "/automod enable", desc: "Enable the auto-moderation system", usage: "/automod enable" },
      { name: "/automod disable", desc: "Disable the auto-moderation system", usage: "/automod disable" },
      { name: "/automod antispam", desc: "Configure anti-spam settings", usage: "/automod antispam <threshold> <action>" },
      { name: "/automod antilink", desc: "Toggle anti-link protection", usage: "/automod antilink <on/off> [whitelist]" },
      { name: "/automod badwords", desc: "Manage the bad words filter list", usage: "/automod badwords <add/remove/list> [word]" },
      { name: "/automod caps", desc: "Set caps lock spam protection", usage: "/automod caps <percentage> <action>" },
      { name: "/automod mentions", desc: "Limit mass mentions in messages", usage: "/automod mentions <max_count> <action>" },
      { name: "/automod invites", desc: "Block Discord invite links", usage: "/automod invites <on/off>" },
      { name: "/automod config", desc: "View current automod configuration", usage: "/automod config" },
    ],
  },
  {
    icon: Coins, title: "Economy", desc: "Server economy and currency system", color: "bg-amber-500/20 text-amber-400",
    commands: [
      { name: "/balance", desc: "Check your or another user's balance", usage: "/balance [user]" },
      { name: "/daily", desc: "Claim your daily coins reward", usage: "/daily" },
      { name: "/weekly", desc: "Claim your weekly coins reward", usage: "/weekly" },
      { name: "/work", desc: "Work to earn coins", usage: "/work" },
      { name: "/rob", desc: "Attempt to rob another user", usage: "/rob <user>" },
      { name: "/deposit", desc: "Deposit coins into your bank", usage: "/deposit <amount>" },
      { name: "/withdraw", desc: "Withdraw coins from your bank", usage: "/withdraw <amount>" },
      { name: "/pay", desc: "Send coins to another user", usage: "/pay <user> <amount>" },
      { name: "/shop", desc: "Browse the server shop", usage: "/shop" },
      { name: "/buy", desc: "Buy an item from the shop", usage: "/buy <item>" },
      { name: "/inventory", desc: "View your inventory", usage: "/inventory [user]" },
      { name: "/leaderboard economy", desc: "View the richest users", usage: "/leaderboard economy" },
      { name: "/slots", desc: "Play the slot machine", usage: "/slots <bet>" },
      { name: "/coinflip", desc: "Gamble with a coin flip", usage: "/coinflip <bet> <heads/tails>" },
    ],
  },
  {
    icon: Gavel, title: "Moderation", desc: "Server moderation and management", color: "bg-red-500/20 text-red-400",
    commands: [
      { name: "/ban", desc: "Ban a user from the server", usage: "/ban <user> [reason] [delete_days]" },
      { name: "/unban", desc: "Unban a user from the server", usage: "/unban <user_id>" },
      { name: "/kick", desc: "Kick a user from the server", usage: "/kick <user> [reason]" },
      { name: "/mute", desc: "Mute a user (timeout)", usage: "/mute <user> <duration> [reason]" },
      { name: "/unmute", desc: "Unmute a user", usage: "/unmute <user>" },
      { name: "/warn", desc: "Warn a user", usage: "/warn <user> <reason>" },
      { name: "/warnings", desc: "View warnings for a user", usage: "/warnings <user>" },
      { name: "/clearwarns", desc: "Clear all warnings for a user", usage: "/clearwarns <user>" },
      { name: "/purge", desc: "Delete multiple messages at once", usage: "/purge <amount> [user]" },
      { name: "/slowmode", desc: "Set channel slowmode", usage: "/slowmode <seconds>" },
      { name: "/lock", desc: "Lock a channel", usage: "/lock [channel] [reason]" },
      { name: "/unlock", desc: "Unlock a channel", usage: "/unlock [channel]" },
      { name: "/nuke", desc: "Clone and delete a channel (reset)", usage: "/nuke [channel]" },
      { name: "/role", desc: "Add or remove a role from a user", usage: "/role <add/remove> <user> <role>" },
    ],
  },
  {
    icon: Music, title: "Music", desc: "Music playback and control", color: "bg-green-500/20 text-green-400",
    commands: [
      { name: "/play", desc: "Play a song or add it to the queue", usage: "/play <song/url>" },
      { name: "/pause", desc: "Pause the current song", usage: "/pause" },
      { name: "/resume", desc: "Resume playback", usage: "/resume" },
      { name: "/skip", desc: "Skip the current song", usage: "/skip" },
      { name: "/stop", desc: "Stop playback and clear the queue", usage: "/stop" },
      { name: "/queue", desc: "View the current music queue", usage: "/queue" },
      { name: "/nowplaying", desc: "Show the currently playing song", usage: "/nowplaying" },
      { name: "/volume", desc: "Adjust the playback volume", usage: "/volume <1-100>" },
      { name: "/loop", desc: "Toggle loop mode (song/queue/off)", usage: "/loop <song/queue/off>" },
      { name: "/shuffle", desc: "Shuffle the current queue", usage: "/shuffle" },
      { name: "/seek", desc: "Seek to a position in the song", usage: "/seek <time>" },
      { name: "/lyrics", desc: "Get lyrics for the current song", usage: "/lyrics [song]" },
      { name: "/filter", desc: "Apply audio filters (bass, nightcore, etc.)", usage: "/filter <filter_name>" },
      { name: "/disconnect", desc: "Disconnect the bot from voice", usage: "/disconnect" },
    ],
  },
  {
    icon: Gamepad2, title: "Fun", desc: "Entertainment and interactive commands", color: "bg-pink-500/20 text-pink-400",
    commands: [
      { name: "/meme", desc: "Get a random meme from Reddit", usage: "/meme" },
      { name: "/joke", desc: "Get a random joke", usage: "/joke" },
      { name: "/8ball", desc: "Ask the magic 8-ball a question", usage: "/8ball <question>" },
      { name: "/rps", desc: "Play rock-paper-scissors", usage: "/rps <rock/paper/scissors>" },
      { name: "/trivia", desc: "Answer a trivia question", usage: "/trivia [category]" },
      { name: "/roast", desc: "Roast a user (fun)", usage: "/roast <user>" },
      { name: "/ship", desc: "Check love compatibility", usage: "/ship <user1> <user2>" },
      { name: "/rate", desc: "Rate something out of 10", usage: "/rate <thing>" },
      { name: "/say", desc: "Make the bot say something", usage: "/say <message>" },
      { name: "/embed", desc: "Send a message as an embed", usage: "/embed <message>" },
      { name: "/poll", desc: "Create a poll", usage: "/poll <question> <option1> <option2> [option3]" },
      { name: "/hack", desc: "Fake hack a user (joke)", usage: "/hack <user>" },
    ],
  },
  {
    icon: Wrench, title: "Utility", desc: "General utility and helper commands", color: "bg-orange-500/20 text-orange-400",
    commands: [
      { name: "/help", desc: "Show bot help and command list", usage: "/help [command]" },
      { name: "/ping", desc: "Check bot latency", usage: "/ping" },
      { name: "/serverinfo", desc: "Display server information", usage: "/serverinfo" },
      { name: "/userinfo", desc: "Display user information", usage: "/userinfo [user]" },
      { name: "/avatar", desc: "Get a user's avatar", usage: "/avatar [user]" },
      { name: "/banner", desc: "Get a user's banner", usage: "/banner [user]" },
      { name: "/roleinfo", desc: "Display info about a role", usage: "/roleinfo <role>" },
      { name: "/channelinfo", desc: "Display info about a channel", usage: "/channelinfo [channel]" },
      { name: "/membercount", desc: "Show total member count", usage: "/membercount" },
      { name: "/invite", desc: "Get the bot invite link", usage: "/invite" },
      { name: "/botinfo", desc: "Show bot stats and info", usage: "/botinfo" },
      { name: "/snipe", desc: "Recover last deleted message", usage: "/snipe [channel]" },
      { name: "/afk", desc: "Set your AFK status", usage: "/afk [reason]" },
      { name: "/remind", desc: "Set a reminder", usage: "/remind <time> <message>" },
      { name: "/translate", desc: "Translate text to another language", usage: "/translate <language> <text>" },
    ],
  },
  {
    icon: TrendingUp, title: "Leveling", desc: "XP and level system commands", color: "bg-cyan-500/20 text-cyan-400",
    commands: [
      { name: "/rank", desc: "View your or another user's rank card", usage: "/rank [user]" },
      { name: "/leaderboard xp", desc: "View the XP leaderboard", usage: "/leaderboard xp" },
      { name: "/setlevel", desc: "Set a user's level (admin)", usage: "/setlevel <user> <level>" },
      { name: "/setxp", desc: "Set a user's XP (admin)", usage: "/setxp <user> <xp>" },
      { name: "/resetxp", desc: "Reset a user's XP and level", usage: "/resetxp <user>" },
      { name: "/xp config", desc: "Configure XP gain settings", usage: "/xp config <min> <max> <cooldown>" },
      { name: "/levelroles", desc: "Set roles awarded at certain levels", usage: "/levelroles <add/remove/list> [level] [role]" },
      { name: "/xp enable", desc: "Enable/disable the leveling system", usage: "/xp enable <on/off>" },
      { name: "/xp channel", desc: "Set channels where XP can be earned", usage: "/xp channel <add/remove> <channel>" },
    ],
  },
  {
    icon: Gift, title: "Giveaways", desc: "Host and manage server giveaways", color: "bg-purple-500/20 text-purple-400",
    commands: [
      { name: "/giveaway start", desc: "Start a new giveaway", usage: "/giveaway start <duration> <winners> <prize> [channel]" },
      { name: "/giveaway end", desc: "End a giveaway early", usage: "/giveaway end <message_id>" },
      { name: "/giveaway reroll", desc: "Reroll the winner of a giveaway", usage: "/giveaway reroll <message_id>" },
      { name: "/giveaway pause", desc: "Pause an active giveaway", usage: "/giveaway pause <message_id>" },
      { name: "/giveaway resume", desc: "Resume a paused giveaway", usage: "/giveaway resume <message_id>" },
      { name: "/giveaway list", desc: "List all active giveaways", usage: "/giveaway list" },
      { name: "/giveaway delete", desc: "Delete a giveaway", usage: "/giveaway delete <message_id>" },
    ],
  },
  {
    icon: MessageSquare, title: "Tickets", desc: "Support ticket system", color: "bg-indigo-500/20 text-indigo-400",
    commands: [
      { name: "/ticket setup", desc: "Set up the ticket system in a channel", usage: "/ticket setup <channel> [category]" },
      { name: "/ticket close", desc: "Close the current ticket", usage: "/ticket close [reason]" },
      { name: "/ticket add", desc: "Add a user to the current ticket", usage: "/ticket add <user>" },
      { name: "/ticket remove", desc: "Remove a user from the current ticket", usage: "/ticket remove <user>" },
      { name: "/ticket rename", desc: "Rename the current ticket", usage: "/ticket rename <name>" },
      { name: "/ticket claim", desc: "Claim a ticket as a staff member", usage: "/ticket claim" },
      { name: "/ticket transcript", desc: "Save a transcript of the ticket", usage: "/ticket transcript" },
      { name: "/ticket config", desc: "Configure ticket system settings", usage: "/ticket config" },
    ],
  },
  {
    icon: Heart, title: "Welcome", desc: "Welcome and goodbye messages", color: "bg-rose-500/20 text-rose-400",
    commands: [
      { name: "/welcome channel", desc: "Set the welcome message channel", usage: "/welcome channel <channel>" },
      { name: "/welcome message", desc: "Customize the welcome message", usage: "/welcome message <message>" },
      { name: "/welcome image", desc: "Toggle welcome card image", usage: "/welcome image <on/off>" },
      { name: "/welcome test", desc: "Test the welcome message", usage: "/welcome test" },
      { name: "/welcome enable", desc: "Enable/disable welcome messages", usage: "/welcome enable <on/off>" },
      { name: "/goodbye channel", desc: "Set the goodbye message channel", usage: "/goodbye channel <channel>" },
      { name: "/goodbye message", desc: "Customize the goodbye message", usage: "/goodbye message <message>" },
      { name: "/goodbye enable", desc: "Enable/disable goodbye messages", usage: "/goodbye enable <on/off>" },
      { name: "/goodbye test", desc: "Test the goodbye message", usage: "/goodbye test" },
      { name: "/autorole", desc: "Set roles given automatically on join", usage: "/autorole <add/remove/list> [role]" },
    ],
  },
  {
    icon: ScrollText, title: "Logging", desc: "Server logging and audit system", color: "bg-teal-500/20 text-teal-400",
    commands: [
      { name: "/logs enable", desc: "Enable the logging system", usage: "/logs enable" },
      { name: "/logs disable", desc: "Disable the logging system", usage: "/logs disable" },
      { name: "/logs channel", desc: "Set the log channel", usage: "/logs channel <channel>" },
      { name: "/logs events", desc: "Choose which events to log", usage: "/logs events <event> <on/off>" },
      { name: "/logs ignore", desc: "Ignore a channel or role from logs", usage: "/logs ignore <channel/role>" },
      { name: "/logs config", desc: "View current logging configuration", usage: "/logs config" },
      { name: "/modlogs", desc: "View moderation logs for a user", usage: "/modlogs <user>" },
    ],
  },
];

const Commands = () => {
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const filtered = categories.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      c.commands.some((cmd) => cmd.name.toLowerCase().includes(q) || cmd.desc.toLowerCase().includes(q))
    );
  });

  const getFilteredCommands = (cat: Category) => {
    if (!search) return cat.commands;
    const q = search.toLowerCase();
    if (cat.title.toLowerCase().includes(q) || cat.desc.toLowerCase().includes(q)) return cat.commands;
    return cat.commands.filter((cmd) => cmd.name.toLowerCase().includes(q) || cmd.desc.toLowerCase().includes(q));
  };

  const totalCommands = categories.reduce((sum, c) => sum + c.commands.length, 0);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1
            className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-2"
            style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}
          >
            Commands
          </h1>
          <p className="text-center text-muted-foreground mb-1 text-sm">
            {totalCommands} commands across {categories.length} categories
          </p>
          <p className="text-center text-muted-foreground mb-8 text-xs">
            All commands use slash commands (/)
          </p>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/60 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-noxx-red/50 transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="space-y-3">
            {filtered.map((cat, i) => {
              const cmds = getFilteredCommands(cat);
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    onClick={() => setOpenCategory(openCategory === cat.title ? null : cat.title)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/50 hover:border-noxx-red/30 transition-colors text-left"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cat.color}`}>
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {cmds.length}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{cat.desc}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                        openCategory === cat.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openCategory === cat.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" as const }}
                        className="overflow-hidden"
                      >
                        <div className="mt-1 p-3 rounded-xl bg-card/40 border border-border/30 space-y-1">
                          {cmds.map((cmd) => (
                            <div
                              key={cmd.name}
                              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                            >
                              <code className="text-sm font-mono text-noxx-red shrink-0">{cmd.name}</code>
                              <span className="text-sm text-muted-foreground flex-1">{cmd.desc}</span>
                              {cmd.usage && (
                                <code className="text-[11px] text-muted-foreground/60 font-mono hidden lg:block shrink-0">
                                  {cmd.usage}
                                </code>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No commands found for "{search}"</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commands;
