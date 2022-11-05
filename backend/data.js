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
      name: "Mens Sneakers White",
      slug: "mens-Sneakers-white",
      category: "Shoes",
      image: "/images/sheo.jpg",
      price: 700,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description:
        "This is the hottest-selling Hot Wheels sneaker this year, fashionable and trendy, with a confident accent. The classic round toe cap has a good performance in waterproof and anti-collision, bringing you comfort and safety, every step is enjoyment. The upper is made of high-quality mesh fabric with a very good texture. ",
    },

    {
      name: "2022 Mens Running Sneakers",
      slug: "mens-shoe",
      category: "Shoes",
      image: "/images/shoe-3.jpg",
      price: 500,
      countInStock: 6,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description:
        "This is the hottest-selling Hot Wheels sneaker this year, fashionable and trendy, with a confident accent. The classic round toe cap has a good performance in waterproof and anti-collision, bringing you comfort and safety, every step is enjoyment. The upper is made of high-quality mesh fabric with a very good texture. The lining of the shoes is made of breathable lining, which has good abrasion resistance and good breathability, and is comfortable and dry to wear. The rubber sole is soft and fashionable, stable and non-slip. The heel of the shoe is made of a special material, which presents a beautiful blue from different angles.",
    },
    {
      name: "2022 Mens Casual Trend Shoes",
      slug: "casual-shoe",
      category: "Shoes",
      image: "/images/shoe-4.jpg",
      price: 300,
      countInStock: 6,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description:
        "This is the hottest-selling Hot Wheels sneaker this year, fashionable and trendy, with a confident accent. The classic round toe cap has a good performance in waterproof and anti-collision, bringing you comfort and safety, every step is enjoyment. The upper is made of high-quality mesh fabric with a very good texture. The lining of the shoes is made of breathable lining, which has good abrasion resistance and good breathability, and is comfortable and dry to wear. The rubber sole is soft and fashionable, stable and non-slip. The heel of the shoe is made of a special material, which presents a beautiful blue from different angles.",
    },
    {
      name: "2022 Mens Casual Trend Shoes black",
      slug: "casual-shoe-sneakers",
      category: "Shoes",
      image: "/images/shoe-2.jpg",
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
  ],
};

export default data;
