# Optional Chaining 

**?.**  this syantax is used  when we we need to access  object or property nested inside other objects and do not know whether object exist or not.
otherwise , we have to use to the  if else which make s the code pro complicated .


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
//the line below will giove the error because mon object doeds not exists

//console.log(restaurant.openingHours.mon.open);
console.log(restaurant?.openingHours?.mon?.open);
```

