# Scope
**scoping** controls how our program's variables are organized and accessed by the JavaScript engine.So basically scoping asks the question,where do variables live?
Or where can we access a certain variable and where not?
  
## lexical scoping
 Javascript uses lexical scoping  in which  Scoping is controled by the **placement** of functions and blocks in the code.
 
 **For example**, a function that is written insideanother function has access to the variablesof the parent function, okay?
  
  ## scope
  Space and enviroment in whcich a certain variable is declared (variable enviroemnt in case of function .there is **global** scope ,**functional** scope
  and **block** scope.
  
  ![image](https://user-images.githubusercontent.com/66674294/234573839-f66ad529-1440-49b6-8ce8-6c9e87117402.png)

![image](https://user-images.githubusercontent.com/66674294/234574624-f5ef763f-e4a4-460f-b9b2-46a60f272e76.png)

![image](https://user-images.githubusercontent.com/66674294/234575183-258f5c19-ad8f-4e98-8938-4e12c7e2b924.png)

## scope chain vs call stack

  ![image](https://user-images.githubusercontent.com/66674294/234575785-4532c754-1dbf-43f5-a0ec-343f3e48e0db.png)

![image](https://user-images.githubusercontent.com/66674294/234576725-e1d1d52c-00b0-4f93-b509-0fef24dba32b.png)

### Summary
1. scoping asks the question **where do varaibles live?** or **where  can we access a certain variable and where not?**
2. there three type of scopes functional,block and global
3. only let and const are block  scoped. varaiables declared the var are end up in closedt function scope.
4. in javascript we have lexical scoping,so the rules of where can access a variables are based on exaclty where in code  functions and blocks are written.
5. Every scope always has access to  all  the variables from all its outer parents.this is scope chain.
6. scope in is one-way street : a scope will never , ever have access to the variables of ani inner scope .
7. the scope chain in a certain scope is equal to adding together all the varaible eniviorments o the all the parent scopes.
8. the scoped chain has nothing to do with the order in which function were called . it does not affect the scope chain at all;
