(function($){
    $.fn.yasp = function(config) {
        var scrollbox = $('<div id="jq-yasp-scrollbox"></div>');
        var scrollbar = $('<div id="jq-yasp-scrollbar"></div>');
        scrollbox.append(scrollbar);

        var clip = $('<div class="jq-yasp-clip"></div>');

        var target = $(this);

        target.wrap(clip);

        // append scrollbox to the target
        target.append(scrollbox);

    };
}(jQuery));