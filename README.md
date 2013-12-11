dictionary.js
=============

JavaScript dictionary that supports object keys.

Example usage:
==============

var dict = new Dictionary();

var foo = {"!":3};

var bar = /wow(.*)/i;


dict.i("a",1);

dict.i(2,7);

dict.i(foo,"foooooo");

dict.i(bar,"baaar");

dict.i("a"); // returns 1

dict.i(2); // returns 7

dict.i(foo); // returns foooooo

dict.i(bar); // returns baaar

dict.keys(); // returns [a, 2, {"!":3}, /wow(.*)/i]
