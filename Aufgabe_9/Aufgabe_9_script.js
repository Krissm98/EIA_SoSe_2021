var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", function () {
        var toDoArray = [];
        document.querySelector(".enter").addEventListener("click", function () {
            var toDoItem = {
                text: "NeuesItem",
                checkmark: false
            };
            toDoArray.push(toDoItem);
            for (var i = 0; i < toDoArray.length; i++) {
                var div = document.createElement("div");
                div.textContent = toDoArray[i].text;
            }
            console.log(toDoArray);
        });
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=Aufgabe_9_script.js.map