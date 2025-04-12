import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
    Home: undefined;
    AddTarefa: undefined;
    EditarTarefa: { id: number; titulo: string };
};

interface ItemTarefaProps {
    tarefa: { id: number; titulo: string };
    onDelete: (id: number) => void;
    navigation: NavigationProp<RootStackParamList>;
}

const ItemTarefa: React.FC<ItemTarefaProps> = ({ tarefa, onDelete, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{tarefa.titulo}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.editButton} 
                    onPress={() => navigation.navigate('EditarTarefa', { id: tarefa.id, titulo: tarefa.titulo })} >
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.deleteButton} 
                    onPress={() => onDelete(tarefa.id)} >
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#9B9B9B',
    },
    titleContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        flexWrap: 'wrap',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#9BBD80',
        padding: 5,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#D57D7D',
        padding: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        alignItems: 'center',
    },
});

export default ItemTarefa;