# Short Circuting

logical operators always don't give true and false.
they can use any data type, retuern any data type and They do short circutting

```
  console.log(20 || 'fatima');
  console.log(0 || 'fatima');
  console.log( true || '0');
  console.log( undefined || null);
  console.log( undefined || 0 ||''||null||'my world');
```
## OR operator 

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

