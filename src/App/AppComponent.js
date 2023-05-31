import React from "react";
import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodosLoading } from "../Components/TodosLoading/TodosLoading";
import { TodosError } from "../Components/TodosError/TodosError";
import { TodosCreate } from "../Components/TodosCreate/TodosCreate";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../Components/CreateToButton/CreateToButton";
import { TodoContext } from "../TodoContext/TodoContext"
import { Modal } from "../Modal/Modal";

function AppComponent() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodosCreate />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            
            {openModal && (
                <Modal>
                <TodoForm>
                </TodoForm>
            </Modal>
            )}
        </>
    );
}

export { AppComponent };

//creando componentes
/*renderizando elementos en una lista se debe enviar la propiedad especial key a nuestros componenetes para
que react pueda identicar cada uno de los componentes dentro de una lista*/