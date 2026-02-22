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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.      ",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 9.9,
    images: {
      packaging: {
        src: "/img/ProductImage.png",
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
      "Un ragoût onctueux à base de pâte d’arachide, de bœuf fondant et de légumes mijotés lentement.",
    shortDescription: "Bœuf fondant et sauce arachide onctueuse.",
    price: 10.9,
    images: {
      packaging: {
        src: "/images/products/mafe-boeuf/packaging.jpg",
        alt: "Packaging Mafé au bœuf",
      },
      dishes: [
        {src: "/images/products/mafe-boeuf/dish-1.jpg", alt: "Mafé au bœuf"},
        {
          src: "/images/products/mafe-boeuf/dish-2.jpg",
          alt: "Mafé au bœuf détail",
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
    id: "yassa-poulet",
    slug: "yassa-au-poulet",
    isNew: false,
    name: "Yassa au poulet",
    rating: {value: 4.5, count: 76},
    quote: "L’acidité parfaite, entre citron et oignons confits.",
    description:
      "Poulet mariné au citron et aux oignons, mijoté lentement pour une explosion de saveurs.",
    shortDescription: "Poulet citronné et oignons fondants.",
    price: 9.5,
    images: {
      packaging: {
        src: "/images/products/yassa-poulet/packaging.jpg",
        alt: "Packaging Yassa au poulet",
      },
      dishes: [
        {
          src: "/images/products/yassa-poulet/dish-1.jpg",
          alt: "Yassa au poulet",
        },
        {
          src: "/images/products/yassa-poulet/dish-2.jpg",
          alt: "Yassa au poulet détail",
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
    id: "thieb-veggie",
    slug: "thieb-vegetarien",
    isNew: false,
    name: "Thiéb végétarien",
    rating: {value: 4.3, count: 52},
    quote: "Toute la richesse du thiéb, version végétale.",
    description:
      "Un thiéb généreux composé uniquement de légumes et de riz parfumé.",
    shortDescription: "Riz parfumé et légumes mijotés.",
    price: 8.9,
    images: {
      packaging: {
        src: "/images/products/thieb-veggie/packaging.jpg",
        alt: "Packaging Thiéb végétarien",
      },
      dishes: [
        {
          src: "/images/products/thieb-veggie/dish-1.jpg",
          alt: "Thiéb végétarien",
        },
        {
          src: "/images/products/thieb-veggie/dish-2.jpg",
          alt: "Thiéb végétarien détail",
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
    id: "poulet-dg",
    slug: "poulet-dg",
    isNew: false,
    name: "Poulet DG",
    rating: {value: 4.7, count: 61},
    quote: "Entre tradition et street food africaine.",
    description:
      "Poulet sauté accompagné de bananes plantain et de légumes croquants.",
    shortDescription: "Poulet sauté et plantain doré.",
    price: 11.5,
    images: {
      packaging: {
        src: "/images/products/poulet-dg/packaging.jpg",
        alt: "Packaging Poulet DG",
      },
      dishes: [
        {src: "/images/products/poulet-dg/dish-1.jpg", alt: "Poulet DG"},
        {src: "/images/products/poulet-dg/dish-2.jpg", alt: "Poulet DG détail"},
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
