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
  subtitle?: string;
  icon: React.ElementType;
  completed: boolean;
  sections: LessonSection;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Preuve et complexité algorithmique",
    subtitle: "Fondements et notions de base",
    icon: BookOpen,
    completed: true,
    sections: {
      journal:
        "Cette semaine, on est rentré dans le vif du sujet avec la preuve et l'efficacité des algorithmes. Franchement, après une journée de 8h à 18h au bureau, se plonger dans les invariants de boucle et les variants pour la terminaison à 20h, c’est un sacré défi de concentration. Ma grande réussite, c'est d'avoir enfin compris la différence entre la correction partielle (le résultat est bon s'il finit) et la terminaison (l'assurance que l'algo ne boucle pas à l'infini), ce qui forme la correction totale. Ma principale difficulté reste le théorème de maîtrise pour les fonctions récursives ; les maths derrière sont un peu denses quand la fatigue de la journée s'installe. Mais je me sens motivé car je vois enfin \"l'envers du décor\" de la performance informatique.",
      synthese:
        "Pour moi, un algorithme n'est pas juste un bout de code, c'est une transformation logique d'une entrée en sortie. On l'analyse sur deux axes :\n" +
          "La validité : On utilise un variant (une valeur qui diminue) pour prouver qu'il s'arrête, et un invariant (une propriété qui reste vraie) pour prouver que le résultat est correct.\n" +
          "L'efficacité : On mesure la complexité temporelle, surtout dans le pire des cas, car c'est la limite supérieure de ce qu'on peut attendre.\n" +
          "La notation Big O : C'est l'outil qui nous permet de classer les algorithmes (O(n), O(n²), etc.) pour savoir s'ils resteront rapides même avec énormément de données, peu importe la puissance du PC utilisé.",
      application:
        "Étant développeur et étudiant en même temps, la notion de complexité me parle beaucoup. Dans mon travail, j’ai déjà écrit des fonctions sans vraiment réfléchir à leur efficacité. Maintenant, je comprends que faire deux boucles imbriquées peut vite donner une complexité O(n²), ce qui devient problématique avec de gros volumes de données.\n" +
          "\n" +
          "Par exemple, dans un projet où je manipule des listes d’objets, je peux remplacer une recherche linéaire répétée par une structure plus adaptée pour réduire le temps d’exécution.\n" +
          "\n" +
          "Pour la récursivité, comprendre que la recherche binaire a une complexité O(log n) me permet de voir pourquoi elle est beaucoup plus performante qu’une recherche linéaire O(n). Cela change ma façon de penser mes solutions : je ne code plus seulement pour que “ça marche”, mais pour que “ça tienne à l’échelle”.",
      autoEvaluation: {
        maitrise: " L'utilisation de la notation Big O pour les boucles simples et la compréhension théorique de la terminaison d'un algorithme.",
        ameliorer: "La mise en pratique de la preuve par induction (récurrence), surtout pour les algorithmes récursifs complexes.",
        strategie: "Je vais essayer de refaire les exercices d'application du support de cours pendant ma pause déjeuner ou les weekend, quand mon cerveau est plus frais que le soir après 20h.",
      },
    },
  },
  {
    id: 2,
    title: " Algorithmes de tri\n",
    subtitle: "Notation Big O et analyse",
    icon: BarChart3,
    completed: true,
    sections: {
      journal:
        "Cette semaine, on a attaqué les algorithmes de tri, et je dois dire que c'est du costaud après une journée de 8h à 18h au bureau. J'ai réussi à bien capter la logique du tri à bulles et du tri par sélection, sûrement parce qu'ils sont assez intuitifs, mais j'ai vraiment galéré sur le tri rapide (QuickSort) à 21h, surtout avec le concept de partitionnement et le choix du pivot. Ma réussite, c'est d'avoir compris pourquoi on utilise différents tris selon l'état des données. Le ressenti global ? C'est épuisant de jongler avec le pseudo-code et le C quand on a la fatigue de la journée, mais voir un tableau se trier \"proprement\" avec le tri de Shell, c'est hyper satisfaisant.",
      synthese:"Le tri, c'est l'art d'ordonner des données selon une clé pour pouvoir faire des recherches plus rapides après (passer d'une complexité linéaire à logarithmique). Ce que je retiens de cette leçon :\n" +
          "Les propriétés : Un tri peut être en place (pas besoin de mémoire extra), stable (garde l'ordre des éléments égaux) ou adaptatif (plus rapide si c'est déjà presque trié).\n" +
          "Les algorithmes \"simples\" : Le tri par sélection (on cherche le min et on échange) et le tri à bulles (on fait remonter les plus grands) sont faciles mais lents avec une complexité en O(n \n" +
          "2\n" +
          " ).\n" +
          "Les performances : Le tri par insertion est génial pour les petits tableaux presque triés. Le tri rapide est le roi de la vitesse en O(nlogn) pour les gros volumes. Enfin, le tri de Shell est une version améliorée de l'insertion qui travaille par \"grands pas\" grâce à une séquence-h.\n",
        application:"Dans mon travail en développement, je manipule souvent des listes de données, par exemple des utilisateurs ou des transactions. Avant ce cours, je ne réfléchissais pas toujours au type de tri utilisé.\n" +
            "\n" +
            "Maintenant, je comprends que si je travaille sur une petite liste presque triée (par exemple des enregistrements ajoutés récemment), le tri par insertion peut être suffisant et même efficace.\n" +
            "\n" +
            "Dans un projet plus important, comme un système de gestion avec beaucoup de données, je privilégierais un algorithme proche du tri rapide pour garantir de meilleures performances.\n" +
            "\n" +
            "Je réalise aussi que la notion de stabilité est importante si je trie des données selon plusieurs critères (par exemple trier d’abord par date puis par nom). Choisir un tri stable peut éviter des erreurs logiques dans l’affichage final.\n" +
            "\n" +
            "Ce cours me pousse à ne plus coder “automatiquement”, mais à réfléchir à la complexité et à l’impact sur la performance globale.",
        autoEvaluation: {
        maitrise: "Le principe du tri par sélection et les différences entre les propriétés des tris (stabilité, en place).",
        ameliorer: " L'implémentation du tri de Shell en C et le calcul précis de sa complexité, qui varie selon la série d'incréments choisie.",
        strategie: "Je vais essayer de coder le tri rapide pendant ma pause déjeuner au bureau ou le weekend. Ça me permettra de manipuler les pointeurs i et j du partitionnement quand j'ai encore les idées claires.",
      },
    },
  },
  {
    id: 3,
    title: "Structures de données séquentielles de base",
    subtitle: "Tableaux, listes, piles et files",
    icon: GitBranch,
    completed: true,
    sections: {
      journal: "Cette semaine, on a vu les structures de données dynamiques, et j'avoue qu'après ma journée de 8h-18h, le concept de pointeurs m'a demandé un gros effort de concentration. J'ai enfin compris pourquoi on ne peut pas toujours utiliser des tableaux : cette histoire de taille figée et de décalage d'éléments lors d'une insertion est un vrai problème de performance. Ma réussite, c'est d'avoir visualisé mentalement comment une liste chaînée se construit maillon par maillon. Ma difficulté reste la gestion manuelle de la mémoire avec libérer() ; j'ai peur d'oublier de désallouer et de créer des fuites de mémoire dans mes futurs programmes. Malgré la fatigue de 21h, voir que ces structures servent à faire des fonctions \"Annuler\" ou des files d'attente m'a redonné un coup de boost.",
      synthese: "Pour moi, l'essentiel de cette leçon est de savoir choisir la bonne \"boîte\" pour ranger ses données :\n" +
          "La Liste Chaînée : Contrairement au tableau, elle est dynamique. Chaque élément (cellule) contient une info et l'adresse du suivant. C'est super efficace pour insérer au début (O(1)), mais lent pour accéder à un élément précis (O(n)) car il faut tout parcourir.\n" +
          "La Pile (LIFO) : C'est le principe du \"Dernier Entré, Premier Sorti\". On empile et on dépile toujours par le haut (le sommet).\n" +
          "La File (FIFO) : C'est le \"Premier Arrivé, Premier Servi\", comme à la caisse d'un magasin. On insère en queue et on retire en tête. Toutes ces structures utilisent des pointeurs pour réserver de la place en mémoire uniquement quand on en a besoin",
        application: "Au bureau, on utilise un logiciel de gestion de tickets de support client. Je réalise maintenant que la liste des tickets en attente est gérée comme une file (FIFO) : le premier client qui écrit est le premier servi par les techniciens. Par contre, quand j'utilise mon navigateur web pour faire des recherches, le bouton \"Précédent\" fonctionne exactement comme une pile (LIFO) : la dernière page visitée est la première à être récupérée quand je clique sur retour. Dans mes futurs scripts d'automatisation au boulot, si je ne connais pas à l'avance le nombre de logs à traiter, j'utiliserai une liste chaînée plutôt qu'un tableau pour ne pas gaspiller de mémoire inutilement.",
        autoEvaluation: {
        maitrise: "La logique des piles (LIFO) et des files (FIFO), ainsi que les avantages des listes par rapport aux tableaux statiques.\n",
        ameliorer: " L'implémentation rigoureuse en C, notamment le chaînage des pointeurs lors de la suppression d'une cellule au milieu d'une liste sans perdre le reste de la chaîne.",
        strategie: "Je vais relire le document sur les prérequis des pointeurs et essayer de refaire l'exercice de la somme d'une liste chaînée du TD3 ce week-end, à tête reposée, loin du stress du bureau.",
      },
    },
  },
  {
    id: 4,
    title: "Structures de données hiérarchiques\n",
    subtitle: "Stratégies et optimisations",
    icon: BrainCircuit,
    completed: true,
    sections: {
      journal: "Cette semaine, après mes journées à configurer des topics Kafka et à coder des interfaces avec ShadCN, plonger dans les structures hiérarchiques à 18h30 a été un vrai changement de paradigme. J'ai bien réussi à saisir la logique des Arbres Binaires de Recherche (ABR) car elle résonne avec mon expérience en base de données. Cependant, gérer la suppression d'un nœud avec deux enfants (le cas 3) à 21h30 a été ma plus grande difficulté technique, car la manipulation des pointeurs pour réorganiser le successeur demande une lucidité que l'on n'a pas toujours après 8h de boulot. Malgré tout, je ressens une réelle satisfaction à comprendre comment on optimise la performance en brisant le goulot d'étranglement des structures linéaires.\n",
        synthese: "Pour moi, l'essentiel est de passer du modèle linéaire (O(n)) au modèle hiérarchique pour gagner en efficacité.\n" +
            "L'Arbre Binaire : Chaque nœud a au maximum deux fils (gauche et droit). On le représente en mémoire via des pointeurs (gauche, info, droit).\n" +
            "L'ABR (Arbre Binaire de Recherche) : C'est la structure \"propre\" par excellence : les valeurs à gauche sont plus petites que la racine, et celles à droite sont plus grandes (ou égales). C'est ce qui rend la recherche et l'insertion si rapides.\n" +
            "Le Tas (Heap) : Un arbre complet où le parent est toujours supérieur (max heap) ou inférieur (min heap) à ses descendants.\n" +
            "Les Parcours (DFS) : Il existe trois façons de visiter les nœuds en profondeur : infixé (trié), préfixé (racine d'abord) et post-fixé (enfants d'abord).",
        application: "En tant que dev fullstack, je vois ces concepts partout. Par exemple, les index de nos bases de données (PostgreSQL ou MySQL) utilisent des structures en arbre (comme les B-Trees) pour que nos requêtes ne rament pas. Dans mon travail actuel, je réalise que la gestion des priorités ou la planification des tâches dans un OS repose souvent sur des tas (heaps) pour extraire instantanément l'élément le plus prioritaire.",
      autoEvaluation: {
        maitrise: "La terminologie (racine, feuilles, niveaux) et la logique de recherche récursive dans un ABR.",
        ameliorer: "L'implémentation rigoureuse en C des algorithmes de suppression complexe et le calcul de la somme des nœuds via la récursivité.",
        strategie: "Pour garder un code simple et propre, je vais refaire les exercices du TD 4 ce week-end à tête reposée",
      },
    },
  },
  {
    id: 5,
    title: "Table de hachage",
    subtitle: "BFS, DFS et applications",
    icon: Binary,
    completed: true,
    sections: {
      journal: "Cette semaine, on a abordé les tables de hachage, et honnêtement, c’est le sujet qui m'a le plus parlé. J'ai réussi à bien comprendre la mécanique interne qui permet d'atteindre une complexité de O(1) en moyenne pour la recherche. Ma plus grande difficulté a été de jongler entre les différentes méthodes d'adressage ouvert (linéaire, quadratique et double hachage) à 21h, quand la fatigue se fait sentir. C'est passionnant de voir comment une simple fonction mathématique peut transformer une clé en indice, même si la gestion des collisions reste un point technique délicat qui demande beaucoup de rigueur dans l'implémentation.",
        synthese: "Pour moi qui cherche à écrire du code \"propre\" et \"performant\", la table de hachage est l'outil ultime de l'efficacité :\n" +
            "Le concept : C'est une structure de données stockant des couples clé-valeur où l'accès ne se fait pas par un indice séquentiel, mais par une clé transformée en indice via une fonction de hachage.\n" +
            "La fonction de hachage : Elle doit être déterministe, facile à calculer (O(1)) et répartir les clés de manière uniforme pour éviter que tout s'entasse au même endroit.\n" +
            "La gestion des collisions : Comme deux clés peuvent donner le même indice, on utilise soit le chaînage (une liste chaînée à chaque indice), soit l'adressage ouvert (chercher une autre place libre selon une séquence précise).\n" +
            "Indicateur critique : Le facteur de charge (α), qui est le rapport entre le nombre d'éléments et la taille de la table (n/tsize). On essaie de le maintenir autour de 0,75 pour garder des performances optimales.",
        application:
        "Dans mon quotidien de dev Java/Spring Boot, j'utilise souvent des HashMap. Comprendre ce cours m'éclaire sur ce qui se passe sous le capot quand je définis une clé. Par exemple, si je dois gérer un cache haute performance pour des sessions utilisateurs dans un microservice, je sais maintenant qu'une table de hachage est bien plus efficace qu'un arbre binaire (O(logn)) ou une liste (O(n)) pour des recherches instantanées. De plus, en travaillant sur Kafka Streams, je vois le lien avec la manière dont les messages sont partitionnés : la clé du message passe par une fonction de hachage pour déterminer son topic/partition de destination. C'est exactement le même principe de \"dispatching\" uniforme que nous avons étudié.",
      autoEvaluation: {
        maitrise: "Le concept théorique du hachage, l'importance du facteur de charge et la logique du chaînage séparé.",
        ameliorer: " L'implémentation en C des algorithmes de sondage quadratique et de double hachage, car les calculs d'intervalles deviennent vite complexes à coder sans faire d'erreurs d'index.",
        strategie: "Je vais relire le document et essayer de refaire les exercices du TD5 ce week-end, à tête reposée, loin du stress du bureau.",
      },
    },
  },
  {
    id: 6,
    title: "Graphes",
    subtitle: "Optimisation et sous-problèmes",
    icon: Target,
    completed: true,
    sections: {
      journal: "Cette semaine, on a attaqué les graphes, une structure non linéaire super puissante pour modéliser des réseaux. Après mes journées à gérer des bugs present en production mais pas en local. Ayant déjà travaillé sur des topics Kafka, j'ai tout de suite vu l'intérêt, même si se replonger dans la théorie à 20h est rude. Ma réussite a été de bien piger la différence entre le parcours BFS (largeur) et DFS (profondeur) en faisant le lien avec les structures de File (FIFO) et Pile (LIFO) qu'on a vues avant. Ma grosse difficulté ? L'implémentation de l'algorithme de Dijkstra en C à la fin de la séance. Mais je suis satisfait, car je commence à comprendre comment les outils de navigation calculent réellement un itinéraire.\n",
         synthese: "Pour moi, un graphe, c’est un ensemble de nœuds reliés par des arcs (orienté) ou des arêtes (non orienté). Ce que je retiens pour mon futur d'architecte :\n" +
             "Représentation : On choisit la matrice d'adjacence (tableau 2D) pour les graphes denses car l'accès est en O(1), mais on préfère la liste d'adjacence (plus dynamique) pour les graphes peu denses pour économiser de la mémoire.\n" +
             "Parcours : Le BFS explore par \"couches\" autour du départ, idéal pour trouver le plus court chemin en nombre d'arcs. Le DFS plonge le plus loin possible avant de revenir en arrière, top pour détecter des cycles ou faire un tri topologique.\n" +
             "Optimisation : L'algorithme de Dijkstra est incontournable pour les graphes pondérés (avec des coûts) : il utilise une approche gloutonne pour trouver le chemin le moins cher.",
        application:
        "Une application très concrète concerne la gestion de tâches ou de checklists avec des dépendances. Si dans mon appli, une tâche B ne peut être commencée que si la tâche A est finie, je modélise cela comme un graphe orienté. Utiliser un tri topologique me permet alors d'afficher automatiquement les tâches dans le bon ordre logique pour l'utilisateur. C'est une manière beaucoup plus propre de gérer les priorités que de multiplier les conditions \"if/else\" dans mon code.",
      autoEvaluation: {
        maitrise: "La théorie des graphes (orientés vs non orientés, pondérés) et la logique des parcours BFS/DFS.",
        ameliorer: "L'écriture d'un code C sans fuites mémoire pour l'algorithme de Dijkstra, qui est assez verbeux.",
        strategie: "Je vais relire le document et essayer de refaire les exercices du TD6 ce week-end, à tête reposée, loin du stress du bureau.",
      },
    },
  },
  {
    id: 7,
    title: "Techniques classiques de conception d’algorithmes",
    subtitle: "Optimisation et sous-problèmes",
    icon: Target,
    completed: true,
    sections: {
      journal: "Cette semaine, on a exploré les stratégies pour concevoir des algorithmes performants, et c’est exactement ce qu’il me fallait pour monter en compétence en architecture\n" +
          ". Passer de la force brute, qui essaie tout sans réfléchir, à des méthodes comme Diviser pour régner ou la programmation dynamique a été une vraie révélation\n" +
          ". Ma réussite a été de comprendre comment la mémoïsation évite de refaire dix fois le même calcul, un peu comme un cache en développement web\n" +
          ". Ma difficulté reste d'identifier instantanément quelle technique appliquer face à un problème inédit, surtout à 21h quand la fatigue du bureau pèse. C’est stimulant de voir que l’on peut rendre \"possible\" ce qui semblait inefficace\n" +
          ".",
      synthese: "Cette leçon présente trois grands paradigmes pour dépasser l'inefficacité de la force brute\n" +
          " :\n" +
          "Diviser pour régner (DPR) : On découpe le problème en sous-problèmes plus petits, on les résout récursivement, puis on combine les résultats (ex: calcul du max ou tris rapides)\n" +
          ".\n" +
          "Programmation dynamique (PD) : Utilisée pour l'optimisation quand les sous-problèmes se chevauchent\n" +
          ". On stocke les résultats intermédiaires soit par mémoïsation (top-down) soit par tabulation (bottom-up) pour ne jamais recalculer la même chose\n" +
          ".\n" +
          "Backtracking (Retour sur trace) : Une méthode d'essais et d'erreurs où l'on construit une solution partielle et où l'on revient en arrière dès qu'on s'aperçoit qu'un choix mène à une impasse (ex: problème des N-Reines)\n" +
          ".\n",
      application: "Dans mon travail quotidien avec React et TypeScript, j'applique la programmation dynamique sans même le savoir via des hooks comme useMemo. Si je dois traiter une liste complexe de données reçues par Axios pour calculer des statistiques à afficher dans un composant ShadCN, j'utilise la mémoïsation pour éviter que le calcul ne se relance inutilement à chaque re-render de l'interface\n" +
          ".\n" +
          "De même, pour une fonctionnalité de formulaire dynamique multi-étapes complexe avec Zod, je pourrais utiliser une logique de Backtracking : si l'utilisateur fait un choix à l'étape 3 qui rend les données de l'étape 2 invalides, l'algorithme doit \"revenir en arrière\" pour forcer une correction avant de poursuivre l'extension de la saisie\n" +
          ". C'est ce genre de logique qui rend mes applications plus professionnelles et maintenables.",
          autoEvaluation: {
        maitrise: "Le concept de mémoïsation (le \"souvenir\" des résultats) et le principe de division des problèmes en sous-tâches indépendantes",
        ameliorer: "L'analyse rigoureuse via le Théorème Maître pour calculer la complexité exacte des algorithmes récursifs",
        strategie: "Je vais m'entraîner sur l'exercice du sac à dos en C ce week-end\n" +
            "C'est un cas d'école parfait pour comparer force brute et programmation dynamique, ce qui m'aidera à mieux visualiser l'optimisation de ressources.",
      },
    },
  },
  {
    id: 8,
    title: "Techniques de conception d’algorithmes approchés",
    subtitle: "Optimisation et sous-problèmes",
    icon: Target,
    completed: true,
    sections: {
      journal: "Cette semaine, on a découvert les algorithmes approchés, et c'est un soulagement de voir qu'on n'a pas toujours besoin de la solution \"parfaite\" si elle coûte trop cher en ressources\n" +
          ". Après mes journées de 8h à 18h à coder des interfaces propres avec ShadCN, me plonger dans les heuristiques et méta-heuristiques à 19h a été intense mais passionnant\n" +
          ". Ma réussite a été de comprendre l'aspect \"pragmatique\" de l'algorithme glouton : on fait le meilleur choix local tout de suite et on ne revient pas en arrière\n" +
          ". Ma principale difficulté a été de bien saisir le fonctionnement de la mémoire à court terme dans la recherche Tabou pour éviter de tourner en rond dans les solutions\n" +
          ". Je me sens de plus en plus capable de juger quand il faut arrêter de chercher l'optimum absolu pour privilégier l'efficacité en production\n" +
          ".",
      synthese: "Pour moi qui aime le code maintenable et professionnel, les algorithmes approchés sont des outils de compromis entre qualité et temps de calcul\n" +
          ".\n" +
          "Les Heuristiques : Ce sont des méthodes rapides qui exploitent la structure d'un problème\n" +
          ". L'approche gloutonne construit une solution étape par étape par des choix irrévocables\n" +
          ". La recherche locale, elle, part d'une solution et explore son voisinage pour l'améliorer itérativement\n" +
          ".\n" +
          "Les Méta-heuristiques : Ce sont des stratégies de haut niveau, plus génériques\n" +
          ". La recherche Tabou utilise une liste de mouvements interdits pour sortir des optima locaux\n" +
          ". Les algorithmes génétiques s'inspirent de la sélection naturelle (croisement, mutation) pour faire évoluer une population de solutions\n" +
          ".\n" +
          "L'objectif : Trouver une solution \"suffisamment bonne\" en un temps raisonnable, surtout quand le problème est trop complexe pour une résolution exacte\n" +
          ".",
      application: "Dans mon quotidien de développeur, je pourrais appliquer ces concepts pour optimiser une fonctionnalité de planification automatique dans une application React. Par exemple, si je dois suggérer une répartition de tâches pour une équipe sans dépasser un quota d'heures (un problème de type Sac à dos), au lieu d'utiliser une solution exacte trop lourde, j'implémenterais une heuristique gloutonne basée sur le ratio priorité/temps\n" +
          ". C'est une approche simple, propre et très rapide à l'exécution pour l'utilisateur final\n" +
          ".\n" +
          "Aussi, pour un outil de génération de mises en page dynamiques complexes où les composants ne doivent pas se chevaucher (similaire au problème des N-Reines), un algorithme génétique léger permettrait de tester plusieurs combinaisons et de garder la plus ergonomique sans figer l'interface\n" +
          ". Cela rend mon code évolutif car je peux ajuster la \"fitness\" (la qualité) selon les retours des utilisateurs\n" +
          ".",
      autoEvaluation: {
        maitrise: "Le principe de l'algorithme glouton et la notion de voisinage dans la recherche locale\n" +
            ".",
        ameliorer: "Le réglage des paramètres des algorithmes génétiques (probabilités de mutation et de croisement) pour éviter une convergence trop lente\n" +
            ".",
        strategie: "Pour garder mon code simple et réutilisable, je vais essayer d'implémenter l'exercice du rendu de monnaie en C ce week-end, en comparant la version gloutonne avec les cas où elle n'est pas optimale\n" +
            ". C'est un bon exercice pour muscler ma logique avant mes futures certifications Java Backend.",
      },
    },
  },
];
