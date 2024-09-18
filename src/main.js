// ================================================================================================================================================================================

// function filterArray(numbers, value) {
//     let newArray = [];
//     numbers.forEach(function (number, index){ 
//       if (number > value) {
//         newArray.push(number)
//       }
//     })
//     return newArray;
//   }
  
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

// ================================================================================================================================================================================

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   }

//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));

// ================================================================================================================================================================================

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// ================================================================================================================================================================================

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  
// ================================================================================================================================================================================

// function changeEven(numbers, value) {
//     let newArray =[];

//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         newArray.push(numbers[i] + value);
//       } else {
//         newArray.push(numbers[i]);
//       }
//     }
//     return newArray;
//   }
  
//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//   console.log(changeEven([17, 24, 68, 31, 42], 100));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// ================================================================================================================================================================================

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length );

// console.log(planetsLengths);

// ================================================================================================================================================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const titles = books.map( book => book.title);

//   console.log(titles);

// ================================================================================================================================================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);
//   console.log(genres);
  
// ================================================================================================================================================================================

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];

// const getUserEmails = (users) => {
//     return users.map(user => user.email)
//   };

// console.log(getUserEmails(users));

// ================================================================================================================================================================================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ================================================================================================================================================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "Big Sur",
//       author: "Jack Kerouac",
//       rating: 9.3,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);
  
//   console.log(topRatedBooks);
//   console.log(booksByAuthor);

// ================================================================================================================================================================================

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

//   const getUsersWithEyeColor = (users, color) => {
//     const eyeColorFilter = users.filter(user => user.eyeColor === color);
//     return eyeColorFilter;
//   };

//   console.log(getUsersWithEyeColor(users, "blue"));
//   console.log(getUsersWithEyeColor(users, "green"));
//   console.log(getUsersWithEyeColor(users, "brown"));

// ================================================================================================================================================================================

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39
//     }
//   ];

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// ================================================================================================================================================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//         title: "Big Sur",
//         author: "Jack Kerouac",
//         rating: 9.3,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   ];
//   const BOOK_TITLE = "Big Sur";
//   const AUTHOR = "Robert Sheckley";
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);
  
//   console.log(bookWithTitle);
//   console.log(bookByAuthor);
  
// ================================================================================================================================================================================

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
      
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
// console.log(getUserWithEmail(users, "mmwdwadawd@gmail.com"));

// ================================================================================================================================================================================

//  const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive === true);
// };

// console.log(isEveryUserActive(users));

// const isAnyUserActive = (users) => {
//     return users.some(user => user.isActive === true);
// };

// console.log(isAnyUserActive(users));

// ================================================================================================================================================================================

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((totalTime, userTime) => {
//     return totalTime += userTime;
//   }, 0);

//   console.log(totalPlayTime);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;

// ================================================================================================================================================================================

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players.reduce((acc, user) => {
//     return acc + user.playtime / user.gamesPlayed;
//   }, 0);
  
//   console.log(totalAveragePlaytimePerGame);

// ================================================================================================================================================================================

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
// ];

// const calculateTotalBalance = (users) => {
//     return users.reduce((balance, user) => {
//         return balance += user.balance;
//     }, 0)
// };

// console.log(calculateTotalBalance(users));

// ================================================================================================================================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Jack Kerouac",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ================================================================================================================================================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ================================================================================================================================================================================

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Jack Kerouac",
//     "Howard Lovecraft",
// ];
  
// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
  
// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
  
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// ================================================================================================================================================================================


// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "Big Sur",
//       author: "Jack Kerouac",
//       rating: 9.3,
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       rating: 7.94,
//     },
//     {
//       title: "Enemy of God",
//       author: "Bernard Cornwell",
//       rating: 8.67,
//     },
// ];
  
// const sortedByAuthorName = books.toSorted((firstAuthor, secondAuthor) => 
//     firstAuthor.author.localeCompare(secondAuthor.author));
  
// const sortedByReversedAuthorName = books.toSorted((firstAuthor, secondAuthor) => 
//     secondAuthor.author.localeCompare(firstAuthor.author));
  
// const sortedByAscendingRating = books.toSorted((firstRate, secondRate) => 
//     firstRate.rating - secondRate.rating);
  
// const sortedByDescentingRating = books.toSorted((firstRate, secondRate) => 
//     secondRate.rating - firstRate.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// ================================================================================================================================================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//         title: "Big Sur",
//         author: "Jack Kerouac",
//         rating: 9.3,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
  
// const names = books
//     .filter(book => book.rating >= MIN_BOOK_RATING)
//     .map(author => author.author)
//     .toSorted((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));

// console.log(names);

// ================================================================================================================================================================================

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// ================================================================================================================================================================================

// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
  
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
  
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.name);
// console.log(child.hasOwnProperty("age"));
// console.log(child.age);
// console.log(child.hasOwnProperty("surname"));
// console.log(child.surname);
// console.log(child.hasOwnProperty("heritage"));
// console.log(child.heritage);
// console.log(parent.isPrototypeOf(child));

// ================================================================================================================================================================================

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
  
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
  
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf("parent"));
// console.log(parent.isPrototypeOf("child"));
// console.log(ancestor.hasOwnProperty("surname"));
// console.log(ancestor.surname);
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.surname);
// console.log(child.hasOwnProperty("surname"));
// console.log(child.surname);
// console.log(ancestor.hasOwnProperty("heritage"));
// console.log(ancestor.heritage);
// console.log(parent.hasOwnProperty("heritage"));
// console.log(parent.heritage);
// console.log(child.hasOwnProperty("heritage"));
// console.log(child.heritage);

// ================================================================================================================================================================================

// class Car{
//     constructor(brand, model, price){
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// const brz = new Car("SUBARU", "BRZ", 35000);
// console.log(brz);

// const gt = new Car("TOYOTA", "GT-86", 33000);
// console.log(gt);

// const frs = new Car("SCION", "FR-S", 17000);
// console.log(frs);

// ================================================================================================================================================================================

// class Car{
//     constructor(params){
//         this.brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }
// }

// const brz = new Car({
//     brand: "SUBARU", 
//     model: "BRZ", 
//     price: 35000
// });
// console.log(brz);

// const gt = new Car({
//     brand: "TOYOTA", 
//     model: "GT-86", 
//     price: 33000
// });
// console.log(gt);

// const frs = new Car({
//     brand: "SCION", 
//     model: "FR-S", 
//     price: 17000
// });
// console.log(frs);

// ================================================================================================================================================================================

// class Car{
//     constructor(params){
//         this.brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }

//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice){
//         this.price = newPrice;
//     }
// }

// const brz = new Car({
//     brand: "SUBARU", 
//     model: "BRZ", 
//     price: 35000
// });
// console.log(brz);
// brz.getPrice();
// brz.changePrice(38000);
// console.log(brz);

// const gt = new Car({
//     brand: "TOYOTA", 
//     model: "GT-86", 
//     price: 33000
// });
// console.log(gt);

// const frs = new Car({
//     brand: "SCION", 
//     model: "FR-S", 
//     price: 17000
// });
// console.log(frs);

// ================================================================================================================================================================================

// class Car{
//     #brand;
//     model;
//     price;

//     constructor(params){
//         this.#brand = params.brand;
//         this.model = params.model;
//         this.price = params.price;
//     }

//     getBrand(){
//         return this.#brand;
//     }

//     changeBrand(newBrand){
//         this.#brand = newBrand;
//     }

//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice){
//         this.price = newPrice;
//     }
// }

// const brz = new Car({
//     brand: "SUBARU", 
//     model: "BRZ", 
//     price: 35000
// });

// console.log(brz);
// console.log(brz.getPrice());
// brz.changePrice(38000);
// console.log(brz);
// console.log(brz.getBrand());
// brz.changeBrand("SUBAWU");
// console.log(brz);

// const gt = new Car({
//     brand: "TOYOTA", 
//     model: "GT-86", 
//     price: 33000
// });
// console.log(gt);

// const frs = new Car({
//     brand: "SCION", 
//     model: "FR-S", 
//     price: 17000
// });
// console.log(frs);

// ================================================================================================================================================================================

// class Car {
//     #brand;
//     #model;
//     #price;
    
//     constructor(params) {
//       this.#brand = params.brand;
//       this.#model = params.model;
//       this.#price = params.price;
//     }
  
//     get brand() {
//       return this.#brand;
//     }
  
//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }
  
//     get model() {
//       return this.#model;
//     }
  
//     set model(newModel) {
//       this.#model = newModel;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       this.#price = newPrice;
//     }
// }

// const brz = new Car({
//     brand: "SUBARU", 
//     model: "BRZ", 
//     price: 35000
// });


// const gt = new Car({
//     brand: "TOYOTA", 
//     model: "GT-86", 
//     price: 33000
// });
// console.log(gt);

// const frs = new Car({
//     brand: "SCION", 
//     model: "FR-S", 
//     price: 17000
// });
// console.log(frs);

// ================================================================================================================================================================================

// class Car {
//     static maxPrice = 50000;
//     #price;
  
//     constructor(params) {
//       this.#price = params.price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//         if (newPrice <= Car.maxPrice) {
//             this.#price = newPrice;
//         }
      
//     }
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price);
  
//   audi.price = 49000;
//   console.log(audi.price);
  
//   audi.price = 51000;
//   console.log(audi.price);

// ================================================================================================================================================================================

// class Car {
//     static #maxPrice = 50000;
//     static checkPrice(price){
//         if (price < Car.#maxPrice) {
//             return "Success! Price is within acceptable limits";
//         } else {
//             return "Error! Price exceeds the maximum";
//         }
//     };
  
//     constructor(params) {
//       this.price = params.price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ================================================================================================================================================================================

// class User {

//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
// }

// class Admin extends User {

//     static role = {
//         BASIC: "basic", 
//         SUPERUSER: "superuser"
//     }
// }

// console.log(Admin.role.BASIC);
// console.log(Admin.role.SUPERUSER);

// ================================================================================================================================================================================

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     access;
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
//     constructor(params) {
//         super(params.email)
//         this.access = params.access;

//     }
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"

// ================================================================================================================================================================================

class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
}

class Admin extends User {
    blacklistedEmails = [];

    static role = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor(params) {
      super(params.email);
      this.access = params.access;
    }

    blacklist(email){
        return this.blacklistedEmails.push(email);
    }
    
    isBlacklisted(email){
        return this.blacklistedEmails.includes(email)
    }
}
  
const mango = new Admin({
    email: "mango@mail.com",
    access: Admin.role.SUPERUSER,
});
  
console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"
  
mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
  