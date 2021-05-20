namespace Aufgabe_9 {


    window.addEventListener("load", function (): void {
       
       
       
        interface ToDoBlocks {
            text: string;
            checkmark: boolean;
        }

        let toDoArray: ToDoBlocks[] = [
           

        ];

        document.querySelector(".enter").addEventListener("click", function (): void {
            let toDoItem: ToDoBlocks = {
                text: "NeuesItem",
                checkmark: false
            };

            toDoArray.push(toDoItem);
            for (let i: number = 0; i < toDoArray.length; i++) {
               



                let div: HTMLDivElement =
                    document.createElement("div");




                div.textContent = toDoArray[i].text;







            }
            console.log(toDoArray);







        });












































    });








































}