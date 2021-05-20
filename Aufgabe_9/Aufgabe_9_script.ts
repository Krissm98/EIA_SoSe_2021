namespace Aufgabe_9 {


    window.addEventListener("load", function (): void {
       
       
       
        interface ToDoBlocks {
            text: string;
            checkmark: boolean;
        }

        let toDoArray: ToDoBlocks[] = [
            {
                text: "Hallo",
                checkmark: false
            }



        ];

        document.querySelector(".enter").addEventListener("click", function (): void {
            for (let i: number = 0; i < toDoArray.length; i++) {
                let toDoItem: ToDoBlocks = {
                    text: "NeuesItem",
                    checkmark: false
                };

                toDoArray.push(toDoItem);



                let div: HTMLDivElement =
                    document.createElement("div");




                div.textContent = toDoArray[0].text;







            }
            console.log(toDoArray);







        });












































    });








































}