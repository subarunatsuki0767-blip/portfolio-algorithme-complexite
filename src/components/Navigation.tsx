import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { BookOpen, Home, Award } from "lucide-react";
import { lessons } from "@/data/lessons";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = (completedCount / lessons.length) * 100;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <RouterNavLink to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-semibold tracking-tight text-foreground text-3xl">
            A&C
          </span>
        </RouterNavLink>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" icon={<Home className="h-4 w-4" />} label="Accueil" />
          <NavItem to="/lecons" icon={<BookOpen className="h-4 w-4" />} label="Leçons" />
          <NavItem to="/bilan" icon={<Award className="h-4 w-4" />} label="Bilan" />
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span>{completedCount}/{lessons.length}</span>
            <div className="w-20 h-1.5 rounded-full bg-green-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="flex md:hidden border-t border-border">
        <MobileNavItem to="/" label="Accueil" />
        <MobileNavItem to="/lecons" label="Leçons" />
        <MobileNavItem to="/bilan" label="Bilan" />
      </nav>
    </header>
  );
};

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      }`
    }
  >
    {icon}
    {label}
  </RouterNavLink>
);

const MobileNavItem = ({ to, label }: { to: string; label: string }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `flex-1 py-2.5 text-center text-xs font-medium transition-colors ${
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-muted-foreground"
      }`
    }
  >
    {label}
  </RouterNavLink>
);

export default Navigation;
