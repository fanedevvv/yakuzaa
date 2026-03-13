import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";

const fallbackNews = [
  { id: "1", title: "Dashboard version 2.0.4 BETA", date: "January 30, 2026", description: "We fixed some more bugs on dashboard, including music system and anti-spam system." },
  { id: "2", title: "Bugs fixed", date: "January 29, 2026", description: "We have remade the goodbye system and ticket system. They work 100%. Other updates are in preparation." },
  { id: "3", title: "Up and running", date: "January 19, 2026", description: "All Yakuza services, Yakuza Bot and Yakuza Dashboard is up and running.\nBoth is in beta, so every bug report is priceless for us." },
];

const News = () => {
  const [newsItems, setNewsItems] = useState(fallbackNews);

  useEffect(() => {
    supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) setNewsItems(data);
      });
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-noxx-red mb-4" style={{ textShadow: "0 0 40px hsl(0 80% 45% / 0.3)" }}>
              Latest News
            </h1>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
              Stay updated with the latest announcements and updates from Yakuza
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {newsItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <h2 className="font-display font-bold text-foreground text-xl mb-2">{item.title}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
