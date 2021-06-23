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
    quantityInCart: 0,
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
    savedForLater: false,
    inWishList: false,
    quantityInCart: 0,
    tags: [
      "new",
      "apple",
      "watch",
      "series",
      "6",
      "(gps,",
      "44mm)",
      "-",
      "(product)",
      "red",
      "-",
      "aluminum",
      "case",
      "with",
      "(product)",
      "red\ufeff",
      "-",
      "sport",
      "band",
      "gps",
      "model",
      "lets",
      "you",
      "take",
      "calls",
      "and",
      "reply",
      "to",
      "texts",
      "from",
      "your",
      "wrist",
      "measure",
      "your",
      "blood",
      "oxygen",
      "with",
      "an",
      "all-new",
      "sensor",
      "and",
      "app",
      "check",
      "your",
      "heart",
      "rhythm",
      "with",
      "the",
      "ecg",
      "app",
      "the",
      "always-on",
      "retina",
      "display",
      "is",
      "2.5x",
      "brighter",
      "outdoors",
      "when",
      "your",
      "wrist",
      "is",
      "down",
      "s6",
      "sip",
      "is",
      "up",
      "to",
      "20%",
      "faster",
      "than",
      "series",
      "5",
      "5ghz",
      "wi-fi",
      "and",
      "u1",
      "ultra",
      "wideband",
      "chip",
      "track",
      "your",
      "daily",
      "activity",
      "on",
      "apple",
      "watch",
      "and",
      "see",
      "your",
      "trends",
      "in",
      "the",
      "fitness",
      "app",
      "on",
      "iphone",
    ],
    _id: "60d29b2b8027ee059dfa7dbb",
    by: "Apple Store",
    category: {
      _id: "60bca29d41d8b10c8360fac2",
      name: "Computers",
    },
    description:
      "GPS model lets you take calls and reply to texts from your wrist Measure your blood oxygen with an all-new sensor and app Check your heart rhythm with the ECG app The Always-On Retina display is 2.5x brighter outdoors when your wrist is down S6 SiP is up to 20% faster than Series 5 5GHz Wi-Fi and U1 Ultra Wideband chip Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81LS-PwwQPL._AC_SX679_.jpg",
    label: "New Apple Watch Series 6",
    price: 499.99,
    stock: 30,
    title:
      "New Apple Watch Series 6 (GPS, 44mm) - (Product) RED - Aluminum Case with (Product) RED\ufeff - Sport Band",
    __v: 0,
  },
];

export function Products() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p._id === id);
}
