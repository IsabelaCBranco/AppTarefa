import React from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp, useNavigation, useRoute, NavigationProp } from "@react-navigation/native";
import { useTarefas } from "../context/TarefaContext";
import FormularioTarefa from "../components/FormularioTarefas";

type RootStackParamList = {
    Home: undefined;
    AddTarefa: undefined;
    EditarTarefa: { id: number; titulo: string };
};

const TelaEditarTarefa = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'EditarTarefa'>>();
    const { id, titulo } = route.params;
    const { updateTarefa } = useTarefas();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleUpdate = (novoTitulo: string) => {
        updateTarefa(id, novoTitulo);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <FormularioTarefa onAdd={handleUpdate} initialTitle={titulo} isEditing={true} />
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

export default TelaEditarTarefa;