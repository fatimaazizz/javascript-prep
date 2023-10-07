# Short Circuting

logical operators always don't give true and false.
they can use any data type, retuern any data type and They do short circutting


## OR operator 

```
  console.log(20 || 'fatima');
  console.log(0 || 'fatima');
  console.log( true || '0');
  console.log( undefined || null);
  console.log( undefined || 0 ||''||null||'my world');
```

'or' operator checks for the first truthy value and return it .

it can be useful for the assigning the default value if a value does not exist
```
const person={name:'fatima',
age:'23',
}
const height1=person.height?person.height:'5 feet';
const height=person.height||'5 feet';
console.log(`height :${height} ,height1 :${height1}`);
```

```
  console.log(20 || 'fatima');
  console.log(0 || 'fatima');
  console.log( true || '0');
  console.log( undefined || null);
  console.log( undefined || 0 ||''||null||'my world');
```

## AND operator 

```
  console.log(20 && 'fatima');
  console.log(0 && 'fatima');
  console.log( true && '0');
  console.log( undefined && null);
  console.log( undefined && 0 && ''&& null &&'my world');
```

'AND' operator checks for the first falsy value and return it or last true value if all is true .

it can be useful for the checking if a function exists apply it
```
const person1={name:'fatima',
age:function(bornyear)
{console.log(2023-bornyear);
}
}
if(person1.age)
{
person1.age();
}
person1.age && person1.age()
```

