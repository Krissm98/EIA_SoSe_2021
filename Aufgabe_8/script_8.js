var Aufgabe_8;
(function (Aufgabe_8) {
    window.addEventListener("load", function () {
        document.body.style.backgroundColor = "#000000";
        var alleSamples = [new Audio("assets/eigene_Sounds/kick_low.mp3"), new Audio("assets/eigene_Sounds/Lo-Fi_HiHat.mp3"), new Audio("assets/eigene_Sounds/Lo-Fi_Snare.mp3"), new Audio("assets/eigene_Sounds/Ride.mp3"), new Audio("assets/eigene_Sounds/Chord_1_Short.mp3"), new Audio("assets/eigene_Sounds/Chord_2_short.mp3"), new Audio("assets/eigene_Sounds/Chimes.mp3"), new Audio("assets/eigene_Sounds/Chord_3_fixed.mp3"), new Audio("assets/eigene_Sounds/Trumpet_one_shot.mp3")];
        var index = 0;
        document.querySelector(".button1").addEventListener("click", function () { playMp3(alleSamples[0]); });
        document.querySelector(".button2").addEventListener("click", function () { playMp3(alleSamples[1]); });
        document.querySelector(".button3").addEventListener("click", function () { playMp3(alleSamples[2]); });
        document.querySelector(".button4").addEventListener("click", function () { playMp3(alleSamples[3]); });
        document.querySelector(".button5").addEventListener("click", function () { playMp3(alleSamples[4]); });
        document.querySelector(".button6").addEventListener("click", function () { playMp3(alleSamples[5]); });
        document.querySelector(".button7").addEventListener("click", function () { playMp3(alleSamples[6]); });
        document.querySelector(".button8").addEventListener("click", function () { playMp3(alleSamples[7]); });
        document.querySelector(".button9").addEventListener("click", function () { playMp3(alleSamples[8]); });
        document.querySelector("#play_Button").addEventListener("click", function () {
            var myInterval = setInterval(function machine_single() {
                playMp3(alleSamples[index]);
                index += 1;
                if (index > 3)
                    index = 0;
                document.querySelector("#stopp_Button").addEventListener("click", function () {
                    clearInterval(myInterval);
                });
            }, 500);
        });
        document.getElementById("remix_Button").addEventListener("click", function () {
            var myInterval2 = setInterval(function remix() {
                playMp3(alleSamples[index]);
                index = Math.floor(Math.random() * 9);
                document.querySelector("#stopp_Button_2").addEventListener("click", function () {
                    clearInterval(myInterval2);
                });
            }, 500);
        });
        function playMp3(mp3Sample) {
            if (mp3Sample === void 0) { mp3Sample = new Audio; }
            mp3Sample.currentTime = 0;
            mp3Sample.play();
        }
        document.getElementById("play_Button").addEventListener("click", function () {
            document.getElementById("play_Button").classList.add("is-hidden");
            document.getElementById("stopp_Button").classList.remove("is-hidden");
        });
        document.getElementById("stopp_Button").addEventListener("click", function () {
            document.getElementById("stopp_Button").classList.add("is-hidden");
            document.getElementById("play_Button").classList.remove("is-hidden");
        });
        document.getElementById("remix_Button").addEventListener("click", function () {
            document.getElementById("remix_Button").classList.add("is-hidden");
            document.getElementById("stopp_Button_2").classList.remove("is-hidden");
        });
        document.getElementById("stopp_Button_2").addEventListener("click", function () {
            document.getElementById("stopp_Button_2").classList.add("is-hidden");
            document.getElementById("remix_Button").classList.remove("is-hidden");
        });
        document.getElementById("delete_Button").addEventListener("click", function () {
            alleSamples.length = 0;
        });
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 49) {
                playMp3(alleSamples[0]);
            }
            else if (event.keyCode == 50) {
                playMp3(alleSamples[1]);
            }
            else if (event.keyCode == 51) {
                playMp3(alleSamples[2]);
            }
            else if (event.keyCode == 52) {
                playMp3(alleSamples[3]);
            }
            else if (event.keyCode == 53) {
                playMp3(alleSamples[4]);
            }
            else if (event.keyCode == 54) {
                playMp3(alleSamples[5]);
            }
            else if (event.keyCode == 55) {
                playMp3(alleSamples[7]);
            }
            else if (event.keyCode == 56) {
                playMp3(alleSamples[8]);
            }
            else if (event.keyCode == 57) {
                playMp3(alleSamples[6]);
            }
        });
    });
})(Aufgabe_8 || (Aufgabe_8 = {}));
//# sourceMappingURL=script_8.js.map