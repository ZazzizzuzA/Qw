import "./styles/styles";
import Vue from "vue";
import Vivus from "vivus";

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

// let container = document.getElementById('containerLogotype');
let svgAnim = new Vivus('logotype', {
    type: "oneByOne",
    duration: 400,
    start: 'autostart',
}, () => {
    document.getElementById('paths').setAttribute("fill", "white");
})