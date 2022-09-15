# Why functions can be passed as arguments?
In JavaScript, functions can be passed as arguments because functions are objects.

# Tell me about higher order functions and callback functions?
A higher-order function is a function that either accepts functions as parameters, returns a function, or both! 
We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

# when we pass callback function as argument, why don't we put () with name ?
When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

JavaScript Callback function is a function that is passed as an argument to another function. Another function usually invokes the function when it finishes some task or completes some event.

# why do we pass a call back function to event listener?

Need for Callback:

The callback functions are many use cases. It is very useful in asynchronous actions. The asynchronous actions are those actions where JavaScript needs to wait for the action to complete.

For Example, waiting for the user to click on the button. We do not know when the user will click on the button. So we pass a callback function to the buttons click event. Whenever the user clicks the callback function is executed and we can respond to that.