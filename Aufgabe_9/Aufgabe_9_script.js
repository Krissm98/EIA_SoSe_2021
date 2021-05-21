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
            var clear = document.getElementById("toDoListItem");
            clear.innerHTML = "";
            var _loop_1 = function (i) {
                var toDoListItem = document.getElementById("toDoListItem");
                var div = document.createElement("div");
                div.textContent = toDoArray[i].text;
                div.classList.add("newToDo");
                var trashcan = document.createElement("i");
                trashcan.classList.add("far", "fa-trash-alt");
                trashcan.addEventListener("click", function () {
                    div.remove();
                    toDoArray = toDoArray.filter(function (value) {
                        return value.text != toDoArray[i].text;
                    });
                    zaehler = zaehler - 1;
                    document.querySelector("#zaehlerNr").innerHTML = zaehler.toString();
                });
                var circle = document.createElement("i");
                circle.classList.add("far", "fa-circle");
                var circleChecked = document.createElement("i");
                circleChecked.classList.add("far", "fa-check-circle");
                if (toDoArray[i].checkmark == false) {
                    circleChecked.classList.add("isHidden");
                }
                else {
                    circle.classList.add("isHidden");
                }
                circle.addEventListener("click", function () {
                    circle.classList.add("isHidden");
                    circleChecked.classList.remove("isHidden");
                    toDoArray[i].checkmark = true;
                });
                circleChecked.addEventListener("click", function () {
                    circleChecked.classList.add("isHidden");
                    circle.classList.remove("isHidden");
                    toDoArray[i].checkmark = false;
                });
                toDoListItem === null || toDoListItem === void 0 ? void 0 : toDoListItem.appendChild(div);
                div.appendChild(trashcan);
                div.appendChild(circle);
                div.appendChild(circleChecked);
            };
            for (var i = 0; i < toDoArray.length; i++) {
                _loop_1(i);
            }
            console.log(toDoArray);
        });
    });
})(Aufgabe_9 || (Aufgabe_9 = {}));
//# sourceMappingURL=Aufgabe_9_script.js.map