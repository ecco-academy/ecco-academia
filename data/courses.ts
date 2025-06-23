import { Course, Module } from "@/modules/course/types/Course";

const modules: Module[] = [
  {
    _id: "mod-1",
    title: "Introducción al Masaje Terapéutico",
    description: "Explora los fundamentos y beneficios del masaje terapéutico.",
    number: "1",
    courseId: "1",
    lessons: [
      {
        _id: "lesson-1",
        title: "¿Qué es el masaje terapéutico?",
        description: "Definición, objetivos y usos del masaje como terapia.",
        duration: "10:00",
        videoUrl: "https://videos.academiademasaje.com/que-es",
        courseId: "1",
        moduleId: "mod-1",
        number: "1"
      },
      {
        _id: "lesson-2",
        title: "Historia del masaje",
        description: "Desde culturas antiguas hasta prácticas modernas.",
        duration: "12:20",
        videoUrl: "https://videos.academiademasaje.com/historia",
        courseId: "1",
        moduleId: "mod-1",
        number: "2"
      },
      {
        _id: "lesson-3",
        title: "Beneficios físicos y emocionales",
        description: "Impacto del masaje sobre cuerpo y mente.",
        duration: "11:15",
        videoUrl: "https://videos.academiademasaje.com/beneficios",
        courseId: "1",
        moduleId: "mod-1",
        number: "3"
      },
      {
        _id: "lesson-4",
        title: "Contraindicaciones",
        description: "Cuándo no se recomienda aplicar masaje.",
        duration: "09:50",
        videoUrl: "https://videos.academiademasaje.com/contraindicaciones",
        courseId: "1",
        moduleId: "mod-1",
        number: "4"
      }
    ]
  },
  {
    _id: "mod-2",
    title: "Anatomía Básica para Masajistas",
    description: "Conocimientos anatómicos esenciales para el trabajo del masajista.",
    number: "2",
    courseId: "1",
    lessons: [
      {
        _id: "lesson-5",
        title: "Sistema muscular",
        description: "Identificación de músculos clave en el masaje.",
        duration: "13:10",
        videoUrl: "https://videos.academiademasaje.com/muscular",
        courseId: "1",
        moduleId: "mod-2",
        number: "1"
      },
      {
        _id: "lesson-6",
        title: "Sistema óseo",
        description: "Huesos principales y su relación con el masaje.",
        duration: "12:00",
        videoUrl: "https://videos.academiademasaje.com/oseo",
        courseId: "1",
        moduleId: "mod-2",
        number: "2"
      },
      {
        _id: "lesson-7",
        title: "Sistema circulatorio y linfático",
        description: "Cómo afecta el masaje a la circulación sanguínea y linfática.",
        duration: "14:05",
        videoUrl: "https://videos.academiademasaje.com/circulatorio",
        courseId: "1",
        moduleId: "mod-2",
        number: "3"
      },
      {
        _id: "lesson-8",
        title: "Términos anatómicos clave",
        description: "Lenguaje técnico necesario para el profesional del masaje.",
        duration: "08:30",
        videoUrl: "https://videos.academiademasaje.com/terminologia",
        courseId: "1",
        moduleId: "mod-2",
        number: "4"
      }
    ]
  },
  {
    _id: "mod-3",
    title: "Técnicas Básicas de Masaje",
    description: "Aprende y aplica maniobras esenciales en la práctica del masaje.",
    number: "3",
    courseId: "1",
    lessons: [
      {
        _id: "lesson-9",
        title: "Effleurage (deslizamientos)",
        description: "Técnica de deslizamiento superficial para iniciar o finalizar.",
        duration: "09:40",
        videoUrl: "https://videos.academiademasaje.com/effleurage",
        courseId: "1",
        moduleId: "mod-3",
        number: "1"
      },
      {
        _id: "lesson-10",
        title: "Petrissage (amasamiento)",
        description: "Manipulación profunda de los músculos para aliviar tensión.",
        duration: "10:20",
        videoUrl: "https://videos.academiademasaje.com/petrissage",
        courseId: "1",
        moduleId: "mod-3",
        number: "2"
      },
      {
        _id: "lesson-11",
        title: "Tapotement (golpeteo)",
        description: "Percusión rítmica para estimular tejidos musculares.",
        duration: "08:30",
        videoUrl: "https://videos.academiademasaje.com/tapotement",
        courseId: "1",
        moduleId: "mod-3",
        number: "3"
      },
      {
        _id: "lesson-12",
        title: "Fricciones y vibraciones",
        description: "Técnicas para liberar adherencias y promover relajación.",
        duration: "09:15",
        videoUrl: "https://videos.academiademasaje.com/fricciones",
        courseId: "1",
        moduleId: "mod-3",
        number: "4"
      }
    ]
  }
];

export const course: Course = {
  duration: "1h 30m",
  _id: "123",
  imageUrl: "/courseMassage.png",
  title: "Método MADEM, Mapa de masaje",
  description:
    "Desarrolla tu potencial como masoterapeuta y domina el arte y el negocio del masaje (una guía paso a paso de cero a experto.) Aprende a realizar un masaje completo de cuerpo entero, con técnicas avanzadas y consejos prácticos.",

  slug: "metodo-madem-mapa-de-masaje",
  price: 199.99,
  instructor: {
    name: "Maga Abuin",
    avatarUrl: "/profile.png",
    bio: "Experta en masoterapia",
    _id: "123",
    description: "Con más de 8 años de experiencia en el campo del masaje terapéutico, he ayudado a cientos de personas a mejorar su bienestar físico y emocional.",
  },
  level: 'advanced',
  lessonsCount: 25,
  modules: modules
};


