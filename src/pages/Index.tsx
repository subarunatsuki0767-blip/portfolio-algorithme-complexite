import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, BarChart3, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import { lessons } from "@/data/lessons";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const completedCount = lessons.filter((l) => l.completed).length;

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-light via-background to-accent opacity-60" />
        <div className="container relative py-24 md:py-32">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div variants={fadeUp} custom={0} className="mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                <BookOpen className="h-3 w-3" />
                Master 1 Big Data
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Portfolio
              <br />
              <span className="text-primary">Algorithmique & Complexité</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Journal d'apprentissage réflexif — une démarche structurée de progression, 
              de réflexion et d'amélioration continue en algorithmique.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex items-center gap-4">
              <Link
                to="/lecons"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
              >
                Accéder aux leçons
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/bilan"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Bilan de semestre
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border bg-surface-sunken">
        <div className="container py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, label: "Leçons complétées", value: `${completedCount}/${lessons.length}` },
              { icon: BarChart3, label: "Progression", value: `${Math.round((completedCount / lessons.length) * 100)}%` },
              { icon: BrainCircuit, label: "Concepts clés", value: "24+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Démarche */}
      <section className="container py-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Démarche pédagogique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Observer", desc: "Journal réflexif sur chaque leçon" },
            { step: "02", title: "Synthétiser", desc: "Concepts clés et notions essentielles" },
            { step: "03", title: "Appliquer", desc: "Mise en contexte Big Data" },
            { step: "04", title: "Évaluer", desc: "Auto-évaluation et stratégie" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-mono font-medium text-primary">{item.step}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
