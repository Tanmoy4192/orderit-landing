// src/data/restaurants.ts
export const RESTAURANTS = [
  {
    id: "citrus-co",
    name: "Citrus & Co.",
    cuisine: "Californian",
    lat: 37.7597,
    lng: -122.4270,
    address: "123 Market St, San Francisco, CA",
    rating: 4.8,
    img: "/citrus.jpg",
    menu: [
      { name: "Citrus Farmer's Salad", price: 14, desc: "Blood orange, fennel, avocado" },
      { name: "Grilled Sea Bass", price: 26, desc: "Herb butter, seasonal greens" },
      { name: "Meyer Lemon Tart", price: 9, desc: "Toasted meringue" },
    ],
  },
  {
    id: "umami-house",
    name: "Umami House",
    cuisine: "Japanese",
    lat: 37.7715,
    lng: -122.4371,
    address: "234 Castro St, San Francisco, CA",
    rating: 4.7,
    img: "/umami.jpg",
    menu: [],
  },
  {
    id: "pasta-nostra",
    name: "Pasta Nostra",
    cuisine: "Italian",
    lat: 37.7689,
    lng: -122.4453,
    address: "456 Noe St, San Francisco, CA",
    rating: 4.6,
    img: "/pasta.jpg",
    menu: [],
  },
  // add more restaurants here...
];
