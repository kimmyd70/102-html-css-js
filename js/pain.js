var pain = prompt('Do you have back pain?');
var suggest;
if (pain === 'yes') {
    suggest = 'Yikes! Try a firm bed';
} else if (pain === 'no') {
    suggest = 'Great! You can sleep anywhere!';
} else {
    suggest = 'Please hit refresh and answer yes or no';
};
document.write('<h3>' + suggest + '</h3>');

//references code written by rkgallaway//