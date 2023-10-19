# Object key   values and enteies

object are not iterable but we make them iterable by using the specail function which return a array 

Object.keys(objectName) return the keys of the object.\

Object.values(objectName) return the  values of the object.\

Object.entries(objectName) return the value key pair array.\


```
const mainMenu=['Pizza','Pasta','Risotta']
 const restaurant = {
 name:'Classico Italiano',
 location:'gulberg 5 , Lahore',
 categories:['Italian','Pizzeria','Vegetarain','Organic'],
 starterMenu :['Focaccia','Bruschetta','Gralic bread','Capress Salad'],
 mainMenu,
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
 order([startIntex,mainIndex]){
   return[ this.starterMenu[startIntex],this.mainMenu[mainIndex]];
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
 },
 orderPizza:function(importantInt,...restIngredient)
 {console.log(importantInt);
 console.log(restIngredient)
 }
 }
const keys=Object.keys(restaurant);
const values=Object.values(restaurant);
const entries=Object.entries(restaurant);

for(const key of keys)
console.log(key);

for(const value of values)
console.log(value);

for(const entry of entries)
console.log(entry);
```
