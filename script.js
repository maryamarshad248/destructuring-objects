'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address,
  }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },
};

restaurant.orderDelievery({
  time: '12:30',
  address: 'Via del sole 22',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelievery({
  time: '20:00',
  address: 'Via del sole,22',
  mainIndex: 1,
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// default values
const {
  menu = [],
  starterMenu: starters = [],
  mainMenu: main = [],
} = restaurant;
console.log(menu, starters, main);

// mutating variables
let a = 20;
let b = 30;
const obj = { a: 100, b: 200, c: 400 };
({ a, b } = obj);
console.log(a, b);

// nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
