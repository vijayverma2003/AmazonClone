// Properties
// label - String
// title - String
// listPrice if any discount is available - Number
// Price - Number
// images : { mainphotoUrl: "String of URL type", gallery: {imagesUrls}
// Category of what type they are...
// Stock - How much product quantity they have...
// Desciption Points
// Cart: {inCart: Boolean, quantityInCart: Number}
// savedForLater - Boolean
// inWishList

const products = [
  {
    _id: "1",
    label: "Microsoft Surface Pro 7",
    title: `Microsoft Surface Pro 7 – 12.3" Touch-Screen - 10th Gen Intel Core i5 - 8GB Memory - 128GB SSD (Latest Model) – Platinum (VDV-00001)`,
    price: 684.14,
    listPrice: 999.89,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71kBlSKi3eL._AC_SX679_.jpghttps://images-na.ssl-images-amazon.com/images/I/71kBlSKi3eL._AC_SX679_.jpg",
    category: { _id: "c1", name: "Computers" },
    stock: 6,
    quantityInCart: 1,
    description: [
      `Next-gen, best-in-class laptop with the versatility of a studio and tablet, so you can type, touch, draw, write, work, and play more naturally`,
      `Faster than Surface Pro 6, with a 10th Gen Intel Core Processor – redefining what’s possible in a thin and light computer. Wireless : Wi-Fi 6: 802.11ax compatible. Bluetooth Wireless 5.0 technology`,
      `More ways to connect, with both USB-C and USB-A ports for connecting to displays, docking stations and more, as well as accessory charging`,
      `Standout design that won’t weigh you down — ultra-slim and light Surface Pro 7 starts at just 1.70 pounds.Aspect ratio: 3:2`,
      `All-day battery life upto 10.5 hours, plus the ability to go from empty to full faster — about 80% in just over an hour`,
    ],
    tags: ["microsoft", "Surface 4 pro", "surface", "laptops"],
  },
  {
    _id: "2",
    label: "Portable Neck Fan",
    title:
      "JISULIFE Portable Neck Fan, Hands Free Bladeless Fan, 4000 mAh Battery Operated Wearable Personal Fan, Leafless, Rechargeable, Headphone Design, USB Powered Desk Fan,3 Speeds-Dark Green",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51F6ZJ3ymRL._AC_SX679_.jpg",
    price: 23.99,
    listPrice: 45.99,
    stock: 20,
    category: { _id: "c1", name: "Computers" },
    description: [],
    quantityInCart: 1,
  },
  {
    _id: "3",
    label: "Creative Pebble Speakers",
    title:
      "Creative Pebble 2.0 USB-Powered Desktop Speakers with Far-Field Drivers and Passive Radiators for Pcs and Laptops (Black)",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51MGXkzK1iL._AC_SX679_.jpg",
    price: 19.99,
    listPrice: "24.99",
    stock: 0,
    description: [],
    quantity: 0,
    category: { _id: "c1", name: "Computers" },
  },

  {
    _id: "4",
    label: "LEGO Star Wars B-Wing Starfighter",
    price: "686.99",
    category: { _id: "c2", name: "Baby" },
  },
  {
    _id: "5",
    label: "VTech Pull and Sing Puppy",
    price: "11.72",
    category: { _id: "c2", name: "Baby" },
  },
  {
    _id: "6",
    label: "Regalo Swing Down 54-Inch Extra Long Bed Rail Guardy",
    price: "34.99",
    category: { _id: "c2", name: "Baby" },
  },
  {
    _id: "7",
    label: "Xiaomi Mi Band 5 Smart Wristband",
    price: "30.85",
    category: { _id: "c3", name: "Fitness" },
  },
  {
    _id: "8",
    label: "Yoga Mat",
    price: "25.38",
    category: { _id: "c3", name: "Fitness" },
  },
  {
    _id: "9",
    label: "BlenderBottle Shaker Bottle Pro",
    price: "8.99",
    category: { _id: "c3", name: "Fitness" },
  },
  {
    _id: "10",
    label: "JOCHYA Makeup Remover Cloth",
    price: "18.50",
    category: { _id: "c4", name: "Beauty" },
  },
  {
    _id: "11",
    label: "NITION Ceramic Hair Dryer",
    price: "39.99",
    category: { _id: "c4", name: "Beauty" },
  },
  {
    _id: "12",
    label: "Dove Body Wash",
    price: "8.94",
    category: { _id: "c4", name: "Beauty" },
  },
  {
    _id: "13",
    label: "Nintendo Switch",
    price: "369.99",
    category: { _id: "c5", name: "V_ideo Games" },
  },
  {
    _id: 14,
    label: "Pokémon Sword - Nintendo Switch",
    price: "59.99",
    category: { _id: "c5", name: "V_ideo Games" },
  },
  {
    _id: 15,
    label: "Nintendo Pokemon: Let's Go, Pikachu!",
    price: "60.75",
    category: { _id: "c5", name: "V_ideo Games" },
  },
  {
    _id: 16,
    label: "Plush Elephant",
    price: "9.99",
    category: { _id: "c6", name: "Toys and Games" },
  },
  {
    _id: 17,
    label: "Disney Princess Fashion Doll Castle",
    price: "94.31",
    category: { _id: "c6", name: "Toys and Games" },
  },
  {
    _id: 18,
    label: "Pokémon Assorted Cards",
    price: "9.25",
    category: { _id: "c6", name: "Toys and Games" },
  },
  {
    _id: 19,
    label: "K_ids Ultra-Soft Micromink Sherpa Blanket",
    price: "22.99",
    category: { _id: "c7", name: "AmazonBasics" },
  },
  {
    _id: 20,
    label: "Fuzzy Faux Fur Sherpa Throw Blanket",
    price: "11.08",
    category: { _id: "c7", name: "AmazonBasics" },
  },
  {
    _id: 21,
    label: "6 Pack 24x48 inch Bath Towel",
    price: "29.49",
    category: { _id: "c7", name: "AmazonBasics" },
  },
  {
    _id: "22",
    label: "TCL 85-inch Class 4-Series 4K UHD HDR Smart Roku TV",
    title:
      "TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model",
    imageUrl: "https://m.media-amazon.com/images/I/718Av6jK4TS._AC_SX679_.jpg",
    price: "1599.99",
    listPrice: "2689.89",
    description: [],
    category: { _id: "c8", name: "TV" },
    stock: {
      inStock: true,
      stock: 2,
    },
  },
];

export function Products() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p._id === id);
}
