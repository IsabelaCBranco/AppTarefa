import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

interface FormularioTarefaProps {
    onAdd: (titulo: string) => void;
    initialTitle?: string;
    isEditing: boolean;
}

const FormularioTarefa: React.FC<FormularioTarefaProps> = ({ onAdd, initialTitle = '', isEditing }) => {
    const [titulo, setTitulo] = useState(initialTitle);

    useEffect(() => {
        setTitulo(initialTitle);
    }, [initialTitle]);

    const handleAddTarefa = () => {
        if (titulo.trim()) {
            onAdd(titulo);
            if (!isEditing) {
                setTitulo('');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.retangulo}>
                <TextInput 
                    placeholder="Título da tarefa"
                    placeholderTextColor="#888"
                    value={titulo}
                    onChangeText={setTitulo}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.saveButton}
                    onPress={handleAddTarefa}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    retangulo: {
        flex:1,
        padding: 30,
        backgroundColor: '#000',
        marginBottom: 80,
        borderRadius: 15,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        color: '#fff',
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default FormularioTarefa;