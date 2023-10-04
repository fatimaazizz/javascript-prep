# Object Destracturing

Destructuring is  a powerful thing in ES6 as we previously discussed it with arrays it  also works with objects to.\
Lets , first define a restaurant object.

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
order: funaction[startIntex,mainIndex]{
  return[ this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
}
```

## Basic syntax

One thing to note in object restructuring  is that order is not important but property name is 

```
let {name, location} = restaurant;
console.log(name,loaction);
```

## With change varaiable names

```
let {name:restaurantName, location:restaurantLoaction} = restaurant;
console.log(restaurantName,restaurantLoaction);
```

## Default

```
let {openingHours:timing=[],menu=[]} = restaurant;
console.log(timing,menu);
```
