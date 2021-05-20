var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", function () {
        var toDoArray = [
            {
                text: "Hallo",
                checkmark: false
            }
        ];
        var toDoItem = {
            text: "NeuesItem",
            checkmark: false
        };
        document.querySelector(".enter").addEventListener("click", function () {
            for (var i = 0; i < toDoArray.length; i++) {
                var div = document.createElement("div");
                div.textContent = toDoArray[0].text;
                toDoArray.push(toDoItem);
            }
            console.log(toDoArray);
        });
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=Aufgabe_9_script.js.map