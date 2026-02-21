import { BookOpen, BarChart3, BrainCircuit, Target, GitBranch, Binary } from "lucide-react";

export interface LessonSection {
  journal: string;
  synthese: string;
  application: string;
  autoEvaluation: {
    maitrise: string;
    ameliorer: string;
    strategie: string;
  };
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  completed: boolean;
  sections: LessonSection;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction à l'Algorithmique",
    subtitle: "Fondements et notions de base",
    icon: BookOpen,
    completed: true,
    sections: {
      journal:
        "Cette première leçon m'a permis de poser les bases fondamentales de l'algorithmique. J'ai redécouvert la notion d'algorithme non pas comme une simple suite d'instructions, mais comme un outil de modélisation de la pensée logique. La distinction entre algorithme et programme m'a semblé plus claire qu'auparavant.",
      synthese:
        "Un algorithme est une séquence finie d'instructions non ambiguës résolvant un problème en temps fini. Les propriétés fondamentales sont : finitude, précision, entrées/sorties définies et efficacité. La correction d'un algorithme se prouve par invariant de boucle.",
      application:
        "Dans le contexte Big Data, cette rigueur algorithmique est essentielle pour concevoir des pipelines de traitement de données fiables. Par exemple, un algorithme de nettoyage de données doit garantir la terminaison même sur des jeux de données massifs.",
      autoEvaluation: {
        maitrise: "Définition formelle d'un algorithme, distinction algorithme/programme, propriétés fondamentales.",
        ameliorer: "Preuves formelles de correction par invariant de boucle.",
        strategie: "Pratiquer les preuves sur des algorithmes classiques (tri, recherche) et formaliser chaque étape.",
      },
    },
  },
  {
    id: 2,
    title: "Complexité Algorithmique",
    subtitle: "Notation Big O et analyse",
    icon: BarChart3,
    completed: true,
    sections: {
      journal:
        "L'analyse de complexité a transformé ma façon d'évaluer les algorithmes. Plutôt que de simplement vérifier si un code fonctionne, je cherche maintenant à quantifier son efficacité. La notation Big O est devenue un réflexe d'analyse.",
      synthese:
        "La complexité temporelle mesure le nombre d'opérations en fonction de la taille de l'entrée n. Notations : O(1) constant, O(log n) logarithmique, O(n) linéaire, O(n log n) quasi-linéaire, O(n²) quadratique, O(2ⁿ) exponentiel. La complexité spatiale mesure la mémoire utilisée.",
      application:
        "En Big Data, choisir un algorithme O(n log n) plutôt que O(n²) peut faire la différence entre un traitement de quelques minutes et plusieurs heures sur des millions d'enregistrements.",
      autoEvaluation: {
        maitrise: "Notation Big O, analyse du pire cas, comparaison des ordres de grandeur.",
        ameliorer: "Analyse amortie et complexité en moyenne.",
        strategie: "Analyser systématiquement la complexité de chaque algorithme que j'implémente.",
      },
    },
  },
  {
    id: 3,
    title: "Structures de Données",
    subtitle: "Tableaux, listes, piles et files",
    icon: GitBranch,
    completed: true,
    sections: {
      journal:
        "Comprendre les structures de données comme des abstractions avec des compromis de performance m'a ouvert les yeux. Chaque structure a ses forces et ses faiblesses, et le choix dépend du contexte d'utilisation.",
      synthese:
        "Tableau : accès O(1), insertion O(n). Liste chaînée : insertion O(1), accès O(n). Pile (LIFO) et File (FIFO) : opérations push/pop et enqueue/dequeue en O(1). Le choix de la structure dépend des opérations dominantes.",
      application:
        "Les files sont essentielles dans les systèmes de streaming Big Data (Kafka, RabbitMQ). Les piles sont utilisées dans l'évaluation d'expressions et le parcours en profondeur de graphes.",
      autoEvaluation: {
        maitrise: "Implémentation et complexité des structures linéaires de base.",
        ameliorer: "Structures avancées : arbres équilibrés, tables de hachage.",
        strategie: "Implémenter chaque structure from scratch pour ancrer la compréhension.",
      },
    },
  },
  {
    id: 4,
    title: "Algorithmes de Tri",
    subtitle: "Stratégies et optimisations",
    icon: BrainCircuit,
    completed: false,
    sections: {
      journal:
        "Les algorithmes de tri sont un terrain d'étude fascinant pour comprendre les compromis entre simplicité, efficacité et utilisation mémoire. Le passage du tri bulle au tri fusion illustre parfaitement l'évolution de la pensée algorithmique.",
      synthese:
        "Tri par insertion : O(n²) pire cas, efficace sur petites entrées. Tri fusion : O(n log n) garanti, diviser pour régner. Tri rapide : O(n log n) en moyenne, O(n²) pire cas. Tri par comptage : O(n+k) pour des clés entières bornées.",
      application:
        "Le tri est omniprésent dans le traitement de données : indexation, jointures, agrégations. MapReduce utilise intensivement le tri pour la phase de shuffle.",
      autoEvaluation: {
        maitrise: "Tri fusion, tri rapide, analyse de leur complexité.",
        ameliorer: "Tri externes pour données ne tenant pas en mémoire.",
        strategie: "Étudier les implémentations dans les frameworks Big Data (Spark, Hadoop).",
      },
    },
  },
  {
    id: 5,
    title: "Graphes et Parcours",
    subtitle: "BFS, DFS et applications",
    icon: Binary,
    completed: false,
    sections: {
      journal:
        "Les graphes modélisent une quantité incroyable de problèmes réels. Apprendre à les parcourir de manière systématique (BFS, DFS) m'a donné des outils puissants pour résoudre des problèmes complexes.",
      synthese:
        "Graphe : G = (V, E). Représentations : matrice d'adjacence O(V²) espace, liste d'adjacence O(V+E). BFS : parcours en largeur, file, O(V+E). DFS : parcours en profondeur, pile/récursion, O(V+E). Applications : plus court chemin, composantes connexes, tri topologique.",
      application:
        "Les graphes sont au cœur des réseaux sociaux, des systèmes de recommandation, et de l'analyse de réseaux. PageRank de Google est un algorithme sur graphe.",
      autoEvaluation: {
        maitrise: "BFS, DFS, représentations de graphes.",
        ameliorer: "Algorithmes de plus court chemin (Dijkstra, Bellman-Ford).",
        strategie: "Résoudre des problèmes de graphes sur des plateformes comme LeetCode.",
      },
    },
  },
  {
    id: 6,
    title: "Programmation Dynamique",
    subtitle: "Optimisation et sous-problèmes",
    icon: Target,
    completed: false,
    sections: {
      journal:
        "La programmation dynamique est sans doute le paradigme le plus difficile à maîtriser mais aussi le plus puissant. Identifier la sous-structure optimale et les chevauchements de sous-problèmes demande un changement de perspective.",
      synthese:
        "Principes : sous-structure optimale + chevauchement de sous-problèmes. Approches : top-down (mémoïsation) et bottom-up (tabulation). Exemples classiques : Fibonacci, sac à dos, plus longue sous-séquence commune. Complexité souvent polynomiale vs exponentielle naïve.",
      application:
        "En data science, la programmation dynamique est utilisée dans l'alignement de séquences, l'optimisation de requêtes SQL, et les algorithmes de Viterbi pour les modèles de Markov cachés.",
      autoEvaluation: {
        maitrise: "Concepts de base, Fibonacci optimisé, problème du sac à dos simple.",
        ameliorer: "Problèmes DP multi-dimensionnels et identification des sous-structures.",
        strategie: "Pratiquer intensivement avec des problèmes de difficulté croissante.",
      },
    },
  },
];
