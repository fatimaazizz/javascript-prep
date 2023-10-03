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
sn1=s2;
sn2=temp;
console.log(sn1,sn2,students);
```


with destructuring we can reverse the values easily

```
const  students=['fawad','ali','hassan'];
const [sd1,sd2]=students;
[sd1,sd2]=[sd2,sd1];
console.log(sd1,sd2,students);
```
