import './TodoList.css';

function TodoList({children}) {
    return (
        <section className="TodoList">
            <ul>
                {children}
            </ul>
        </section>
    );
}

export {TodoList};