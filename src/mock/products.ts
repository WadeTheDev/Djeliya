/** @format */

import type {Product} from "@/domain/product";

export const productsMock: Product[] = [
  {
    id: "thieb-poulet",
    slug: "thieb-au-poulet",
    isNew: true,
    name: "Thiéb au poulet",
    rating: {value: 4.6, count: 128},
    quote:
      "Un plat emblématique aux saveurs authentiques d’Afrique de l’Ouest.",
    description:
      "Plongez dans les saveurs profondes du Sénégal avec notre thieb, le plat national emblématique. À base de brisure de riz parfumé longuement mijoté dans une sauce tomate, ce mets est accompagné de poulet mariné, et de légumes fondants. Chaque bouchée vous transporte au cœur de l’Afrique de l’Ouest, entre générosité, chaleur et authenticité.",
    shortDescription:
      "En raison d’une erreur d’inscription sur le packaging où il est inscrit « Thieboudienne au poulet » au lieu de « Thieb au poulet », une réduction de 10% vous est accordée avec le code promo THIEB (offre non cumulable).",
    price: 9.9,
    images: {
      packaging: {
        src: "/img/Product1.png",
        alt: "Packaging Thiéb au poulet",
      },
      dishes: [
        {
          src: "/img/dish-1.png",
          alt: "Thiéb au poulet",
        },
        {
          src: "/img/dish-2.png",
          alt: "Thiéb au poulet détail",
        },
      ],
    },
    details: {
      preparation: [
        "Au bain-marie : 10 à 12 minutes.",
        "Au micro-ondes : 3 à 4 minutes à 800W.",
        "À la casserole : feu doux jusqu’à température souhaitée.",
      ],
      ingredients: [
        "Poulet (15%)",
        "riz parfumé",
        "choux",
        "tomates",
        "oignons",
        "épices",
      ],
      allergens:
        "Peut contenir des traces de fruits à coque, arachides, crustacés.",
      nutritionalValues: {
        energy: "180 kcal",
        fat: "7 g",
        saturatedFat: "1 g",
        carbs: "16 g",
        sugar: "4 g",
        protein: "8 g",
        salt: "1 g",
      },
      weight: "500 g",
      conservation: [
        "À conserver au sec et à température ambiante.",
        "Après ouverture, 24h au réfrigérateur.",
      ],
    },
  },

  {
    id: "mafe-boeuf",
    slug: "mafe-au-boeuf",
    isNew: false,
    name: "Mafé au bœuf",
    rating: {value: 4.8, count: 94},
    quote: "La douceur de l’arachide, la puissance du bœuf.",
    description:
      "Mafé au Bœuf accompagné de Riz : Découvrez la richesse du Mafé, un classique de la cuisine ouest-africaine. Ce plat réconfortant associe de tendres morceaux de bœuf mijotés dans une onctueuse sauce à base de pâte d’arachide, subtilement relevée d’épices et de tomates. Servi avec du riz blanc parfumé, le mafé au bœuf séduit par sa douceur, sa profondeur de goût et sa capacité à rassembler autour de la table.",
    shortDescription:
      "Bœuf fondant et sauce arachide onctueuse, un classique ouest-africain refaçonné pour un goût authentique et accessible à tous.",
    price: 10.9,
    images: {
      packaging: {
        src: "/img/Product2.png",
        alt: "Packaging Mafé au bœuf",
      },
      dishes: [
        {
          src: "/img/dish-1.png",
          alt: "Thiéb au poulet",
        },
        {
          src: "/img/dish-2.png",
          alt: "Thiéb au poulet détail",
        },
      ],
    },
    details: {
      preparation: ["Réchauffer à feu doux ou au micro-ondes."],
      ingredients: ["Bœuf", "arachide", "tomates", "oignons", "patates douces"],
      allergens: "Contient de l’arachide.",
      nutritionalValues: {
        energy: "210 kcal",
        fat: "10 g",
        saturatedFat: "2 g",
        carbs: "14 g",
        sugar: "5 g",
        protein: "12 g",
        salt: "1.2 g",
      },
      weight: "500 g",
      conservation: [
        "À conserver au sec.",
        "24h au réfrigérateur après ouverture.",
      ],
    },
  },

  {
    id: "foutou-graine",
    slug: "foutou-sauce-graine",
    isNew: false,
    name: "Foutou sauce graine",
    rating: {value: 4.5, count: 76},
    quote:
      "La douceur du foutou, la richesse de la sauce graine, un voyage culinaire en Afrique de l’Ouest.",
    description:
      "Foutou Sauce Graine au Bœuf et Poulet : Un délicieux plat d’Afrique de l’Ouest composé de foutou moelleux, mélange de manioc et de banane plantain, accompagné d’une sauce graine onctueuse enrichie de morceaux de bœuf et de poulet mijotés lentement. Un voyage culinaire savoureux, prêt en quelques minutes.",
    shortDescription:
      "Un délicieux plat d’Afrique de l’Ouest composé de foutou moelleux, mélange de manioc et de banane plantain, accompagné d’une sauce graine onctueuse enrichie de morceaux de bœuf et de poulet mijotés lentement.",
    price: 14.99,
    images: {
      packaging: {
        src: "/img/Product3.png",
        alt: "Packaging Yassa au poulet",
      },
      dishes: [
        {
          src: "/img/dish-1.png",
          alt: "Thiéb au poulet",
        },
        {
          src: "/img/dish-2.png",
          alt: "Thiéb au poulet détail",
        },
      ],
    },
    details: {
      preparation: ["Réchauffer doucement sans porter à ébullition."],
      ingredients: ["Poulet", "oignons", "citron", "moutarde", "épices"],
      allergens: "Peut contenir des traces de moutarde.",
      nutritionalValues: {
        energy: "170 kcal",
        fat: "6 g",
        saturatedFat: "1 g",
        carbs: "15 g",
        sugar: "3 g",
        protein: "9 g",
        salt: "0.9 g",
      },
      weight: "500 g",
      conservation: ["À conserver au frais après ouverture."],
    },
  },

  {
    id: "poulet-yassa",
    slug: "poulet-yassa",
    isNew: false,
    name: "Poulet Yassa – Riz",
    rating: {value: 4.3, count: 52},
    quote: "un poulet yassa généreux pour découvrir les saveurs du Sénégal.",
    description:
      "Plongez dans l’authenticité de la cuisine africaine avec notre Poulet Yassa au Riz, un plat emblématique aux saveurs intenses et équilibrées. Préparé avec des ingrédients soigneusement sélectionnés, ce délicieux plat marie la tendreté du poulet à une sauce onctueuse aux oignons et au citron, le tout accompagné de riz parfumé.",
    shortDescription:
      "plongée dans les saveurs du Sénégal avec notre Poulet Yassa au Riz, un plat emblématique aux saveurs intenses et équilibrées.",
    price: 8.9,
    images: {
      packaging: {
        src: "/img/Product4.png",
        alt: "Packaging Thiéb végétarien",
      },
      dishes: [
        {
          src: "/img/dish-1.png",
          alt: "Thiéb au poulet",
        },
        {
          src: "/img/dish-2.png",
          alt: "Thiéb au poulet détail",
        },
      ],
    },
    details: {
      preparation: ["Réchauffer au micro-ondes ou à la casserole."],
      ingredients: ["Riz", "carottes", "choux", "tomates", "épices"],
      allergens: "Peut contenir des traces de fruits à coque.",
      nutritionalValues: {
        energy: "160 kcal",
        fat: "4 g",
        saturatedFat: "0.5 g",
        carbs: "22 g",
        sugar: "5 g",
        protein: "4 g",
        salt: "0.8 g",
      },
      weight: "500 g",
      conservation: ["À conserver au sec avant ouverture."],
    },
  },

  {
    id: "box-abidjanaise",
    slug: "box-abidjanaise",
    isNew: false,
    name: "Box L’Abidjanaise: Foutou – Mafé – Attiéké",
    rating: {value: 4.7, count: 61},
    quote:
      "un mixte de saveurs d’Abidjan pour une expérience culinaire complète.",
    description:
      "Une box gourmande qui vous transporte au cœur d’Abidjan avec un mélange de saveurs authentiques. Découvrez le foutou, une purée de banane plantain onctueuse, accompagnée d’un mafé au bœuf riche en goût et d’un attiéké léger et parfumé. Chaque bouchée est une invitation à un voyage culinaire inoubliable à travers les rues animées d’Abidjan.",
    shortDescription:
      "En cinq minutes de préparation, plongez dans les saveurs d’Abidjan avec notre box gourmande.",
    price: 11.5,
    images: {
      packaging: {
        src: "/img/Product5.png",
        alt: "Packaging Poulet DG",
      },
      dishes: [
        {
          src: "/img/dish-1.png",
          alt: "Thiéb au poulet",
        },
        {
          src: "/img/dish-2.png",
          alt: "Thiéb au poulet détail",
        },
      ],
    },
    details: {
      preparation: ["Réchauffer à feu moyen en remuant."],
      ingredients: ["Poulet", "banane plantain", "poivrons", "oignons"],
      allergens: "Aucun allergène majeur.",
      nutritionalValues: {
        energy: "230 kcal",
        fat: "9 g",
        saturatedFat: "2 g",
        carbs: "20 g",
        sugar: "6 g",
        protein: "14 g",
        salt: "1.1 g",
      },
      weight: "500 g",
      conservation: ["À conserver au réfrigérateur après ouverture."],
    },
  },
];
