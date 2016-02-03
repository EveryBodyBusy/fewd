$('#submit').click(handleSubmit);

function handleSubmit() {
    console.log('submitted!');

    var input = $('#celsius-input');
    var celsius = parseFloat(input.val());

    if (isNaN(celsius)) {
        
        alert('Please enter a valid temperature.');
        input.val('');

    } else { // is valid

        var fahrenheit = celsiusTofahrenheit(celsius);
        $('#fahrenheit').html(fahrenheit.toFixed(2) + '&deg;F');
    }
        if (fahrenheit < 45) {
            makeCold();
        } else if (fahrenheit < 90) {
            makeMild();
        } else {
            makeHot();
        } 

}

function celsiusTofahrenheit(degreesCelsius) {
    return (degreesCelsius * 9/5) + 32; 
    
}

function makeCold() {
    resetClasses();
    $('body').addClass('cold');
}

function makeMild() {
    resetClasses();
    $('body').addClass('mild');
}

function makeHot() {
    resetClasses();
    $('body').addClass('hot');
}

function resetClasses() {
    $('body').removeClass('cold mild hot');
}