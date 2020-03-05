function name() {
    var name = prompt('Hi! What\'s your name?');
   return document.write('<h3>'+ 'Welcome, ' + name + '</h3>');
}


function pain(){
    
    var suggest;
    var fixIt;
    var pain = prompt('Do you have back pain?');
    
    while (pain !== 'yes' && pain !== 'no') {   
        fixIt = prompt ('Please answer yes or no');
        pain = fixIt;
    }
        if (pain === 'yes') {
        suggest = 'Yikes! Try a firm bed';
        document.write('<h3>' + suggest + '</h3>');
        
        } else if (pain === 'no') {
        suggest = 'Great! You can sleep anywhere!';
        document.write('<h3>' + suggest + '</h3>');    
        }
}

function checkSite() {
    var check;
    check = 'Check our site for suggestions!';
    return document.write('<h3>' + check + '</h3>');
}

function itemPrint() {
    var i = 0;
    var firmBed = prompt('Hi! How many firm beds do you want to order?');
    while (i < firmBed) {
        i++;
        document.write('<h3>'+ 'firm bed ' + i + ' ordered' + '</h3>');
    }
}
