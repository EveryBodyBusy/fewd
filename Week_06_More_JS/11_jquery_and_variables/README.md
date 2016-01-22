![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Jquery and Variables

##Agenda

*	Jquery Review - Hiding/Showing Elements
* Codealong - FAQ Section
* Jquery Changing Style & Content
* Jquery Syntax Drill
*	Variables
*	Lab Time
* Homework - Relaxr Blog with Jquery

---

##Jquery Review - Hiding/Showing Elements

Last class, we started playing with ways to hide and show DOM elements. Those were `show()`, `hide()`, `slideUp()`, `slideDown()`, and `slideToggle()`.

What happens when we use those Jquery methods on multiple elements at the same time (for example, all the p tags on the page or everything with the class "title")?

Let's play around again at http://foodsense.is/

##Codealong - FAQ Section

Let's build a simple FAQ site together.

##Jquery Changing Style & Content

* We can not only animate hide/show elements in the DOM, but also change the html and the styling of the page.

###.css

* We can use Jquery to change the styling of a single element or group of elements
* Using the $ selector, you can access the styling of the _first_ element selected using `.css(property_name)
    
    ```
    $(h1).css('color')
    '#12ff3f'
    // returned the color of the first h1 on the page
    ```

* You can also change the styling of _every_ element selected using `.css(property_name, new_value)`

    ```
    $(h1).css('color', 'red')
    // makes every h1 have color: red;
    ```

###.html()

* You can see the HTML inside any element on the page using the $ selector and the method `.html()`. This returns the inner HTML for the first element selected.

    ```
    $('h1').html();
    "SpaceX Lands Rocket Last Month, Crashes This Month."
    // That is the text inside the first h1 on the page
    ```

* You can change the inner HTML using `.html(new_value)`.

    ```
    $('h1').html('NASA Lands Man on Mars');
    // You just changed the text inside the first h1 on the page.
    ```

##Jquery Syntax Drill

Fork this Codepen and let's go through some exercises: http://codepen.io/GeneralAssembly/pen/EAubl

##Variables

*	We can tell our program to remember values for us to use later on. 
*	The action of saving a value to memory is called assignment
*	The entity we use to store the value is called a variable

###Using Variables

*	The action of getting the value from a variable is called accessing the variable

*	We will use all the above techniques to store values into variables, and generate new values using existing variables

Declaration: ```var age;```

Assignment: ```age = 21;```

Both at the same time: ```var age = 21;```

###Variable Re-Assignment

```var name = "Jo";```

```name = Amir;```

Note:

name is now Amir.

###Variable Conventions

*	Variables start with a lower case letter
*	If they contain multiple words, subsequent words start with an upper case letter.

		var numberOfStudents = 10;

###Variables & Data Types 

What can you store in a variables? The types of different values we support include:
	
*	__String__ text
*	__int__, __float__ numbers
*	__Boolean__ true or false

We will talk about these more next class.

##Score Keeper

##Homework - Relaxr Blog with Jquery

Please have this done by Thursday.