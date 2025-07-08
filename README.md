# REACT HOOKS
- Hooks are the functions to use the functional components in the react.
- Hooks are the class components.

# useState Hooks
- is a function to add state in the functional components . values or variables
- first import and use it inside the functional component
- can pass any type of date variable,number ,text, array,boolean , object and store it using array destructuring
- current value and is the function to update the value

# Use Effects Hooks
- It is used to perform side effects in the componsent
 - Side effects are actions which are performed outside world
 - fetching the data in the api
 - updateing the dome
 - set timeput and set Interval

 accepts two argument (callback, dependencies)
 array of variables and is optional
 First argument what to run and second argument when to run 
 variation of useeffects
 - without dependencies
 - with dependecnies variables
 - with arrays
 - timer intervals settimeout

# Usecontext Hooks

global data 
user settings

3 simple steps

 creating the context
 providing the context
 consuming the context

use props if you require to pass it to one step parent child component
-Always good to use the folder named context for setting up the global variables


# UseRef hook
- always us to access DOM element
- mutable variable which donesnot cause re-render
- without using document Dom to get the element
- get the element using ref attributes

used to manage the state
works like a statement tool. Manages all states of application in a simple way.
-accepts two arguments firstone -reducer function initial state

# useLayoutEffect hook

- Before the DOm is printed in the window
- measure height width
- runs syncronously

Common use case
- getting the dimension of the element

How does it works
- First React calculate the components
- React prints all the elements
- Use effect will run

But most of the time we use useEffect Hook will be used

# UseMemo hook
-appy memorization in react. Memorization - a technique for improving the performance of the code. It is used when the returned value is not going to change
-stop running unwanted functions on rerendering
- it can return the value and we can save it for future purposes

# useCallback Hook

- return memoize function


# custom Hook
