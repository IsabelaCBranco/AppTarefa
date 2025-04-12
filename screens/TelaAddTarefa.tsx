import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTarefas } from "../context/TarefaContext";
import FormularioTarefa from "../components/FormularioTarefas";

type RootStackParamList = {
    Home: undefined;
    AddTarefa: undefined;
    EditarTarefa: { id: number; titulo: string };
};

const TelaAddTarefa = () => {
    const { addTarefa } = useTarefas();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleAdd = (titulo: string) => {
        addTarefa(titulo);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <FormularioTarefa onAdd={handleAdd} isEditing={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C3C3C3',
        padding: 10,
    },
});

export default TelaAddTarefa;