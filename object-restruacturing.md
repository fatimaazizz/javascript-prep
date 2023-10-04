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
order: function([startIntex,mainIndex]){
  return[ this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
},
oderDelivery:function({starterIndex,mainIndex,timing,address})
{
  console.log(`Your order is received! ${this.starterMenu[starterIndex]}
 and ${this.mainMenu[mainIndex]} will deliver it by ${timing} at ${address}  `);
}
}
```

## Basic syntax

One thing to note in object restructuring  is that order is not important but property name is 

```
let {name, location} = restaurant;
console.log(name,location);
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

## Assign values to existing varibales

We cannot write it directly `{a,b}=obj` because js {} take these brackets as code block

```
let a= 99,
let b= 100,

const  obj= {a:10,b:200,c:140};

({a,b}=obj);

console.log(a,b);
```
## Nested objects
We have created a timing  variable  lets reuse it.

```
const {fri:{open,close} }=timing;
console.log(open, close);

// we can also rename it

const {fri:{open:o,close:c} }=timing;
console.log(o, c);

```
## Useful usecase of object restructuring 

it is important for method arugment list is long  and difficult to remember  order
```
restaurant.oderDelivery({
timing:'20:23'.
starterIndex:1,
mainIndex:2,
address:'askari 9 , Lahore'
})
```
