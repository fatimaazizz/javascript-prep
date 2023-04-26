# JS Engine and Runtime
## Js Engine 
IS a computer program which executes javascript code. every browser has its own javascript engine.
**chrome V8 engine**\
JS Engine contains two parts onw call stack where our code is execute and or heap where object are srtored.\
![image](https://user-images.githubusercontent.com/66674294/234555835-ef0a2627-8565-4283-b91a-2919b5dc9103.png)

## Compilation vs  interpretation

**Compilation:** Entire code is converted into machine code at once  and written to a binary filw that can be executed by a computer.\

![image](https://user-images.githubusercontent.com/66674294/234557214-f12c753b-d447-4346-b47a-d2efe6468945.png)


**Interpretation:**  interpreter runs through the source code and execute it line by line.

![image](https://user-images.githubusercontent.com/66674294/234557569-5e8c5dd3-f0e3-4493-a5b5-5590a2e431b5.png)

**Just in time compilation**
 Entire code is converted into machine  code at once , then executed immediately.
![image](https://user-images.githubusercontent.com/66674294/234558004-0d58551d-b10e-4068-be47-de9e0a0195bf.png)

![image](https://user-images.githubusercontent.com/66674294/234558806-a8b58ac2-1c51-44ba-bdba-55f06cfc089b.png)

## javascript runtime
for example a click, the callback function will be called.

And here is how that actually works behind the scenes.

So the first thing that actually happens after the event

is that the callback function is put

into the callback queue.

Then when the stack is empty

the callback function is passed to the stack

so that it can be executed.

And this happens by something called the event loop.

So basically the event loop takes callback functions

from the callback queue

and puts them in the call stack

so that they can be executed.
![image](https://user-images.githubusercontent.com/66674294/234559250-b4ffc1d9-9306-45b6-b76c-4cb8ba3a023b.png)
![image](https://user-images.githubusercontent.com/66674294/234559624-8a8cf5b8-8d2f-4dac-aa1d-9db12549c10a.png)

