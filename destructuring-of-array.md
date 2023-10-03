# Destructuring of Array

before destructuring when  we need to get element  from  array. We get like that.

```
const arr=[1,2,3];
const a=arr[0];
const b=arr[1];
const c=arr[2];
console.log(a,b,c) 
```

with help of  destrusturing we can get the data easily  from  array

```
const arr=[1,2,3];
const [x,y,z]=arr;
console.log(x,y,z);
```

how we use to reverse the values in the  past

```
const  students=['fawad','ali','hassan'];
let [sn1,sn2]=students;
const temp=sn1;
sn1=sn2;
sn2=temp;
console.log(sn1,sn2,students);
```


with destructuring we can reverse the values easily

```
const  students=['fawad','ali','hassan'];
let [sd1,sd2]=students;
[sd1,sd2]=[sd2,sd1];
console.log(sd1,sd2,students);
```
important thing to note array destructuring will not effect the orginal array

if you want first or third value from array than you can add holes betwwen values. What i mean will be cleared fron  example

```
const foodItem= ['burger','pizza','fries'];
let [item1,,item3]= foodItem;
console.log(item1,item3);
```

how to deal with nested  array in  destructuring

```
const nestedArray=[1,2,[4,5]];
let [g,,h]=nestedArray;
console.log(g,h);
// first second varaible will contain the array
let [i,,[j,k]]=nestedArray;
console.log(i,h,k);
```



we can set the default value  if value not  found in the array

```
const newArray=[1,2];
let [p,q,r]=newArray;
console.log(p,q,r]);
// first second varaible will contain the array
let [s=1,t=1,u=1]]=newArray;
console.log(s,t,u); 
```
