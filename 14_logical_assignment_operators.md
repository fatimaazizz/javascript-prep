# Logical assignment operators

We have already studied the the short circuitting . which is sone like that

```
const rest1={
name :'Meet the cheese',
numGuest:20}
const rest2={
name: "Dar's delighto",
owner:'Dar'}
rest1.numGuest=rest1.numGuest || 10;
rest2.numGuest=rest2.numGuest || 10;
console.log(rest1);
console.log(rest2)
```

## OR assignment operators


```
const rest1Or={
name:'Meet the cheese',
numGuest:20}
const rest2Or={
name:"Dar's delighto",
owner:'Dar'}

rest1Or.numGuest ||=10;
rest2Or.numGuest ||=10;
console.log(rest1Or);
console.log(rest2Or)
```
## Nullish assignment operator

as we  have already studied or operator returns the first truthy value 
```
const rest1Null={
name:'Meet the cheese',
numGuest:20}
const rest2Null={
name:"Dar's delighto",
owner:'Dar'}

rest1Null.numGuest ??=10;
rest2Null.numGuest ??=10;
console.log(rest1Null);
console.log(rest2Null)
```
## And assignmnet operators

as we  have already studied and operator returns the last  truthy value or first falsy value.
but assignmnet operators assign the value iff its only true.

```
const rest1And={
name:'Meet the cheese',
numGuest:20}
const restNull={
name:"Dar's delighto",
owner:'Dar'}

rest1And.owner &&='<anonymous>';
rest2And.owner &&='<anonymous>';
console.log(rest1And);
console.log(rest2And)
```
