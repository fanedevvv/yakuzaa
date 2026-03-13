import { Link } from "react-router-dom";
import YakuzaLogo from "@/assets/yakuza-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-foreground mb-3">
              <img src={YakuzaLogo} alt="Yakuza" className="w-6 h-6 rounded-full" />
              Yakuza
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A powerful Discord bot that brings advanced features and seamless automation to your server.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://discord.gg/a9Kea3ymC7" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-xs">
                DC
              </a>
              <a href="https://github.com/f34r-vr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-xs">
                GH
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/commands" className="hover:text-foreground transition-colors">• Documentation</Link></li>
              <li><Link to="/support" className="hover:text-foreground transition-colors">• Support</Link></li>
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
              <li><Link to="/f34r" className="hover:text-foreground transition-colors">• F34R.mp4!</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Yakuza. All rights reserved.</p>
          <p>Made with ❤️ by <Link to="/f34r" className="text-noxx-purple hover:underline">ItzF34R.mp4!</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
