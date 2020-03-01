var pain = prompt('Do you have back pain?');
var suggest;
if (pain === 'yes') {
    suggest = 'Yikes! Try a firm bed';
} else if (pain === 'no') {
    suggest = 'Great! You can sleep anywhere!';
} else {
    suggest = 'Please answer yes or no';
};
document.write('<h1>' + suggest + '</h1>');

//references code written by rkgallaway//