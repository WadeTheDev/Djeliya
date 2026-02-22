/** @format */

export interface Product {
  id: string;
  name: string;
  slug: string;
  isNew?: boolean;
  rating: {
    value: number;
    count: number;
  };
  quote: string;
  description: string;
  shortDescription: string;
  price: number;

  images: {
    packaging: {
      src: string;
      alt: string;
    };
    dishes: Array<{
      src: string;
      alt: string;
    }>;
  };

  details: {
    preparation: string[];
    ingredients: string[];
    allergens: string;
    nutritionalValues: {
      energy: string;
      fat: string;
      saturatedFat: string;
      carbs: string;
      sugar: string;
      protein: string;
      salt: string;
    };
    weight: string;
    conservation: string[];
  };
}
