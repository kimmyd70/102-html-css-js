// test these in the console; app.js loaded in HEAD of the index//

function myFaveColor(){
    console.log('Kim\'s fave color is: Cobalt');

}

//MUST provide a **parameter** when you call the function (); when you put the stuff//
//in the () it becomes an **arguement**//
//if fn wants a string, it will take a number or concatonate//

function faveColor(color) {
    console.log('Kim\'s Fave color is: ' + color);
}

//there is a second way to write functions--look it up//

var sayHelloCookie = function(){
    return "Hello Cookie";
}

var sayHello = function (person){
    var response = person;
    return "Hello " = response;
}

function personsFaveColor(name, color){
    console.log(name + '\'s fave color is: ' + color);
}