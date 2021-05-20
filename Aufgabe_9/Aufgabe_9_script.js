var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", function () {
        var toDoArray = [
            {
                text: "Hallo",
                checkmark: false
            }
        ];
        document.querySelector(".enter").addEventListener("click", function () {
            for (var i = 0; i < toDoArray.length; i++) {
                var toDoItem = {
                    text: "NeuesItem",
                    checkmark: false
                };
                toDoArray.push(toDoItem);
                var div = document.createElement("div");
                div.textContent = toDoArray[0].text;
            }
            console.log(toDoArray);
        });
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=Aufgabe_9_script.js.map