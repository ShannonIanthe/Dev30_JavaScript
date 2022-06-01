//Step 1
let menu = {};

//Step 2: add courses property to menu, set it to an empty object
menu.courses = {};

//Step 3: Create three properties inside the courses object
menu.courses.appetizers = [];
menu.courses.main = [];
menu.courses.desserts = [];

//Step 4 & 5: add method in menu object
menu.addDishToCourse = function(courseName, dishName, dishPrice) {
    const dish = {
        name: [],
        price: []
    };
    this.courses[courseName].push(dish);
};

//Step 6: Create a method inside the menu object
menu.getRandomDishFromCourse = function(courseName) {
//Step 7:
const dishes = this.courses[courseName]
const randomDish = floor(Math.random * dishes.length);
return dishes[randomDish];
}


//Step 8: Create a new function

generateRandomMeal = function() {
    const appetizers = getRandomDishFromCourse();
    const main = courseName;
};

//Step 9: Create a menu
menu.addDishToCourse(appetizers, mains, desserts);

//Step 10: generate a meal
const meal = generateRandomMeal();

console.log(meal);
