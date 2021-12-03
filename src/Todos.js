import React from "react";


function Todos({toDoItemFlag, toDoItem}) {

    // const renderTodos =()=>{
    //     return(
    //         <>
    //         {toDoItem}
    //         </>   
    //     )
    // }

    return(
        <>
        {toDoItemFlag && toDoItem}
        </>
    );
    
}


export default Todos;