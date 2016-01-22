![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Conditionals and Functions

##Agenda

* Datatypes & Math
* Conditionals
* Codealong - Compare That
* Codelaong - Blackout
* Hosting
* Lab - Weather Application
* Homework - Final Project Milestone 2

##Datatypes & Math

###Strings

* Stores textual information
* String literal is surrounded by quotes

    ```
    "How is the weather today?"
    'Warm'
    ```

* Double vs single quoted strings:

    ```
    'They "purchased" it'
    "It's a beautiful day"
    ```

###Conversion: String To Number

```
var intString = "4";
var intNumber = parseInt(intString, 10);
var floatString = "3.14159";
var floatNumber = parseFloat(floatString);
```

* So why would you need to convert datatypes?

###Conversion: Number To String

```
var number = 4;
number.toString(); => "4"

// OR...

number + ""; => "4"
```

###Numbers

* Represent numerical data
* int: `42`
* float: `3.14159265`
* both int and float support signs
* positive int: `+6`
* negative float: `-8.2`
* Can perform arithmetic on number data types:

    ![](../../img/unit_1/arithmetic.jpg)

##Conditionals

![](../../img/unit_1/cfDiagram.png)


###Making Decisions

* It's either TRUE or FALSE (like booleans)
* If you are greater than 18 you are an adult

    ```
    if (age > 18){
      document.write("You are an adult");
    }
    ```

###Comparisons - Equality

Are two things equal?

```
10 === 10 //true
10 === 5 //false
"hi" === "hi" //true
```

###Logical Operators

![](../../img/unit_1/logical_operators.png)


###Conditional Syntax

```
if(condition is true) {  
  //Do cool stuff
}
```
###Conditional With Else Syntax

```
  if(condition is true) {
    //Do cool stuff
  }else{
    //Do other cool stuff
  } 
```

###Conditional With Multiple If Syntax

```
  var topic = "JS";
  if (topic == "JS") {
    console.log("You're learning JavaScript");
  } else if(topic == "JavaScript") {
    console.log("You're still learning JavaScript");
  } else {
  console.log("You're learning something else");
}
```

###Multiple Conditions

```
if (name == "GA"  && password == "YellowPencil"){
  //Allow access to internet
}
```

###The Truth Table

```
if (name == "GA"  && password == "YellowPencil"){
  //Allow access to internet
}
```

![](../../img/unit_1/and_table.png)

```
if (day == "Tuesday"  || day == "Thursday"){
  //We have class today
}
```

![](../../img/unit_1/or_table.png)

##Codelaong - Compare That

Let's do a codealong! We'll also introduce a new element - input.

##Codelaong - Blackout

Let's do a coadealong to get a light switch working.

##Hosting

Let's learn how to host our projects.

##Lab - Weather Application

1. As a class, we're gonna write feature requirements to create a fully functional application that takes celsius temperature, converts it to Fahrenheit and changes the background to match said temperature.
2. In groups of four, write pseudo code for the application.
3. In pairs write the code to convert Celsius into Fahrenheit, and display the result in the browser.

##Homework - Final Project Milestone 2

By next week, please 

1. Write draft HTML/CSS for your final project. You don't need to finish, just focus on your layout.
2. Write pseduocode for the JS you want to use. You don't need to wriet actual JS, just pseudocode for the logic you'll have.
