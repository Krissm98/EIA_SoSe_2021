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
        
         
            for (let i: number = 0; i < toDoArray.length; i++) {


                if (i == 0) {
                    const clear = document.getElementById("toDoListItem");
                    clear.innerHTML = ``;
                }

                const toDoListItem: HTMLElement = document.getElementById("toDoListItem");
                const div: HTMLElement = document.createElement("div");
                div.textContent = toDoArray[i].text;
                div.classList.add("newToDo");
                toDoListItem?.appendChild(div);

        



















            }
            console.log(zaehler);

        

         



        });












































    });








































}