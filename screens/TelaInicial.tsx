import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useTarefas } from "../context/TarefaContext";
import ListaTarefas from "../components/ListaTarefas";

type RootStackParamList = {
    Home: undefined;
    AddTarefa: undefined;
    EditarTarefa: { id: number; titulo: string };
};

const TelaInicial = () => {
    const { tarefas, removeTarefa } = useTarefas();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.retangulo}>
                <ListaTarefas tarefas={tarefas} onDelete={removeTarefa} navigation={navigation} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addTarefaButton}
                    onPress={() => navigation.navigate('AddTarefa')} >
                
                    <Text style={styles.buttonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C3C3C3',
        padding: 10,
        justifyContent: 'space-between',
    },
    retangulo: {
        flex:1,
        padding: 0,
        backgroundColor: '#000',
        marginBottom: 80,
        borderRadius: 15,
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    addTarefaButton: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },

});

export default TelaInicial;