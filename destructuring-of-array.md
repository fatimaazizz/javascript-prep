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
let [s1,s2]=arr;
const temp=s1;
s1=s2;
s2=temp;
console.log(s1,s2,arr);
```


with destructuring we can reverse the values easily

```
const  students=['fawad','ali','hassan'];
const [s1,s2]=arr;
[s1,s2]=[s2,s1];
console.log(s1,s2,arr);
```
