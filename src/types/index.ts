// Type definitions for Gazza's Tarantulas

export interface Product {
  id: string;
  binomialName: string;
  commonName: string;
  price: number;
  images: string[];
  description: string;
  careLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}