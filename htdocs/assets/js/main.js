// Custom javascript
$(document).ready(function(){

});
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top - 200;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.fade-in').each(function () {
        if (isScrolledIntoView(this) === true && !$(this).hasClass('animated')) {
          $(this).fadeTo(750, 1).addClass('animated');
          console.log('gotcha');
        }
    });
});
