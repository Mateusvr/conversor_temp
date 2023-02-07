function convertCToF() {
    let celsius = document.getElementById('celsius').value;
    let farenheit = 1.8 * celsius + 32
    let farenheitFixed = farenheit.toFixed(2).replace('.' , ',')
    // A temperatura 25°C é 77°F!
     document.getElementsByTagName('p')[0].innerHTML = 'A temperatura ' + celsius + '°C é ' + farenheitFixed + '°F'
    //alert('Clicou no converter!')
}


function clean() {
    document.getElementsByTagName('p')[0].innerHTML = ''
}

