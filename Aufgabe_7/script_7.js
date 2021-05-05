var Aufgabe_7;
(function (Aufgabe_7) {
    window.addEventListener("load", function () {
        document.querySelector(".button1").addEventListener("click", function () { playMp3("assets/kick.mp3"); });
        document.querySelector(".button2").addEventListener("click", function () { playMp3("assets/hihat.mp3"); });
        document.querySelector(".button3").addEventListener("click", function () { playMp3("assets/snare.mp3"); });
        document.querySelector(".button4").addEventListener("click", function () { playMp3("assets/A.mp3"); });
        document.querySelector(".button5").addEventListener("click", function () { playMp3("assets/C.mp3"); });
        document.querySelector(".button6").addEventListener("click", function () { playMp3("assets/F.mp3"); });
        document.querySelector(".button7").addEventListener("click", function () { playMp3("assets/G.mp3"); });
        document.querySelector(".button8").addEventListener("click", function () { playMp3("assets/laugh-1.mp3"); });
        document.querySelector(".button9").addEventListener("click", function () { playMp3("assets/laugh-2.mp3"); });
        function playMp3(mp3_Sample) {
            var sound = new Audio(mp3_Sample);
            sound.play();
        }
        document.body.style.backgroundColor = "black";
    });
})(Aufgabe_7 || (Aufgabe_7 = {}));
//# sourceMappingURL=script_7.js.map