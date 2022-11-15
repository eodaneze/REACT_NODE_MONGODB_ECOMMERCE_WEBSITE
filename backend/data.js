import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "daniel",
      email: "ezealiokechukwu1999@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      
    },
  ],
  products: [
    {
      name: "Havit-Headphone",
      slug: "Havit H633BT Wireless Headphone",
      category: "headphone",
      image: "/images/headphones_a_1.webp",
      price: 700,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description:
        "Brand - Havit, Model - Havit H633BT, Type - Regular Headphone, Connectivity - Bluetooth, Frequency Response (Hz - kHz) - 20Hz-20kHz, Sensitivity (dB) - 110dB, Impedance (ohm) - 32ohm, Microphone - Yes, Bluetooth Range - 10 Meters, Bluetooth Version - Bluetooth 5.0, Waterproof - Yes, Waterproof Grade - IPX5, Battery - 200mAh, Rechargeable Battery - Yes, Charging Time - 3 Hours, Playing Time - Up to 4 Hours, Plug Type - 3.5mm (Single port), ",
    },

    {
      name: "PRODUCTJbl 951BT WIRELESS HEADPHONES",
      slug: "951BT-WIRELESS-HEADPHONES",
      category: "headphone",
      image: "/images/headphones_a_2.webp",
      price: 500,
      countInStock: 6,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 8,
      description:
        "The JBL 951BT delivers quality, powerful sound to spark up your day. Equipped with JBL Pure Bass sound, 32mm JBL drivers, and a one-button universal remote that is compatible with most smartphones, these headphones provide quick access to great sound every time. Lightweight and comfortable thanks to the soft ear cushions and padded headband, the JBL 951BT headphones also allow you to connect to Siri or Google Now without using your mobile device. It features a tangle-free flat cable and foldable for easy portability, the JBL 951BT headphones are a plug ‘n go solution that enable you to inject music into every aspect of your busy life.",
    },
    {
      name: "Zealot Wireless Headphone",
      slug: "Zealot-headphone",
      category: "headphone",
      image: "/images/headphones_a_4.webp",
      price: 300,
      countInStock: 6,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description:
        "This is the hottest-selling Hot Wheels sneaker this year, fashionable and trendy, with a confident accent. The classic round toe cap has a good performance in waterproof and anti-collision, bringing you comfort and safety, every step is enjoyment. The upper is made of high-quality mesh fabric with a very good texture. The lining of the shoes is made of breathable lining, which has good abrasion resistance and good breathability, and is comfortable and dry to wear. The rubber sole is soft and fashionable, stable and non-slip. The heel of the shoe is made of a special material, which presents a beautiful blue from different angles.",
    },
    {
      name: "P7 Wireles Bluetooth",
      slug: "P7-Bluetooth",
      category: "Bluetooth",
      image: "/images/headphones_a_3.webp",
      price: 400,
      countInStock: 6,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description:
        "This is the hottest-selling Hot Wheels sneaker this year, fashionable and trendy, with a confident accent. The classic round toe cap has a good performance in waterproof and anti-collision, bringing you comfort and safety, every step is enjoyment. The upper is made of high-quality mesh fabric with a very good texture. The lining of the shoes is made of breathable lining, which has good abrasion resistance and good breathability, and is comfortable and dry to wear. The rubber sole is soft and fashionable, stable and non-slip. The heel of the shoe is made of a special material, which presents a beautiful blue from different angles.",
    },
    {
      name: "Mens-Chain-Watch",
      slug: "Mens-watch",
      category: "watch",
      image: "/images/watch-1.jpg",
      price: 100,
      countInStock: 6,
      brand: "watch",
      rating: 4.5,
      numReviews: 5,
      description:
        "With symbolic accessories to express. This black calendar waterproof watch is perfect for social and sporty events. The black panel is the design of a classic fashion watch. Its excellent quality design makes it suitable for all occasions. It's made of high quality steel because it's worth it. Buy now and stay fashionable"
    },
    {
      name: "Mens-Gold-Watch",
      slug: "Gold-watch",
      category: "watch",
      image: "/images/watch-2.jpg",
      price: 100,
      countInStock: 6,
      brand: "watch",
      rating: 4.5,
      numReviews: 5,
      description:
        "With symbolic accessories to express. This black calendar waterproof watch is perfect for social and sporty events. The black panel is the design of a classic fashion watch. Its excellent quality design makes it suitable for all occasions. It's made of high quality steel because it's worth it. Buy now and stay fashionable"
    },
  ],
};

export default data;
