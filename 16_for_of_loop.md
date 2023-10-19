# for Of loop

in the javascript instead traditional for loop we have a  for-of loop which works on iterables like array and we  can use it for object in the indirect way.

## Advantage 
 Syntax is short and consized in the  for-loop . we do need to have a length condition and  increase the iterable  varible value to loop over.

 ## Example 

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
 },
 orderPizza:function(importantInt,...restIngredient)
 {console.log(importantInt);
 console.log(restIngredient)
 }
 }
const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
for(const  menuItem of menu)
{
  console.log(menuItem);
}
```
