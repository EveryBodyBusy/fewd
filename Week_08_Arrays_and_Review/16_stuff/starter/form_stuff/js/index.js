var clicks = 0;

$('#blue > button').click(function() {
    recordClick();
});

$('#red input[type="submit"]').click(function(e) {
    recordClick();

    e.preventDefault();//prevents the default submission form so it doesn't refresh the page.
});


//OR

// $('form').submit(function(e) {
    
//     e.preventDefault();
// });


function recordClick() {
    clicks += 1;
    $('#click-count').html(clicks);
}