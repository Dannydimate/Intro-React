import React from "react";

//creando el customHook. persistencia de datos
function useLocalStorage(itemName, initialValue) {
    //estados
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() =>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
    
                let parsedItem;
    
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error
    };

}

export { useLocalStorage };

//renderizar arrays (lista de tareas )
/*const defaultTodos = [
  { text: 'Investigar como funciona la libreria de React', completed: true },
  { text: 'Descargar dependencias de React', completed: true },
  { text: 'Iniciar project1', completed: false },
  { text: 'Crear project2', completed: true },
  { text: 'Ejecutar project2', completed: false },
  { text: 'finalizar project2', completed: false},
  { text: 'consumo de servicios Axus', completed: false},
];*/