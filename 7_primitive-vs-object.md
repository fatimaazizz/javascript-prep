# Primitive vs Object 

## Primitive

For primitive type variables are created and value is assigned to them  in callback stack execution context of javascript.

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/05f6201c-eba2-4a8d-a24e-f7bd2d20f140)

When we asssign the age variable to the old age variable than both are assigned to same address in the stack.

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/00208871-feb9-40e9-a14d-82ebe61727d2)

When a new value is assigned to `age`  variable than a new address is created with new value.

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/42d2f8a8-858f-40eb-943c-821b09c54c7b)

and `age` variable starts to reference that new address in the memorary.

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/6801c9b7-e496-4ca6-806a-47df2685b2eb)

## Object

For object  variable is created in the execution context of callback stack .However  here is a different  object content is placed in inside  the heap and value containes the reference of that object from heap.

### Reason 

Because  memorary allocation for  the objects are  not fixed , their size can be very huge but callstack has limited memorary.\
Moreover, heap's memorary is not limited that's why objects are created inside the heap and reference of heap address is stored inside the callstack value. 

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/a16b6e4d-70a2-4276-9203-30f8c9f61987)

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/83c365d4-3f36-4520-ad85-472f6fae0c3b)

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/de36caf6-8f26-4411-bf51-ef3e56c84217)

![image](https://github.com/fatimaazizz/javascript-prep/assets/66674294/d0497cd9-4928-46c6-9396-9492e985576e)
