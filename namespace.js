load("console.js");


// Simple pattern 1

var myNameSpace = ( function() {
    var bb = { };
    bb.printMe = function() { 
            console.log('hi there');
    } ;
    return bb;
} ) ();

myNameSpace.printMe();

// Simple pattern 2
var myOtherNameSpace = ( function() {
    var bb = { };
    bb.printMe = function() { 
            console.log('hi there');
    } ;
    return {
        printMe : function(inputText) { console.log(inputText); } ,
        printMeTwice : function(inputText) { console.log(inputText);console.log(inputText); } ,
    };
} ) ();

myOtherNameSpace.printMeTwice('hi there. Here I am.');

