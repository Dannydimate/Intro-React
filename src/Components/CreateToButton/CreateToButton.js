import './CreateToButton.css';

function CreateTodoButton({setOpenModal}) {
    return (
        <button
            className="CreateToButton"
            //evento de escuchar
            onClick={
                () => {
                    setOpenModal(state => !state); // llamar al actualizador del estado y enviarle una funcion state para cambiarle el estado (abrir y cerrar el modal)
                }
            }
        >+</button>
    );
}

export { CreateTodoButton };