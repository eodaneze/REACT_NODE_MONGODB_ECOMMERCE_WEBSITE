import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "daniel",
      email: "admin@example.com",
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
      price: 500,
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
      price: 500,
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
      price: 500,
      countInStock: 6,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description:
        "This is the hottest-selling Hot Wheels sneaker this year, fashionable and trendy, with a confident accent. The classic round toe cap has a good performance in waterproof and anti-collision, bringing you comfort and safety, every step is enjoyment. The upper is made of high-quality mesh fabric with a very good texture. The lining of the shoes is made of breathable lining, which has good abrasion resistance and good breathability, and is comfortable and dry to wear. The rubber sole is soft and fashionable, stable and non-slip. The heel of the shoe is made of a special material, which presents a beautiful blue from different angles.",
    },
  ],
};

export default data;
