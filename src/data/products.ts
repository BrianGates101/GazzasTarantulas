import { Product } from '../types';

// Mock product data for the website
export const products: Product[] = [
  {
    id: '1',
    binomialName: 'Brachypelma hamorii',
    commonName: 'Mexican Red Knee',
    price: 1200,
    images: [
      'https://images.pexels.com/photos/8711909/pexels-photo-8711909.jpeg',
    ],
    description: 'A beautiful terrestrial species with striking red and orange markings on the knees. Known for their docile temperament and longevity.',
    careLevel: 'Beginner',
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: [
      {
        id: '101',
        author: 'John D.',
        rating: 5,
        comment: 'Beautiful tarantula, arrived in perfect condition!',
        date: '2025-03-15'
      },
      {
        id: '102',
        author: 'Sarah M.',
        rating: 4,
        comment: 'Lovely specimen, but slightly smaller than expected.',
        date: '2025-02-28'
      }
    ]
  },
  {
    id: '2',
    binomialName: 'Grammostola pulchra',
    commonName: 'Brazilian Black',
    price: 2500,
    images: [
      'https://images.pexels.com/photos/8128227/pexels-photo-8128227.jpeg',
    ],
    description: 'A jet-black terrestrial species with a velvety appearance. Known for their calm temperament and long lifespan.',
    careLevel: 'Beginner',
    inStock: true,
    featured: true,
    rating: 5.0,
    reviews: [
      {
        id: '103',
        author: 'Michael T.',
        rating: 5,
        comment: 'Absolutely stunning specimen, very healthy and active!',
        date: '2025-03-10'
      }
    ]
  },
  {
    id: '3',
    binomialName: 'Caribena versicolor',
    commonName: 'Antilles Pink Toe',
    price: 950,
    images: [
      'https://images.pexels.com/photos/8128576/pexels-photo-8128576.jpeg',
    ],
    description: 'An arboreal species with stunning blue and pink coloration. Juveniles display vibrant blue bodies with pink highlights.',
    careLevel: 'Intermediate',
    inStock: true,
    featured: true,
    rating: 4.5,
    reviews: []
  },
  {
    id: '4',
    binomialName: 'Poecilotheria metallica',
    commonName: 'Gooty Sapphire Ornamental',
    price: 3500,
    images: [
      'https://images.pexels.com/photos/7506390/pexels-photo-7506390.jpeg',
    ],
    description: 'A stunning arboreal species with metallic blue coloration. Fast-moving and requires more experienced handling.',
    careLevel: 'Advanced',
    inStock: false,
    featured: true,
    rating: 4.9,
    reviews: []
  },
  {
    id: '5',
    binomialName: 'Tliltocatl albopilosum',
    commonName: 'Honduran Curly Hair',
    price: 800,
    images: [
      'https://images.pexels.com/photos/8128562/pexels-photo-8128562.jpeg',
    ],
    description: 'A terrestrial species known for its curly hair-like setae. Very docile and suitable for beginners.',
    careLevel: 'Beginner',
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: []
  },
  {
    id: '6',
    binomialName: 'Psalmopoeus irminia',
    commonName: 'Venezuelan Suntiger',
    price: 1100,
    images: [
      'https://images.pexels.com/photos/7541118/pexels-photo-7541118.jpeg',
    ],
    description: 'A striking arboreal species with black and orange striped pattern. Fast-moving and defensive.',
    careLevel: 'Intermediate',
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: []
  },
  {
    id: '7',
    binomialName: 'Acanthoscurria geniculata',
    commonName: 'Brazilian Whiteknee',
    price: 1500,
    images: [
      'https://images.pexels.com/photos/7685159/pexels-photo-7685159.jpeg',
    ],
    description: 'A large terrestrial species with striking black and white pattern. Known for their fast growth rate and hearty appetite.',
    careLevel: 'Intermediate',
    inStock: true,
    featured: false,
    rating: 4.4,
    reviews: []
  },
  {
    id: '8',
    binomialName: 'Chromatopelma cyaneopubescens',
    commonName: 'Green Bottle Blue',
    price: 1800,
    images: [
      'https://images.pexels.com/photos/7541120/pexels-photo-7541120.jpeg',
    ],
    description: 'A colorful species with metallic blue legs and green-blue carapace. Known for their beautiful webbing.',
    careLevel: 'Intermediate',
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: []
  },
  {
    id: '9',
    binomialName: 'Harpactira pulchripes',
    commonName: 'Golden Blue Leg Baboon',
    price: 2800,
    images: [
      'https://images.pexels.com/photos/8090007/pexels-photo-8090007.jpeg',
    ],
    description: 'A stunning South African species with golden carapace and vibrant blue legs. Fast and defensive.',
    careLevel: 'Advanced',
    inStock: true,
    featured: false,
    rating: 4.8,
    reviews: []
  },
  {
    id: '10',
    binomialName: 'Aphonopelma chalcodes',
    commonName: 'Arizona Blonde',
    price: 900,
    images: [
      'https://images.pexels.com/photos/8711910/pexels-photo-8711910.jpeg',
    ],
    description: 'A desert-dwelling species with a blonde/tan coloration. Very docile and drought-tolerant.',
    careLevel: 'Beginner',
    inStock: true,
    featured: false,
    rating: 4.3,
    reviews: []
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const filterProducts = (
  searchTerm: string = '',
  careLevel?: 'Beginner' | 'Intermediate' | 'Advanced',
  minPrice?: number,
  maxPrice?: number,
  inStockOnly: boolean = false
): Product[] => {
  return products.filter(product => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      product.binomialName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.commonName.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by care level
    const matchesCareLevel = !careLevel || product.careLevel === careLevel;

    // Filter by price
    const matchesMinPrice = !minPrice || product.price >= minPrice;
    const matchesMaxPrice = !maxPrice || product.price <= maxPrice;

    // Filter by stock
    const matchesStock = !inStockOnly || product.inStock;

    return matchesSearch && matchesCareLevel && matchesMinPrice && matchesMaxPrice && matchesStock;
  });
};