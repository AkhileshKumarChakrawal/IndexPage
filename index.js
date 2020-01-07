$('nav li').hover(
    function() {
        $('div', this).stop().slideDown();
    },
    function() {
        $('div', this).stop().slideUp();
    }
);
