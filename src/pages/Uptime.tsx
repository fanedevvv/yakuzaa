import { motion } from "framer-motion";
import { Globe, Server, Bot, AlertCircle, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    name: "Website",
    icon: Globe,
    status: "Operational",
    statusColor: "text-noxx-green",
    ping: "55ms",
    uptime: "100.0%",
    bars: Array(90).fill("green"),
  },
  {
    name: "API",
    icon: Server,
    status: "Operational",
    statusColor: "text-noxx-green",
    ping: "10ms",
    uptime: "99.9%",
    bars: Array(90).fill("green"),
  },
  {
    name: "Bot",
    icon: Bot,
    status: "Degraded",
    statusColor: "text-yellow-500",
    ping: "22ms",
    uptime: "95.0%",
    bars: [
      ...Array(55).fill("green"),
      ...Array(3).fill("red"),
      ...Array(32).fill("green"),
    ],
  },
];

const Uptime = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-sm text-yellow-500">
              <AlertCircle className="w-4 h-4" />
              Some services have issues
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4" style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}>
            Uptime Status
          </h1>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-2">
            Track our service availability over the past 90 days
          </p>
          <p className="text-center text-xs text-muted-foreground mb-10">
            Last updated: {new Date().toLocaleString()}
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {services.map((service, idx) => (
              <AnimatedSection key={service.name} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass-card p-6"
                >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                      <p className={`text-sm flex items-center gap-1.5 ${service.statusColor}`}>
                        <span className={`w-2 h-2 rounded-full ${service.status === "Operational" ? "bg-noxx-green" : "bg-yellow-500"}`} />
                        {service.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-right">
                    <div>
                      <p className="text-lg font-bold text-noxx-red">{service.ping}</p>
                      <p className="text-xs text-muted-foreground">ping</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-noxx-green">{service.uptime}</p>
                      <p className="text-xs text-muted-foreground">uptime</p>
                    </div>
                  </div>
                </div>

                {/* Uptime bars */}
                <div className="flex gap-[2px] h-8 items-end">
                  {service.bars.map((color, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${color === "green" ? "bg-noxx-green" : "bg-red-500"}`}
                      style={{ height: `${60 + Math.random() * 40}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-muted-foreground">90 days ago</span>
                  <span className="text-xs text-muted-foreground">Today</span>
                </div>
              </motion.div>
            ))}

            {/* Recent Notices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <h2 className="text-lg font-bold text-foreground mb-4">Recent Notices</h2>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <p className="text-sm">No incidents reported in the past 7 days</p>
              </div>
            </motion.div>

            <div className="text-center mt-8">
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
                ← Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Uptime;
