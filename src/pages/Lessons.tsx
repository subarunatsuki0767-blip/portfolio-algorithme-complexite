import { Link } from "react-router-dom";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { lessons } from "@/data/lessons";

const Lessons = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground">Leçons</h1>
        <p className="mt-2 text-muted-foreground">
          Parcourez chaque leçon pour accéder au journal réflexif, à la synthèse et à l'auto-évaluation.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {lessons.map((lesson, i) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <Link
              to={`/lecons/${lesson.id}`}
              className="group flex items-center gap-5 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                <lesson.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    Leçon {String(lesson.id).padStart(2, "0")}
                  </span>
                  {lesson.completed ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-accent" />
                  ) : (
                    <Circle className="h-3.5 w-3.5 text-muted-foreground/40" />
                  )}
                </div>
                <h2 className="font-heading text-lg font-semibold text-foreground mt-0.5">
                  {lesson.title}
                </h2>
                <p className="text-sm text-muted-foreground truncate">{lesson.subtitle}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
