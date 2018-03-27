import "./styles/styles";
import Vue from "vue";

(function($) {
    var s,
        spanizeLetters = {
            settings: {
                letters: $('.mast__title'),
            },
            init: function() {
                s = this.settings;
                this.bindEvents();
            },
            bindEvents: function() {
                s.letters.html(function(i, el) {
                    //spanizeLetters.joinChars();
                    var spanizer = $.trim(el).split("");
                    return '<span>' + spanizer.join('</span><span>') + '</span>';
                });
            },
        };
    spanizeLetters.init();
})(jQuery);