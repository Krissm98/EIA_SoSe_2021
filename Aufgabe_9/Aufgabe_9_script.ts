namespace Aufgabe_9 {


    window.addEventListener("load", function (): void {

        let zaehler: number = 0;

        interface ToDoBlocks {
            text: string;
            checkmark: boolean;
        }

        let toDoArray: ToDoBlocks[] = [


        ];


        document.querySelector(".enter").addEventListener("click", function (): void {






            let toDoItem: ToDoBlocks = {
                text: (<HTMLInputElement>document.getElementById("textFeldTd")).value,
                checkmark: false
            };

            toDoArray.push(toDoItem);
            zaehler = zaehler + 1;
            document.querySelector("#zaehlerNr").innerHTML = zaehler.toString();

            const clear: HTMLElement = document.getElementById("toDoListItem");
            clear.innerHTML = ``;

            for (let i: number = 0; i < toDoArray.length; i++) {





                const toDoListItem: HTMLElement = document.getElementById("toDoListItem");
                const div: HTMLDivElement = document.createElement("div");
                div.textContent = toDoArray[i].text;
                div.classList.add("newToDo");



                const trashcan: HTMLElement = document.createElement("i");
                trashcan.classList.add("far", "fa-trash-alt");

                trashcan.addEventListener("click", function (): void {
                    div.remove();
                    toDoArray = toDoArray.filter(function (value: ToDoBlocks): boolean {
                        return value.text != toDoArray[i].text;

                    });

                    zaehler = zaehler - 1;
                    document.querySelector("#zaehlerNr").innerHTML = zaehler.toString();

                });




                const circle: HTMLElement = document.createElement("i");
                circle.classList.add("far", "fa-circle");



                const circleChecked: HTMLElement = document.createElement("i");
                circleChecked.classList.add("far", "fa-check-circle");

                if (toDoArray[i].checkmark == false) { 
                    circleChecked.classList.add("isHidden"); 
                }
                else { 
                    circle.classList.add("isHidden"); 
                }

                circle.addEventListener("click", function (): void {
                    circle.classList.add("isHidden");
                    circleChecked.classList.remove("isHidden");
                    toDoArray[i].checkmark = true;
                });
                circleChecked.addEventListener("click", function (): void {
                    circleChecked.classList.add("isHidden");
                    circle.classList.remove("isHidden");
                    toDoArray[i].checkmark = false;
                    });



                toDoListItem?.appendChild(div);
                div.appendChild(trashcan);
                div.appendChild(circle);
                div.appendChild(circleChecked);






















            }
            console.log(toDoArray);







        });












































    });








































}