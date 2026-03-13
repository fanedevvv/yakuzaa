import { Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-foreground mb-3">
              <Bot className="w-5 h-5 text-noxx-purple" />
              Noxx
            </div>
            <p className="text-sm text-muted-foreground">
              A powerful Discord bot that brings advanced features and seamless automation to your server.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">• Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">• Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">• Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">• Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">• Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Noxx. All rights reserved.</p>
          <p>Made with ❤️ by the Noxx Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
