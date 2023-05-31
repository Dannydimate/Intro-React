import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoSearch.css';

//recibe las props
function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)

    return (
        <input
            placeholder="Buscar en React"
            className="TodoSearch"
            value={searchValue}
            //escuchar eventos
            onChange={(event) => {
                //guardar en el nuevo estado
                setSearchValue(event.target.value);

            }}
        />
    );
}

export { TodoSearch };