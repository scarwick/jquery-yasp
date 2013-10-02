(function($){
    var BODY = $('body');
    var WINDOW = $(window);
    var initX = 0;  // Stores the current mouseX when you click the scrollbar
    var initY = 0;  // Stores the current mouseY when you click the scrollbar
    var initScrollX = 0; // Stores the scrollbars current X scroll position
    var initScrollY = 0; // Stores the scrollbars current Y scroll position
    
    var boxHeight = 0;
    var areaHeight = 0;
    var barHeight = 0;
    
    var minScroll = 0;
    var maxScroll = 0;
    
    $.fn.yasp = function(config) {
        
        /**
         * Options:
         * width
         * height
         * 
         */
        
        /* Specify orientation [vertical/horizontal/both]
        
        /* Scrollbar elements */
        var yaspHtml = $('<div class="jq-yasp-scrollbox jq-yas-horizontal-box"><div class="jq-yasp-scroll-padding"><div class="jq-yasp-scrollbar jq-yasp-horizontal-bar"></div></div></div>');

        /* Box elements */
        var clip = $('<div class="jq-yasp-clip"></div>');

        /* Target elements */
        var target = $(this);

        /* append scrollbox to the target */
        target.append(yaspHtml);
        scrollbox = $('.jq-yasp-scrollbox');
        scrollpadding = scrollbox.find('.jq-yasp-scroll-padding');
        scrollbar = scrollbox.find('.jq-yasp-scrollbar');
        
        /* Get scrollbar elements dimension */
        boxHeight = scrollbox.height();
        areaHeight = scrollpadding.height();
        barHeight = scrollbar.height();
        
        /* Set Max values */
        maxScroll = areaHeight - barHeight;

        /* Mouse move handler */
        var mousemoveHandler = function(e){
            scrollX = e.clientX - initX;
            scrollY = e.clientY - initY;
            newScrollY = initScrollY + scrollY;
            if(newScrollY < minScroll){
                newScrollY = minScroll;
            }
            if(newScrollY > maxScroll) {
                newScrollY = maxScroll;
            }
            
            scrollbar.css({
                top:newScrollY
            });
        };
        
        /* Mouse Down */
        scrollbar.mousedown(function(e){
            initX = e.clientX;  // The current mouseX
            initY = e.clientY;  // The current mouseY
            initScrollX = parseFloat(scrollbar.css('left'), 10);
            initScrollY = parseFloat(scrollbar.css('top'), 10);
            
            
            WINDOW.bind('mousemove', mousemoveHandler);
            return false;
        });
        
        /* Mouse Up */
        WINDOW.mouseup(function(){
            WINDOW.unbind('mousemove', mousemoveHandler);
            return false;
        });
    };
}(jQuery));