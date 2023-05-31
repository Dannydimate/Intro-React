import React from "react";
import { TodoContext } from "../TodoContext/TodoContext"
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);
    //nuevo estdao local
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault(); //metodo para prevenir la accion de prevent default, es decir se recargue la pagina solo al añadir o eliminar
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
       setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label> Crear nuevo TODO </label>
            <textarea
                placeholder="Agregar nuevos TODOs"
                className="TodoForm-label"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button-cancel" onClick={onCancel}> Cancelar </button>
                <button type="submit"className="TodoForm-button-add" > Añadir </button>
            </div>

        </form>
    );
}

export { TodoForm };