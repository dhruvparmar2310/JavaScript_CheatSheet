// $(() => {
//     console.log('DOCUMENT IS READY!');
//     $('h1').css('color', 'red');
//     $('h1').css({
//       fontFamily: 'sans-serif',
//       cursor: 'pointer',
//     });
//     $('h1').on('click', () => {
//       alert('WOUW');
//     });
//     $('li').css('font-family', 'sans-serif');
//     $('li').each(function(i) {
//       if (i % 2 === 0) {
//         $(this).css('color', 'green');
//       } else {
//         $(this).css('color', 'orange');
//       }
//     });
//   });

console.log('DOCUMENT IS READY!');
$('h1').css('color', 'red');
$('#heading5').css('color', 'blue');
$('h1').css(
    {
        'font-family': 'sans-serif',
        cursor: 'pointer'
    }
);
$('#heading5').css(
    {
        padding: '5px',
        border: '2px solid #000',
        'font-family': 'sans-serif',
        cursor: 'progress'
    }
);
$('h1').on('click', () => {
    alert('h1 tag is clicked.');
});
$('li').css('font-family', 'sans-serif');
$('li').css('color', 'red');
$('li').each(function(i) {
    if (i % 2 === 0) {
        $(this).css('color', 'green');
    } 
    else {
        $(this).css('color', 'orange');
    }
});
