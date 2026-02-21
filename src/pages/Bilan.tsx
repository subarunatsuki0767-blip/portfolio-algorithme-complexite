import { Award, TrendingUp, BookOpen, Target, CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { lessons } from "@/data/lessons";

const Bilan = () => {
  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="container py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Award className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Rapport de synthèse
          </span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Bilan de Semestre
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Synthèse de la progression en Algorithmique & Complexité — Master 1 Big Data.
        </p>
      </motion.div>

      <div className="max-w-3xl space-y-8">
        {/* Progress overview */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            Vue d'ensemble
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <StatMini label="Leçons" value={`${lessons.length}`} />
            <StatMini label="Complétées" value={`${completedCount}`} />
            <StatMini label="En cours" value={`${lessons.length - completedCount}`} />
            <StatMini label="Progression" value={`${progress}%`} />
          </div>
          <div className="w-full h-2.5 rounded-full bg-green-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Lessons status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            État des leçons
          </h2>
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center gap-3 text-sm">
                {lesson.completed ? (
                  <CheckCircle2 className="h-4 w-4 text-green-accent shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                )}
                <span className="font-mono text-xs text-muted-foreground w-6">
                  {String(lesson.id).padStart(2, "0")}
                </span>
                <span className={`${lesson.completed ? "text-foreground" : "text-muted-foreground"}`}>
                  {lesson.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Réflexion finale */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl bg-green-light p-6 md:p-8"
        >
          <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            Réflexion et perspectives
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Ce semestre en Algorithmique et Complexité a constitué une étape fondamentale dans ma 
              formation d'ingénieur data. Au-delà de l'acquisition de connaissances techniques, 
              c'est une véritable discipline de pensée qui s'est construite.
            </p>
            <p>
              La démarche de journal réflexif m'a permis de prendre du recul sur mon apprentissage, 
              d'identifier mes zones de confort et mes axes de progression. Chaque leçon a été 
              l'occasion non seulement d'apprendre, mais de comprendre <em>comment</em> j'apprends.
            </p>
            <p>
              Les perspectives pour la suite incluent l'approfondissement de la programmation 
              dynamique, l'exploration des algorithmes d'approximation, et l'application systématique 
              de l'analyse de complexité dans mes projets Big Data.
            </p>
          </div>
        </motion.div>

        {/* Compétences */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
            Compétences développées
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Analyse de complexité algorithmique",
              "Notation asymptotique (Big O, Θ, Ω)",
              "Structures de données fondamentales",
              "Algorithmes de tri et recherche",
              "Parcours de graphes (BFS, DFS)",
              "Programmation dynamique",
              "Pensée réflexive structurée",
              "Auto-évaluation continue",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const StatMini = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center p-3 rounded-lg bg-surface-sunken">
    <p className="text-2xl font-heading font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
  </div>
);

export default Bilan;
