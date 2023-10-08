In previous lesson we learned about the short circuiting and use of or operator if a value does not exist than assign a default value to it.

```
const person={name:'fatima',
age:'23',
}
person.devProject=0;
const devProjects=person.devProjects||10;
console.log(devProjects);

```

instead of getting  0 in result we got 10 because 0 is a falsy value  and it is evaluated  as false and or operator returns the first truthy value.
this problem is resolves by new operator called 'Nullish' '??'

```
person.devProject=0;
const devProjects=person.devProjects??10;
console.log(devProjects);

```
