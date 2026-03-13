import { motion } from "framer-motion";
import { Clock, Users, Server, MessageSquare, Layers, RefreshCw, Activity, Globe, Cpu, HardDrive, Database, Wifi, Shield, Bot, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Stats = () => {
  const [uptime, setUptime] = useState({ days: 0, hours: 1, minutes: 0, seconds: 4 });

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds++;
        if (seconds >= 60) { seconds = 0; minutes++; }
        if (minutes >= 60) { minutes = 0; hours++; }
        if (hours >= 24) { hours = 0; days++; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const statCards = [
    { icon: Users, value: "874+", label: "Total Users", desc: "Users across all servers", color: "text-noxx-red" },
    { icon: Server, value: "8+", label: "Active Servers", desc: "Discord servers using Yakuza", color: "text-noxx-red" },
    { icon: MessageSquare, value: "213+", label: "Channels", desc: "Monitored text & voice channels", color: "text-noxx-red" },
    { icon: Layers, value: "1+", label: "Shards", desc: "Active bot instances", color: "text-noxx-red" },
  ];

  const historicalStats = [
    { label: "Server Growth", value: "+0.0%", sub: "last 30 days", icon: Server },
    { label: "User Growth", value: "+0.3%", sub: "last 30 days", icon: Users },
    { label: "Avg Latency", value: "45ms", sub: "Excellent", icon: Activity, subColor: "text-noxx-green" },
    { label: "Uptime", value: "99.9%", sub: "This month", icon: Clock },
  ];

  const services = ["Discord Gateway", "Music Playback", "Database", "Cache Layer", "API Endpoints", "WebSocket Server"];

  const vpsInfo = [
    { label: "Provider", value: "Five-Host" },
    { label: "Location", value: "Germany, EU" },
    { label: "OS", value: "Ubuntu 22.04 LTS" },
    { label: "CPU", value: "16 vCPU Cores" },
    { label: "RAM", value: "32 GB" },
    { label: "Storage", value: "800 GB NVMe" },
    { label: "Network", value: "N/A" },
    { label: "IPv4/IPv6", value: "N/A" },
    { label: "DDoS Protection", value: "Disabled" },
    { label: "Virtualization", value: "N/A" },
  ];

  const sysInfo = [
    { label: "Bot Username", value: "@Yakuza" },
    { label: "Bot ID", value: "1327396106565476392" },
    { label: "Node.js", value: "v20.18.1" },
    { label: "Discord.js", value: "v14.16.3" },
    { label: "Gateway Sessions", value: "989 / 1000 remaining" },
  ];

  const perfCards = [
    { label: "Website Ping", value: "15ms", change: "-62%", color: "text-noxx-green" },
    { label: "API Latency", value: "29ms", change: "~", color: "text-muted-foreground" },
    { label: "Bot Ping", value: "23ms", change: "-52%", color: "text-noxx-green" },
    { label: "WebSocket", value: "Connected", change: "", color: "text-noxx-green" },
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-noxx-red/30 bg-noxx-red/10 text-sm text-noxx-red font-medium">
              <span className="w-2 h-2 rounded-full bg-noxx-red animate-pulse" />
              LIVE
            </span>
            <button className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted text-sm text-foreground hover:bg-muted/80 transition-colors">
              <RefreshCw className="w-3.5 h-3.5" />
              Refresh
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-2" style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}>
            Bot Statistics
          </h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-2">
            Real-time performance metrics and system information for Yakuza
          </p>
          <p className="text-center text-xs text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleTimeString()}
          </p>

          {/* Uptime Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-noxx-red/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-noxx-red" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Uptime</p>
                <p className="text-2xl font-mono font-bold text-foreground">
                  {uptime.days}d {pad(uptime.hours)}h {pad(uptime.minutes)}m {pad(uptime.seconds)}s
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-noxx-red">99.9%</p>
                <p className="text-xs text-muted-foreground">Monthly Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">0</p>
                <p className="text-xs text-muted-foreground">Incidents (30d)</p>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-noxx-red/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-noxx-red" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Historical Data */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Historical Data</h2>
                <p className="text-xs text-muted-foreground">Real data from database</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {historicalStats.map((s) => (
                <div key={s.label} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <s.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className={`text-xs ${s.subColor || "text-muted-foreground"}`}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Placeholder charts */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {["Server Growth", "User Growth", "API Latency (24h)", "Uptime Distribution"].map((title) => (
                <div key={title} className="glass-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-4">{title}</h3>
                  <div className="h-32 rounded-lg bg-muted/30 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">Chart data loading...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Performance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {perfCards.map((p) => (
                <div key={p.label} className="glass-card p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-1">{p.label}</p>
                  <p className="text-2xl font-bold text-foreground">{p.value}</p>
                  {p.change && <p className={`text-xs ${p.color}`}>{p.change}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Services Status */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">Services Status</h2>
              <span className="text-xs text-noxx-green">All Operational</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((s) => (
                <div key={s} className="glass-card p-3 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-noxx-green" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Usage */}
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Resource Usage</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "CPU Usage", value: 0 },
                { label: "RAM Usage", value: 0 },
                { label: "Disk Usage", value: 0 },
              ].map((r) => (
                <div key={r.label} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-foreground">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.value}%</p>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-noxx-red" style={{ width: `${r.value}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">100% max</p>
                </div>
              ))}
            </div>
          </div>

          {/* VPS Info */}
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">VPS Infrastructure</h2>
            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <tbody>
                  {vpsInfo.map((item, i) => (
                    <tr key={item.label} className={i < vpsInfo.length - 1 ? "border-b border-border/30" : ""}>
                      <td className="px-5 py-3 text-sm text-muted-foreground">{item.label}</td>
                      <td className="px-5 py-3 text-sm text-foreground text-right">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Info */}
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">System Information</h2>
            <div className="glass-card overflow-hidden">
              <table className="w-full">
                <tbody>
                  {sysInfo.map((item, i) => (
                    <tr key={item.label} className={i < sysInfo.length - 1 ? "border-b border-border/30" : ""}>
                      <td className="px-5 py-3 text-sm text-muted-foreground">{item.label}</td>
                      <td className="px-5 py-3 text-sm text-foreground text-right font-mono">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
              ← Return Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stats;
