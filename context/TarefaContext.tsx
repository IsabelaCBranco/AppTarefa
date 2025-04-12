import React, { createContext, useState, useEffect, useContext } from "react";
import { initDatabase, getTarefa, addTarefa as addTarefaToDb, deletarTarefa as deleteTarefaFromDb, updateTarefa as updateTarefaInDb } from "../lib/dataBase/database";

interface Tarefa {
    id: number;
    titulo: string;
}

interface TarefaContextType {
    tarefas: Tarefa[];
    addTarefa: (titulo: string) => void;
    removeTarefa: (id: number) => void;
    updateTarefa: (id: number, novoTitulo: string) => void;
}

const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

export const TarefaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        initDatabase();
        loadTarefas();
    }, []);

    const loadTarefas = () => {
        const tarefasFromDb: Tarefa[] = getTarefa();
        setTarefas(tarefasFromDb);
    };

    const addTarefa = (titulo: string) => {
        const id: number = addTarefaToDb(titulo);
        setTarefas([...tarefas, { id, titulo }]);
    };

    const removeTarefa = (id: number) => {
        deleteTarefaFromDb(id);
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    };

    const updateTarefa = (id: number, novoTitulo: string) => {
        updateTarefaInDb(id, novoTitulo);
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, titulo: novoTitulo } : tarefa
        ));
    };

    return (
        <TarefaContext.Provider value={{ tarefas, addTarefa, removeTarefa, updateTarefa }}>
            {children}
        </TarefaContext.Provider>
    );
};

export const useTarefas = () => {
    const context = useContext(TarefaContext);
    if (!context) throw new Error('useTarefas deve ser usado com TarefaProvider');
    return context;
};