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

let ctx = document.querySelector("canvas").getContext("2d"),

    dashLen = 100,
    dashOffset = dashLen,
    speed = 3,
    txt = "Wg.",
    x = 50,
    i = 0;

ctx.font = "80px 'Corinthia', serif";
ctx.lineWidth = 1;
ctx.lineJoin = "solid";

ctx.strokeStyle = ctx.fillStyle = "rgb(255, 255, 255)";
(function loop() {
    // clear canvas for each frame
    ctx.clearRect(x, 0, 270, 270);

    // calculate and set current line-dash for this char
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);

    // reduce length of off-dash
    dashOffset -= speed;

    // draw char to canvas with current dash-length
    ctx.strokeText(txt[i], x, 70);

    // char done? no, the loop
    if (dashOffset > 0) requestAnimationFrame(loop);
    else {

        // ok, outline done, lets fill its interior before next
        ctx.fillText(txt[i], x, 70);

        // reset line-dash length
        dashOffset = dashLen;

        // get x position to next char by measuring what we have drawn
        // notice we offset it a little by random to increase realism
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

        // lets use an absolute transform to randomize y-position a little
        ctx.setTransform(1, 0, 0, 1, 0, 0 * Math.random());

        // and just cause we can, rotate it a little too to make it even
        // more realistic
        ctx.rotate(Math.random() * 0.005);

        // if we still have chars left, loop animation again for this char
        if (i < txt.length) requestAnimationFrame(loop);
    }
})(); // just to self-invoke the loop