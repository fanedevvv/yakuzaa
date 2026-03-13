import { motion } from "framer-motion";
import { Crown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Premium = () => {
  return (
    <Layout>
      <section className="py-20 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-noxx-red/30 bg-noxx-red/5 flex items-center justify-center"
          >
            <Crown className="w-16 h-16 text-noxx-red" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            <span className="text-noxx-red">Premium</span>{" "}
            <span className="text-foreground">Coming Soon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-md mx-auto mb-8"
          >
            We're cooking something special. Exclusive features and perks are on the way!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-noxx-red/30 bg-noxx-red/5 text-sm text-noxx-red mb-8">
              <span className="w-2 h-2 rounded-full bg-noxx-red animate-pulse" />
              In Development
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href="https://discord.gg/a9Kea3ymC7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-noxx-red text-white font-semibold text-sm hover:bg-noxx-red/90 transition-colors"
            >
              Join Discord
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Premium;
