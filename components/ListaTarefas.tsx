import React from 'react';
import { FlatList } from 'react-native';
import ItemTarefa from './ItemTarefa';
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
    Home: undefined;
    AddTarefa: undefined;
    EditarTarefa: { id: number; titulo: string };
};

interface ListaTarefasProps {
    tarefas: { id: number; titulo: string }[];
    onDelete: (id: number) => void;
    navigation: NavigationProp<RootStackParamList>;
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefas, onDelete, navigation }) => {
    return (
        <FlatList 
            data={tarefas}
            renderItem={({ item }) => <ItemTarefa tarefa={item} onDelete={onDelete} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
        />
    );
};

export default ListaTarefas;