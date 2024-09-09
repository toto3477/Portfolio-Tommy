/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tommy's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tommy Costamagno Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Tommy Costamagno",
  logo_name: "TommyCostamagno",
  nickname: "",
  subTitle:
    "Développeur débutant, passionné de codage.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/toto3477",
  githubProfile: "https://github.com/toto3477",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/toto3477",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Frontend",
      fileName: "DataScienceImg",
      skills: [
        "⚡ HTML",
        "⚡ CSS",
        "⚡ Sass",
        "⚡ JavaScript",
        "⚡ React",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Backend",
      fileName: "FullStackImg",
      skills: [
        "⚡ NodeJS",
        "⚡ NPM",
        "⚡ MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Autres skills",
      fileName: "DesignImg",
      skills: [
        "⚡ Bootstrap",
        "⚡ SEO",
      ],
      softwareSkills: [
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "SEO",
          fontAwesomeClassname: "simple-icons:SEO",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "OpenClassroom",
      subtitle: "Developpeur Web: Diplôme de niveau 5 (bac+2)",
      logo_path: "iu_logo.png",
      alt_name: "Openclassroom",
      duration: "2024",
      descriptions: [
        "⚡ Construire un site web responsive et dynamique s’adaptant à tout type d’écran grâce à l’intégration des éléments des maquettes graphiques (développement front-end avec HTML, CSS, JavaScript et React)",
        "⚡ Créer des API et des bases de données pour développer des sites complets et dynamiques et assurer le bon fonctionnement côté serveur (développement back-end avec NodeJS, Express et MongoDB). ",
        "⚡ Optimiser les performances et réaliser la maintenance de sites web déjà existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO).",
        "⚡ Gérer un projet web de A à Z : de la planification du projet à la présentation de la solution au client, en passant par la rédaction des spécifications techniques.",
      ],
      website_link: "https://openclassrooms.com/fr",
    },
    {
      title: "Lycée Charles de Gaulle à Longperrier(77)",
      subtitle: "Baccalauréat STG option Gestion des Systèmes d'information, mention Assez Bien",
      logo_path: "lycee.png",
      alt_name: "",
      duration: "2006 - 2008",
      descriptions: [
        "⚡ Projet site web réalisé en HTML, CSS, PHP et SQL",
         ],
      website_link: "",
    },
  ],
};



// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Mon projet utilise une grande variété d'outils technologiques de pointe.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez Moi",
    profile_image_path: "contactMail.png",
    description:
      "Par E-mail ou par téléphone, je serai ravi de discuter avec vous de vos projets.",
  },

  addressSection: {
    title: "Adresse",
    subtitle: "Agde, Occitanie, 34300",
    locality: "Agde",
    country: "France",
    region: "Occitanie",
    postalCode: "34300",
    streetAddress: "Rue de l'égalité",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Numéro de téléphone",
    subtitle: "0635305830",
  },
  mailSection: {
    title: "Adresse E-Mail",
    subtitle: "tommycostamagno@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  projectsHeader,
  contactPageData,
};
