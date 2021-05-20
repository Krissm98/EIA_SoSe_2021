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
                text: (<HTMLInputElement>document.getElementById("textFeldTd")).value,
                checkmark: false
            };

            toDoArray.unshift(toDoItem);
            for (let i: number = 0; i < toDoArray.length; i++) {
               



                let div: HTMLDivElement =
                    document.createElement("div");
                   

               
                

                div.textContent = toDoArray[0].text;
                document.body.appendChild(div);
               










            }
            console.log(toDoArray);







        });












































    });








































}