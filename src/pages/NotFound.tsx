import { Link, useNavigate } from "react-router-dom";
import { Ghost, ArrowLeft, Home } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <Ghost className="w-16 h-16 text-noxx-purple mx-auto mb-6" />
          <h1 className="text-7xl md:text-9xl font-display font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Oops! It seems like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-muted border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-colors"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </div>

          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="font-display font-semibold text-foreground mb-6">You might want to check out:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/commands" className="glass-card-hover p-5 text-center block">
                <h4 className="font-display font-semibold text-foreground mb-1">Commands</h4>
                <p className="text-sm text-muted-foreground">Browse our comprehensive list of bot commands</p>
              </Link>
              <Link to="/partners" className="glass-card-hover p-5 text-center block">
                <h4 className="font-display font-semibold text-foreground mb-1">Partners</h4>
                <p className="text-sm text-muted-foreground">Discover our partners and collaborations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
