# Enhancem,ent in object literals
Previously we can only use static values as key but now we can add keys dynamically
look at the openingHours key pair.Directly use the variable.Variable name will be key for  it and also
 we can write the menthods without function key word.

```
const days=["mon","tue","wed","thu","fri","sat","sun"];
const mainMenu=['Pizza','Pasta','Risotta']
 const restaurant = {
 name:'Classico Italiano',
 location:'gulberg 5 , Lahore',
 categories:['Italian','Pizzeria','Vegetarain','Organic'],
 starterMenu :['Focaccia','Bruschetta','Gralic bread','Capress Salad'],
 mainMenu,
 openingHours:{
   [days[3]]:{
   open:12,
   close:22
   },
   [days[4]]:{
   open:11,
   close:23
   },
   [days[5]]:{
   open:0,
   close:24
   },
 },
 order([startIntex,mainIndex]){
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
 },
 orderPizza:function(importantInt,...restIngredient)
 {console.log(importantInt);
 console.log(restIngredient)
 }
 }
console.log(restaurant.openingHours);
console.log(restaurant.mainMenu);
```
