var Aufgabe_9;
(function (Aufgabe_9) {
    window.addEventListener("load", function () {
        var zaehler = 0;
        var toDoArray = [];
        document.querySelector(".enter").addEventListener("click", function () {
            var toDoItem = {
                text: document.getElementById("textFeldTd").value,
                checkmark: false
            };
            toDoArray.push(toDoItem);
            zaehler = zaehler + 1;
            document.querySelector("#zaehlerNr").innerHTML = zaehler.toString();
            for (var i = 0; i < toDoArray.length; i++) {
                if (i == 0) {
                    var clear = document.getElementById("toDoListItem");
                    clear.innerHTML = "";
                }
                var toDoListItem = document.getElementById("toDoListItem");
                var div = document.createElement("div");
                div.textContent = toDoArray[i].text;
                div.classList.add("newToDo");
                toDoListItem === null || toDoListItem === void 0 ? void 0 : toDoListItem.appendChild(div);
            }
            console.log(zaehler);
        });
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=Aufgabe_9_script.js.map