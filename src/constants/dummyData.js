const dishes = [
  {
    id: "1",
    name: "Caramel cake with beries",
    compound: "Sells food, either fresh, specie, chili",
    presentationImage: require("../assets/images/dishes/dish-01-01.png"),
    popularDeal: true,
    bestMeal: true,
    recommended: true,
    price: 15.45,
    rating: 4.5,
    image: require("../assets/images/dishes/dish-01-02.png"),
    description:
      "Add the remaining ingredients and toss to coat. Serve. Notes. Note: Kani Salad is best served fresh. Due to the water content from cucumbers",
    weight: "350",
    qty: 1,
  },
  {
    id: "2",
    name: "Cheesecake with chocolate",
    compound: "Sells food, either fresh, specie, chili",
    presentationImage: require("../assets/images/dishes/dish-02-01.png"),
    bestMeal: true,
    popularDeal: true,
    recommended: true,
    price: 40.45,
    rating: 3.3,
    image: require("../assets/images/dishes/dish-02-02.png"),
    description:
      "Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum",
    weight: 350,
    qty: 1,
  },
  {
    id: "3",
    name: "Chocolate cake with cherries",
    compound: "Sells food, either fresh, specie, chili",
    presentationImage: require("../assets/images/dishes/dish-03-01.png"),
    bestMeal: true,
    popularDeal: false,
    recommended: true,
    price: 33.3,
    rating: 5.0,
    image: require("../assets/images/dishes/dish-03-02.png"),
    description:
      "Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum",
    weight: "350",
    qty: 1,
  },
  {
    id: "4",
    name: "Ice-cream with caramel toping",
    compound: "Sells food, either fresh, specie, chili",
    presentationImage: require("../assets/images/dishes/dish-04-01.png"),
    bestMeal: true,
    popularDeal: true,
    recommended: true,
    price: 27.95,
    rating: 4.2,
    presentationImage: require("../assets/images/dishes/dish-04-02.png"),
    description:
      "Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum",
    weight: 350,
    qty: 1,
  },
];

const dummyData = [
  {
    id: "1",
    name: "Filada Family bar",
    tags: [
      {
        id: 1,
        tag: "Burger",
        color: "#7BDFB4",
        backgroundColor: "#FFFAE7",
      },
      {
        id: 2,
        tag: "Pizza",
        color: "#FE2121",
        backgroundColor: "#FFE9E9",
      },
      {
        id: 3,
        tag: "Fast Food",
        color: "#374f71",
        backgroundColor: "#E8F9F1",
      },
    ],
    description:
      "Et quis amet laboris mollit eu nostrud exercitation. Qui ex aute ipsum duis. Incididunt adipisicing adipisicing voluptate laborum tempor dolor deserunt exercitation in officia minim elit. Aute exercitation Lorem consequat fugiat id ut.",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    email: "desertshow@mail.com",
    distance: "0.2 km - $$",
    image: require("../assets/images/restaurants/restaurant-01.png"),
    hotOffer: require("../assets/images/restaurants/restaurant-01-hot-offer.png"),
    backgroundImage: require("../assets/images/restaurants/restaurant-01-background.png"),
    icon: require("../assets/images/restaurants/restaurant-01-icon.png"),
    rating: "4.0",
    numberOfRatings: "20",
    popular: true,
    freeDelivery: true,
    timeOfDelivery: "30-45 Min",
    near: true,
    freeDeliveryFrom: "200",
    distance: "0.2 km",
    type: "Bakery",
    phone: "+1 387 456 88 74",
    dishes,
  },
  {
    id: "2",
    name: "Chiken taste",
    tags: [
      {
        id: 1,
        tag: "Burger",
        color: "#7BDFB4",
        backgroundColor: "#FFFAE7",
      },
      {
        id: 2,
        tag: "Pizza",
        color: "#FE2121",
        backgroundColor: "#FFE9E9",
      },
      {
        id: 3,
        tag: "Fast Food",
        color: "#374f71",
        backgroundColor: "#E8F9F1",
      },
    ],
    description:
      "Et quis amet laboris mollit eu nostrud exercitation. Qui ex aute ipsum duis. Incididunt adipisicing adipisicing voluptate laborum tempor dolor deserunt exercitation in officia minim elit. Aute exercitation Lorem consequat fugiat id ut.",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    email: "desertshow@mail.com",
    distance: "0.2 km - $$",
    image: require("../assets/images/restaurants/restaurant-02.png"),
    hotOffer: require("../assets/images/restaurants/restaurant-02-hot-offer.png"),
    backgroundImage: require("../assets/images/restaurants/restaurant-01-background.png"),
    icon: require("../assets/images/restaurants/restaurant-01-icon.png"),
    rating: "3.5",
    numberOfRatings: "24",
    popular: true,
    freeDelivery: true,
    timeOfDelivery: "20-35 Min",
    near: true,
    freeDeliveryFrom: "300",
    distance: "0.3 km",
    type: "Bakery",
    phone: "+1 387 456 88 74",
    dishes,
  },
  {
    id: "3",
    name: "Rolls & rolls",
    tags: [
      {
        id: 1,
        tag: "Burger",
        color: "#7BDFB4",
        backgroundColor: "#FFFAE7",
      },
      {
        id: 2,
        tag: "Pizza",
        color: "#FE2121",
        backgroundColor: "#FFE9E9",
      },
      {
        id: 3,
        tag: "Fast Food",
        color: "#374f71",
        backgroundColor: "#E8F9F1",
      },
    ],
    description:
      "Et quis amet laboris mollit eu nostrud exercitation. Qui ex aute ipsum duis. Incididunt adipisicing adipisicing voluptate laborum tempor dolor deserunt exercitation in officia minim elit. Aute exercitation Lorem consequat fugiat id ut.",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    email: "desertshow@mail.com",
    distance: "0.2 km - $$",
    image: require("../assets/images/restaurants/restaurant-03.png"),
    hotOffer: require("../assets/images/restaurants/restaurant-03-hot-offer.png"),
    backgroundImage: require("../assets/images/restaurants/restaurant-01-background.png"),
    icon: require("../assets/images/restaurants/restaurant-01-icon.png"),
    rating: "3.0",
    numberOfRatings: "15",
    popular: true,
    freeDelivery: true,
    timeOfDelivery: "25-40 Min",
    near: true,
    freeDeliveryFrom: "400",
    distance: "0.4 km",
    type: "Bakery",
    phone: "+1 387 456 88 74",
    dishes,
  },
  {
    id: "4",
    name: "National rest",
    tags: [
      {
        id: 1,
        tag: "Burger",
        color: "#7BDFB4",
        backgroundColor: "#FFFAE7",
      },
      {
        id: 2,
        tag: "Pizza",
        color: "#FE2121",
        backgroundColor: "#FFE9E9",
      },
      {
        id: 3,
        tag: "Fast Food",
        color: "#374f71",
        backgroundColor: "#E8F9F1",
      },
    ],
    description:
      "Et quis amet laboris mollit eu nostrud exercitation. Qui ex aute ipsum duis. Incididunt adipisicing adipisicing voluptate laborum tempor dolor deserunt exercitation in officia minim elit. Aute exercitation Lorem consequat fugiat id ut.",
    address: "2464 Royal Ln. Mesa, New Jersey 45463",
    email: "desertshow@mail.com",
    distance: "0.2 km - $$",
    image: require("../assets/images/restaurants/restaurant-04.png"),
    hotOffer: require("../assets/images/restaurants/restaurant-03-hot-offer.png"),
    backgroundImage: require("../assets/images/restaurants/restaurant-01-background.png"),
    icon: require("../assets/images/restaurants/restaurant-01-icon.png"),
    rating: "2.5",
    numberOfRatings: "33",
    popular: true,
    freeDelivery: true,
    timeOfDelivery: "40-50 Min",
    near: false,
    freeDeliveryFrom: "500",
    distance: "0.5 km",
    type: "Bakery",
    phone: "+1 387 456 88 74",
    dishes,
  },
];

export { dummyData, dishes };
