import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Support = () => {
  return (
    <Layout>
      <section className="py-32 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-noxx-purple/10 border border-noxx-purple/30 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-noxx-purple" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-gradient mb-4"
          >
            Need Help?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto mb-8"
          >
            Join our Discord server to get support, report bugs, or chat with the community. We're here to help you out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="https://discord.gg/a9Kea3ymC7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-muted border border-border text-foreground font-semibold hover:bg-muted/80 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Join Support Server
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
