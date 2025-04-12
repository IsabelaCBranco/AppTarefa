import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TarefaProvider } from "./context/TarefaContext";
import TelaInicial from "./screens/TelaInicial";
import TelaAddTarefa from "./screens/TelaAddTarefa";
import TelaEditarTarefa from "./screens/TelaEditarTarefa";

type RootStackParamList = {
    Home: undefined;
    AddTarefa: undefined;
    EditarTarefa: { id: number; titulo: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <TarefaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={TelaInicial} options={{ title: 'LISTA DE TAREFAS', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#fff', headerTitleAlign:"center" }} />
          <Stack.Screen name="AddTarefa" component={TelaAddTarefa} options={{ title: 'ADICIONAR TAREFA', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#fff', headerTitleAlign:"center" }} />
          <Stack.Screen name="EditarTarefa" component={TelaEditarTarefa} options={{ title: 'EDITAR TAREFA', headerStyle: { backgroundColor: '#000' }, headerTintColor: '#fff', headerTitleAlign:"center" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TarefaProvider>
  );
};

export default App;