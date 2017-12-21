var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

setTimeout(init, 100);

function init() {
    $("body").append("<div class='js-widget-header'></div>");
    $('.js-widget-header').css({position: 'fixed', top: '-60px', width: '100%', height: '60px', background: 'rgba(73,82,89,0.2)', 'z-index': '9999', left: '0', opacity: '0', 'padding': '0 40px'});
    $('.js-widget-header').append('<a class="js-widget-btn-smart">Smart Bar</a>');
    $('.js-widget-btn-smart').css({'border-radius': '5px', height: '46px', 'font-size': '1.375rem', 'line-height': '46px', color: '#65717b', 'margin-top': '7px', padding: '0 15px', display: 'inline-block', 'background-color': '#ffffff', 'cursor': 'pointer'});
    $('.js-widget-header').animate({top: '0', opacity: 1}, 500);

    $('.js-widget-btn-smart').on('click', function() {
        $('.js-widget-header').animate({top: '-60px', opacity: 0}, 500);
    });
}
