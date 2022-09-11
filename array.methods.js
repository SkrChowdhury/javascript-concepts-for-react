const products = [
  {
    name: 'laptop',
    price: 32444,
    brand: 'lenevo',
    color: 'silver',
  },
  {
    name: 'phone',
    price: 7000,
    brand: 'iphone',
    color: 'golden',
  },
  {
    name: 'watch',
    price: 3000,
    brand: 'casio',
    color: 'yellow',
  },
  {
    name: 'sunglass',
    price: 300,
    brand: 'ray bean',
    color: 'black',
  },
  {
    name: 'camera',
    price: 9000,
    brand: 'cannon',
    color: 'gray',
  },
];
//1. map
const brands = products.map((product) => product.brand);
console.log(brands);

const prices = products.map((product) => product.prices);
console.log(prices);

// 2. forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));
products.forEach((product) => {});

// 3. filter  (gives an array of matching results)
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

//--------------------------
const specificName = products.filter((product) => product.name.includes('n'));
console.log(specificName);

// 4. find  (gives the first object that matches)
const special = products.find((product) => product.name.includes('n'));
console.log(special);

//
