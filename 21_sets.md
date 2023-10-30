# Set

Set is a datasturcture which stores the unique values.

## Set creation

set is created by using new keyword with 'Set' and  it takes an iterable as an argument.

```
const resturantsMenu=['pizza','pasta','samosa','pizza','pasta'];
const uniqueDishes=new Set(resturantsMenu);
console.log(uniqueDishes)
```

## Set methods

### has method
set most useful method is 'has' that is used to check weither an elemnet exists or not in set. Method will return true if element  is found  else false

```
console.log(uniqueDishes.has('pasta'));
console.log(uniqueDishes.has('sandwich'));
```

### add

Add will add a new element in the set if it is unique.


```
uniqueDishes.add('steak')
console.log(uniqueDishes);
```

### delete

delete will delete the  element provide in the arguments in the array if it is unique.


```
uniqueDishes.delete('steak')
console.log(uniqueDishes);
```

## properties

### size

Size works like  length method of arrays. it will  number of elemnet exists in an set.

```
console.log(uniqueDishes.size);
```

## Important

Set values are not accessable like arrays However they are iterable so  we can loop over it.

```
for(const dish of uniqueDishes)
{
  console.log(dish);
}
```

set can work with string

```

const name="fatima";
const uniqueLettersInName=new Set(name);
console.log(uniqueLettersInName.size);

```

