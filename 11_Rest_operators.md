# Rest Operators

Rest operator is an opposite of the spread operator.Rest operator condense the  values in a variable while spread expand the values in different values.

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
```

Both spread and rest operators look same in syntax but they are used in differernt places 
spread is used at the right side of assigment operator while Rest operator is on the left handside of
operators or inside function defination

// spread operators

```
const menu= [...restaurant.mainMenu,restaurant.starterMenu];
console.log("menu after spread operator", menu);

```
## Rest operators used with destructuring

```
const [...menu1]= [...restaurant.mainMenu,restaurant.starterMenu];
console.log("menu after spread operator", ...menu);

```

## Important

it is important to note that  in statment we can only write one spread operator and it should be last elemnt of  operators.

let get pizza and Risotta in separate operators and  skip pasta . Copy the rest of elemnt in 
```
const [Pizza, ,Risotta,...restMenu]= [...restaurant.mainMenu,restaurant.starterMenu];
console.log(Pizza ,Risotta ,restMenu);
```

## Functional use

Rest operator is used in function;; parameter to have any number of arguments.

```
const add=function(...Numbers)
{
  let sum=0;
  for (let i=0; i<Numbers.length;i++)
  sum+=Numbers[i];
  console.log(sum);
}

add(2,3);
add(5,7,10,20);
add(5,7,10,20,11,23,34);

```

```
restaurant.orderPizza("mushrooms","onion","bell pepper","olives");
restaurant.orderPizza("mushrooms");
```
