# Spread Operators

In ES6 spread (...) allows us to quickly copy all or a part of an existing array and Object into another array and object.

## Before spread operator 

Before spread operators we use to copy array by using the loops or manually doing it.

```
const arr=[1,2,3];
const newBadArr=[9,10,arr[0],arr[1],arr[2]]

console.log(arr);

console.log(newBadArr);

//but with spread operators

const newArr=[9,10,...arr]
console.log(newArr);
console.log(...newArr);
console.log(9,10,1,2,3);

```
## Usecase 

1. Spread operators are used to make a copy of existing array and object
2. to pass araguments to a function.


## Iterables

Spread operators work on all iterables like array,map,set and string.
One thing to note  object is not iterable data structure

```
const str="fatima";
console.log(...str,'','A');
```

## Important
spread works in functions. where list of  indiviual items are required not works with  template  litters

```
//this will give you a error
console.log(`letters in my name ${...str}`);
```

## Real Life Example
```
const restaurant = {
name:'Classico Italiano',
location:'gulberg 5 , Lahore',
categories:['Italian','Pizzeria','Vegetarain','Organic'],
starterMenu :['Focaccia','Bruschetta','Gralic bread','Capress Salad'],
mainMenu: ['Pizza','Pasta','Risotta'],
openingHours:{
  thu:{
  open:12,
  close:22
  },
  fri:{
  open:11,
  close:23
  },
  sat:{
  open:0,
  close:24
  },
},
order: function([startIntex,mainIndex]){
  return[ this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
},
oderDelivery:function({starterIndex,mainIndex,timing,address})
{
  console.log(`Your order is received! ${this.starterMenu[starterIndex]}
 and ${this.mainMenu[mainIndex]} will deliver it by ${timing} at ${address}  `);
},
oderPasta:function(ing1,ing2,ing3)
{
  console.log(`here is your pasta with  ${ing1} , ${ing2}
 and ${ing3}`);
}
}
const Ingredient=[prompt("Let's add 1st ingredient for pasta"),prompt("2nd ingredient for pasta"),prompt("3rd ingredient for pasta")];
restaurant.oderPasta(Ingredient[0],Ingredient[1],Ingredient[2]);
restaurant.oderPasta(...Ingredient);

const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
console.log("whole Menu" ,menu);
```

## Shallow copy

```
const newRestaurant={foundingYear:'1991',...restaurant,foundedBy:'Ali Akbar'};

console.log(newRestaurant);
console.log(restaurant);

newRestaurant.name="Mario's Mexican";
console.log(restaurant.name,newRestaurant.name);
```
