import React from 'react';
import './TodosLoading.css';

//recibe las props
function TodosLoading() {
    return (
        <span >
            <p className='loading'>Cargando ..</p>
        </span>
       
    );
}

export { TodosLoading };