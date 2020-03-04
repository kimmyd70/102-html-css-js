function name() {
    var name = prompt('Hi! What\'s your name?');
   return document.write('<h3>'+ 'Welcome, ' + name + '</h3>');
}

function pain() {
    var pain = prompt('Do you have back pain?');
var suggest;
if (pain === 'yes') {
    suggest = 'Yikes! Try a firm bed';
} else if (pain === 'no') {
    suggest = 'Great! You can sleep anywhere!';
} else {
    suggest = 'Please hit refresh and answer yes or no';
};
    return document.write('<h3>' + suggest + '</h3>');
    ;
}

function checkSite() {
    var check;
    check = 'Check our site for suggestions!'

    return document.write('<h3>' + check + '</h3>');
}