

# DAY 5: Classes in JavaScript


## Functional Classes
  * In this section, we'll discuss some of the ways we can use functions to simulate the behavior of classes.

## Using Functions
  * Define a normal JavaScript function.
  * Create an object by using the _new_ keyword.
  * Define properties and methods for a created object using the _this_ keyword.

#### EXAMPLE

```
1
'use strict';
2
​
3
function Fruit (type) {
4
    this.type = type;
5
    this.color = 'unknown';
6
    this.getInformation = getFruitInformation;
7
}
8
​
9
function getFruitInformation() {
10
    return 'This ' + this.type + ' is ' + this.color + '.';
11
}
12
​
13
let lime = new Fruit('Mexican lime');
14
console.log(lime.getInformation());
15
​
16
lime.color = 'green';
17
console.log(lime.getInformation());
```

**We can also define the getInformation function internally:**

```
1
'use strict';
2
​
3
function Fruit (type) {
4
    this.type = type;
5
    this.color = 'unknown';
6
    this.getInformation = function() {
7
        return 'This ' + this.type + ' is ' + this.color + '.';
8
    }
9
}
10
​
11
let lime = new Fruit('Mexican lime');
12
console.log(lime.getInformation());
13
​
14
lime.color = 'green';
15
console.log(lime.getInformation());
```
### The Prototype Property
     * The drawback of internally defining the getInformation function is that it recreates that function every time we create a new Fruit object. Fortunately, every function in JavaScript has something called a prototype property, which is empty by default. We can think of a function's prototype as an object blueprint or paradigm; when we add methods and properties to the prototype, they are accessible to all instances of that function. This is especially useful for inheritance (discussed below).

**We can add a function to our constructor function's prototype like so:**

#### EXAMPLE

```
1
'use strict';
2
​
3
function Fruit (type) {
4
    this.type = type;
5
    this.color = 'unknown';
6
}
7
​
8
Fruit.prototype.getInformation = function() {
9
    return 'This ' + this.type + ' is ' + this.color + '.';
10
}
11
​
12
let lime = new Fruit('Mexican lime');
13
console.log(lime.getInformation());
14
​
15
lime.color = 'green';
16
console.log(lime.getInformation());
```

### Using Object Literals
    * We can use object literals to define an object's properties and functions by initializing a variable with a comma-separated list of property-value pairs enclosed in curly braces.

#### EXAMPLE

```
1
'use strict';
2
​
3
let lime = {
4
    type: 'Mexican lime',
5
    color: 'green',
6
    getInformation: function() {
7
        return 'This ' + this.type + ' is ' + this.color + '.';
8
    }
9
}
10
​
11
console.log(lime.getInformation());
12
​
13
lime.color = 'yellow';
14
console.log(lime.getInformation());
```

### Singleton Class Using a Function
    * A singleton class is a design pattern that restricts a class to a single instance. When we assign the value of new function(){...} to a variable, the following happens:

    * We define an anonymous constructor function.
    * We invoke the anonymous constructor function with the _new_ keyword.

#### EXAMPLE

```
1
'use strict';
2
​
3
let lime = new function() {
4
    this.type = 'Mexican lime';
5
    this.color = 'green';
6
    this.getInformation = function() {
7
        return 'This ' + this.type + ' is ' + this.color + '.';
8
    };
9
}
10
​
11
console.log(lime.getInformation());
12
​
13
lime.color = 'yellow';
14
console.log(lime.getInformation());
```

## Classes
    * JavaScript classes, introduced in ECMAScript 6, are essentially syntactic sugar over JavaScript's existing prototype-based inheritance that don't actually introduce a new object-oriented inheritance model. This syntax is a means of more simply and clearly creating objects and deal with inheritance.

  **We define classes in two ways:**

### Class Declarations
    * One way to define a class is using a class declaration. To declare a class, we use the _class_ keyword and follow it with the class' name. Ideally, we always write class names in TitleCase.

####EXAMPLE

```
1
class Polygon {
2
    constructor(height, width) {
3
        this.height = height;
4
        this.width = width;
5
    }
6
}
7
​
8
let p = new Polygon(1, 2);
9
console.log('Polygon p:', p);
```

    * An important difference between function declarations and **class declarations is that _function declarations are hoisted_ (i.e., can be referenced before they're declared) but _class declarations are not_.** This means we must first declare our class before attempting to access (or reference) it; if we fail to do so, our code throws a ReferenceError.



#### EXAMPLE

```
1
try {
2
    let p = new Polygon(1, 2);
3
    console.log('Polygon p:', p);
4
}
5
catch (exception) {
6
    console.log(exception.name + ': ' + exception.message);
7
}
8
class Polygon {
9
    constructor(height, width) {
10
        this.height = height;
11
        this.width = width;
12
    }
13
}
14
​
15
p = new Polygon(1, 2);
16
console.log('Polygon p:', p);
```

### Class Expressions
    * Class expressions are another way to define a class, and they can be either named or unnamed. The name given to a named class expression is local to the class' body.

#### EXAMPLE
**Unnamed Class Expression**

```
1
let Polygon = class {
2
    constructor(height, width) {
3
        this.height = height;
4
        this.width = width;
5
    }
6
};
7
​
8
console.log('Polygon:', Polygon);
9
let p = new Polygon(1, 2);
10
console.log('p:', p);
```

**Named Class Expression**

```
1
let Polygon = class Polygon {
2
    constructor(height, width) {
3
        this.height = height;
4
        this.width = width;
5
    }
6
};
7
​
8
console.log('Polygon:', Polygon);
9
let p = new Polygon(1, 2);
10
console.log('p:', p);
```

### The Constructor Method
  * The constructor method is a special method we use to create and initialize objects of a class.

  * A class can only have one special method with the name constructor, and attempting to write a class containing more than one constructor method will throw a SyntaxError.

  * To implement inheritance, we can use the _super_ keyword in a constructor to call a parent class constructor.


### Prototype Methods

#### EXAMPLE

```
1
'use strict';
2
​
3
class Polygon {
4
    constructor(height, width) {
5
        this.height = height;
6
        this.width = width;
7
    }
8
    getArea() {
9
        return this.height * this.width;
10
    }
11
}
12
​
13
const square = new Polygon(10, 10);
14
​
15
console.log(square.getArea());
```

### Static Methods
   Static methods are methods relevant to all instances of a class — not just any one instance. These methods receive information from their arguments and not a class instance, which allows us to invoke a class' static methods without creating an instance of the class. In fact, we actually can't call a static method on an instantiated class object (attempting to do so throws a TypeError).

   We define a class' static methods using the _static_ keyword. We typically use these methods to create utility functions for applications, as they can't be called on class objects.


#### EXAMPLE

```
1
'use strict';
2
​
3
class Point {
4
    constructor(x, y) {
5
        this.x = x;
6
        this.y = y;
7
    }
8
    static distance(a, b) {
9
        const dx = a.x - b.x;
10
        const dy = a.y - b.y;
11
        return Math.sqrt(dx * dx + dy * dy);
12
    }
13
}
14
​
15
const p1 = new Point(5, 5);
16
const p2 = new Point(10, 10);
17
​
18
// The correct way to call a static method
19
console.log(Point.distance(p1, p2));
20
​
21
// Attempt to call a static method on an instance of the class
22
try {
23
    console.log(p1.distance(p1, p2));
24
}
25
catch (exception) {
26
    console.log(exception.name + ': ' + exception.message);
27
}
```

### Inheritance
   In essence, this construct allows us to create an object prototype or class that's an extension of another object prototype or class. A class inheriting from some other class (referred to as a superclass or parent class) is called a subclass (or child class). The subclass inherits the superclass' methods and behaviors, but it can also declare new ones or even override existing ones.

   Subclassing with the _extends_ Keyword

   We use the _extends_ keyword in class declarations or class expressions to create a child class (i.e., subclass).

#### EXAMPLE

```
1
'use strict';
2
​
3
class Animal {
4
    constructor(name) {
5
        this.name = name;
6
    }
7
    speak() {
8
        console.log(this.name, 'speaks.');
9
    }
10
}
11
​
12
class Dog extends Animal {
13
    speak() {
14
        console.log(this.name, 'barks.');
15
    }
16
}
17
​
18
let spot = new Dog('Spot');
19
spot.speak();
20
​
21
spot = new Animal('Spot');
22
spot.speak();
```

**We can also extend functional classes:**

```
1
'use strict';
2
​
3
function Animal(name) {
4
    this.name = name;
5
}
6
​
7
Animal.prototype.speak = function() {
8
    console.log(this.name, 'speaks.');
9
}
10
​
11
class Dog extends Animal {
12
    speak() {
13
        console.log(this.name, 'barks.');
14
    }
15
}
16
​
17
let spot = new Dog('Spot');
18
spot.speak();
19
​
20
spot = new Animal('Spot');
21
spot.speak();
```

### Superclass Calls Using the _super_ Keyword
  * We use the _super_ keyword to call functions on an object's parent.

#### EXAMPLE

```
1
'use strict';
2
​
3
class Animal {
4
    constructor(name) {
5
        this.name = name;
6
    }
7
    speak() {
8
        console.log(this.name, 'speaks.');
9
    }
10
}
11
​
12
class Dog extends Animal {
13
    speak() {
14
        super.speak();
15
        console.log(this.name, 'barks.');
16
    }
17
}
18
​
19
let spot = new Dog('Spot');
20
spot.speak();
```

### Extending an Object
  * The ability to extend multiple classes from the same superclass (or model multiple object types after the same prototype) is powerful because it provides us with certain implied guarantees about the basic functionality of the subclasses; as extensions of the parent class, subclasses are guaranteed to (at minimum) have the superclass' fields, methods, and functions.

#### EXAMPLE
  * In this example, we call the superclass constructor using super(), override a superclass function (speak()), add an additional property (collarColor), and add a new subclass method (collar()).

```
1
'use strict';
2
​
3
class Animal {
4
    constructor(name) {
5
        this.animalType = 'Animal'
6
        this.name = name;
7
    }
8
    type() {
9
        console.log(this.name, 'is type', this.animalType);
10
    }
11
    speak() {
12
        console.log(this.name, 'speaks.');
13
    }
14
}
15
​
16
class Dog extends Animal {
17
    constructor(name, collarColor) {
18
        super(name);
19
        this.animalType = 'Dog';
20
        this.collarColor = collarColor;
21
    }
22
    speak() {
23
        console.log(this.name, 'barks.');
24
    }
25
    collar() {
26
        console.log(this.name, 'has a', this.collarColor, 'collar.');
27
    }
28
}
29
​
30
let spot = new Dog('Spot', 'red');
31
spot.type();
32
spot.speak();
33
spot.collar();
34
​
35
// Because the Animal constructor only expects one argument,
36
// only the first value passed to it is used
37
spot = new Animal('Spot', 'white');
38
spot.type();
39
spot.speak();
40
try {
41
    spot.collar();
42
}
43
catch (exception) {
44
    console.log(exception.name + ': ' + exception.message
45
    + ' (collar is a method of Dog, not Animal).');
46
}
```
