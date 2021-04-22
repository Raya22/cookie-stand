> ## Error Handling & Debugging


**ORDER OF EXECUTION**
 it helps to know how scripts are processed. 
The order in which statements are executed can be complex; some tasks 
cannot complete until another statement or function has been run.

![](https://miro.medium.com/max/3630/1*ddKOVPd0nh4-3l9QisgJnQ.png)


**EXECUT.ION CONTEXTS**
There is one global execution context; plus, each function creates a new 
new execution context. They correspond to variable scope. 
Every statement in a script lives in one of three 
execution contexts: 
* GLOBAL CONTEXT
* FUNCTION CONTEXT 
* GLOBAL SCOPE 

![](https://cpentalk.com/?qa=blob&qa_blobid=6137021251521763964)

EXECUTION CONTEXT 
& HOISTING 

Each time a script enters a new execution context, there are two phases 
of activity:
* PREPARE
* EXECUTE

Debugging is the process of finding errors. It involves a 
process of deduction.

![](https://www.oreilly.com/library/view/the-art-of/9780471469124/9780471469124_debugging_by_deduction_image01.png)

The console helps narrow down the area in which the 
error is located, so you can try to find the exact error.

**HANDLING EXCEPTIONS**
* TRY :  you specify the code 
that you think might throw an 
exception within the try block. 
If an exception occurs in this 
section of code, control is 
automatically passed to the 
corresponding catch block. 

* CATCH : If the try code block throws an 
exception, catch steps in with an 
alternative set of code. 
It has one parameter: the error 
object. Although it is optional, 
you are not handling the error if 
you do not catch an error

* FINALLY
The contents of the fi na 11 y 
code block will run either 
way - whether the try block 
succeeded or failed. 
It even runs if a return keyword 
is used in the try or catch block. 
It is sometimes used to clean up 
after the previous two clauses. 


![](https://miro.medium.com/max/1198/1*jcywAqHuABrR1wt0oB1WCQ.png)


A DEBUGGING 
WORKFLOW 

Debugging is about deduction: eliminating potential causes of an error. 
Here is a workflow for techniques you will meet over the next 20 pages. 
Try to narrow down where the problem might be, then look for clues. 


The JavaScript console is just one of several developer tools that are 
found in all modern browsers.