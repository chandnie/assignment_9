import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    return (
        <Context.Provider
            value={{
             showAddTask, 
             setShowAddTask,
             tasks, 
             setTasks
            }}
        >
            {children}
        </Context.Provider>
    );
};
