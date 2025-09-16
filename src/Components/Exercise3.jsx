function Listapp() {
    let tasks = [
        { id: 1, title: "Learn React", completed: true },
        { id: 2, title: "Do Homework", completed: false },
        { id: 3, title: "Go to Gym", completed: true },
        { id: 4, title: "Read a Book", completed: false },
    ];

    return (
        <div>
            <hr/>
            <h1>My Tasks</h1>
            {tasks.map((task) => (
                <p key={task.id} style={{ color: task.completed ? "green" : "red" }}>
                    {task.title}
                </p>
            ))}
        </div>
    );
}

export default Listapp;
