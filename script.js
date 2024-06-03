let todos = [
    { title: "title 1", date: new Date(), id: Math.random().toString(36).slice(2), isCompleted: false },
    { title: "title 2", date: new Date(), id: Math.random().toString(36).slice(2), isCompleted: false },
    { title: "title 3", date: new Date(), id: Math.random().toString(36).slice(2), isCompleted: false },
]

// handle create 
const handleCreate = () => {
    let todo = { title: "title 4", date: new Date(), id: Math.random().toString(36).slice(2), isCompleted: false }
    console.log("todo before push =>", todos)
    todos.push(todo)
    console.log("todo after push =>", todos)
}

// handle read
const handleRead = () => {
    console.log(todos)
}

// handleUpdate 
const handleUpdate = () => {
    let updatedTodos = todos.map((todo) => {
        if (todo.title === "title 2") {
            return { ...todo, isCompleted: true };
        } else {
            return todo;
        }
    });
    todos = updatedTodos;
}

// handleDelete 
const handleDelete = () => {
    let todosAfterDelete = todos.filter((todo) => {
        return todo.title !== "title 3";
    });
    todos = todosAfterDelete;
}


// show table 
const showTable = () => {
    const tableStartingCode = `
        <div class="table-responsive"> <table class="table table-striped table-bordered table-hover text-center">
    `;
    const tableHead = `
        <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Id</th>
                <th>isCompleted</th>
            </tr>
        </thead>
    `;
    const tableEndingCode = `
            </table>
        </div>
    `;

    let tableBody = "<tbody>";
    todos.forEach((currElem, index) => {
        tableBody += `
            <tr>
                <td>${index + 1}</td>
                <td>${currElem.title}</td>
                <td>${currElem.date}</td>
                <td>${currElem.id}</td>
                <td>${currElem.isCompleted ? "Yes" : "No"}</td>
            </tr>
        `;
    });
    tableBody += "</tbody>";

    const table = `${tableStartingCode}${tableHead}${tableBody}${tableEndingCode}`;
    document.getElementById("output").innerHTML = table;
};
