var Aufgabe_7;
(function (Aufgabe_7) {
    window.addEventListener("load", function () {
        document.body.style.backgroundColor = "black";
        var alleSamples = [new Audio("assets/kick.mp3"), new Audio("assets/hihat.mp3"), new Audio("assets/snare.mp3"), new Audio("assets/A.mp3"), new Audio("assets/C.mp3"), new Audio("assets/F.mp3"), new Audio("assets/G.mp3"), new Audio("assets/laugh-1.mp3"), new Audio("assets/laugh-2.mp3")];
        document.querySelector(".button1").addEventListener("click", function () { playMp3(alleSamples[0]); });
        document.querySelector(".button2").addEventListener("click", function () { playMp3(alleSamples[1]); });
        document.querySelector(".button3").addEventListener("click", function () { playMp3(alleSamples[2]); });
        document.querySelector(".button4").addEventListener("click", function () { playMp3(alleSamples[3]); });
        document.querySelector(".button5").addEventListener("click", function () { playMp3(alleSamples[4]); });
        document.querySelector(".button6").addEventListener("click", function () { playMp3(alleSamples[5]); });
        document.querySelector(".button7").addEventListener("click", function () { playMp3(alleSamples[6]); });
        document.querySelector(".button8").addEventListener("click", function () { playMp3(alleSamples[7]); });
        document.querySelector(".button9").addEventListener("click", function () { playMp3(alleSamples[8]); });
        document.querySelector(".playButton").addEventListener("click", function () {
            setInterval(function machine_single() {
                drum_Machine[drum_Playing].play();
                drum_Playing += 1;
                if (drum_Playing > 3)
                    drum_Playing = 0;
            }, 500);
        });
        function playMp3(mp3_Sample) {
            if (mp3_Sample === void 0) { mp3_Sample = new Audio; }
            mp3_Sample.play();
        }
        var drum_Machine = [alleSamples[0], alleSamples[1], alleSamples[2], alleSamples[1]];
        var drum_Playing = 0;
    });
})(Aufgabe_7 || (Aufgabe_7 = {}));
//# sourceMappingURL=script_7.js.map