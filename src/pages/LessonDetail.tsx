import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, Briefcase, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { lessons } from "@/data/lessons";

const sectionFade = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const LessonDetail = () => {
  const { id } = useParams();
  const lessonId = Number(id);
  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground">Leçon introuvable.</p>
        <Link to="/lecons" className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Retour aux leçons
        </Link>
      </div>
    );
  }

  const prevLesson = lessons.find((l) => l.id === lessonId - 1);
  const nextLesson = lessons.find((l) => l.id === lessonId + 1);

  return (
    <div className="container py-10 md:py-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link to="/lecons" className="hover:text-foreground transition-colors">Leçons</Link>
        <span>/</span>
        <span className="text-foreground font-medium">Leçon {String(lesson.id).padStart(2, "0")}</span>
      </div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <lesson.icon className="h-5 w-5 text-primary" />
          </div>
          {lesson.completed && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-green-accent">
              <CheckCircle2 className="h-3 w-3" /> Complétée
            </span>
          )}
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{lesson.title}</h1>
        <p className="mt-1 text-lg text-muted-foreground">{lesson.subtitle}</p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-8 max-w-3xl">
        <SectionBlock
          index={0}
          icon={<BookOpen className="h-4 w-4" />}
          title="Journal d'apprentissage réflexif"
          bgClass="bg-green-light"
        >
          <p className="text-foreground leading-relaxed">{lesson.sections.journal}</p>
        </SectionBlock>

        <SectionBlock
          index={1}
          icon={<Lightbulb className="h-4 w-4" />}
          title="Synthèse des concepts clés"
          bgClass="bg-surface-sunken"
        >
          <p className="text-foreground leading-relaxed">{lesson.sections.synthese}</p>
        </SectionBlock>

        <SectionBlock
          index={2}
          icon={<Briefcase className="h-4 w-4" />}
          title="Application pratique – Contexte Big Data"
          bgClass="bg-background"
          border
        >
          <p className="text-foreground leading-relaxed">{lesson.sections.application}</p>
        </SectionBlock>

        <SectionBlock
          index={3}
          icon={<Target className="h-4 w-4" />}
          title="Auto-évaluation & méta-cognition"
          bgClass="bg-green-light"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <EvalCard label="Ce que je maîtrise" value={lesson.sections.autoEvaluation.maitrise} variant="success" />
            <EvalCard label="À améliorer" value={lesson.sections.autoEvaluation.ameliorer} variant="warning" />
            <EvalCard label="Stratégie" value={lesson.sections.autoEvaluation.strategie} variant="info" />
          </div>
        </SectionBlock>
      </div>

      {/* Navigation */}
      <div className="mt-14 flex items-center justify-between border-t border-border pt-6 max-w-3xl">
        {prevLesson ? (
          <Link
            to={`/lecons/${prevLesson.id}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Leçon {String(prevLesson.id).padStart(2, "0")}</span>
          </Link>
        ) : <div />}
        {nextLesson ? (
          <Link
            to={`/lecons/${nextLesson.id}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Leçon {String(nextLesson.id).padStart(2, "0")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            to="/bilan"
            className="flex items-center gap-2 text-sm text-primary font-medium hover:underline"
          >
            Bilan de semestre
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

const SectionBlock = ({
  index,
  icon,
  title,
  bgClass,
  border,
  children,
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  bgClass: string;
  border?: boolean;
  children: React.ReactNode;
}) => (
  <motion.section
    variants={sectionFade}
    initial="hidden"
    animate="visible"
    custom={index}
    className={`rounded-xl p-6 md:p-8 ${bgClass} ${border ? "border border-border" : ""}`}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="text-primary">{icon}</span>
      <h2 className="font-heading text-lg font-semibold text-foreground">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const EvalCard = ({ label, value, variant }: { label: string; value: string; variant: "success" | "warning" | "info" }) => {
  const borderColors = {
    success: "border-l-green-accent",
    warning: "border-l-yellow-500",
    info: "border-l-secondary",
  };

  return (
    <div className={`rounded-lg bg-card border border-border border-l-4 ${borderColors[variant]} p-4`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</p>
      <p className="text-sm text-foreground leading-relaxed">{value}</p>
    </div>
  );
};

export default LessonDetail;
