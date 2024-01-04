export const PRODUCT_CATEGORIES = [
  {
    label: 'Plants',
    value: 'plants' as const,
    featured: [
      {
        name: 'Favorites',
        href: `/products?category=plants`,
        imageSrc: '/nav/plants/favorite.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=plants&sort=desc',
        imageSrc: '/nav/plants/new.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=plants',
        imageSrc: '/nav/plants/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Gardening Tools',
    value: 'tools' as const,
    featured: [
      {
        name: 'Beginner Friendly Tools',
        href: `/products?category=tools`,
        imageSrc: '/nav/tools/beginner.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=tools&sort=desc',
        imageSrc: '/nav/tools/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=tools',
        imageSrc: '/nav/tools/bestsellers.jpg',
      },
    ],
  },
]
