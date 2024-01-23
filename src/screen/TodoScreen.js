import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FlatList, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";
import img from "../../assets/camaleon.png"

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  //el objeto de la tarea a editar
  const [updateTodo, setUpdateTodo] = useState(null);
  const [idEdit, setIdEdit] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = () => {
    if (todo == "") {
      alert("Escribe algo");
    } else {
      setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
      setTodo("");
    }
  };
  //eliminar
  const handleDeleteTodo = (id) => {
    const updateTodoList = todoList.filter((e) => e.id != id);
    setTodoList(updateTodoList);
    setUpdateTodo(null);
  };
  //boton de lapiz
  const handleUpdateTodo = (item) => {
    setUpdateTodo(item);
    setTodo(item.title);
    setIdEdit(item.id);
  };
  //boton de guardar
  const UpdateBoton = () => {
    console.log(idEdit);
    const indice = todoList.findIndex((e) => {
      return e.id == idEdit;
    });
    console.log(indice);
    todoList[indice].title = todo;
    setTodo("");
    setUpdateTodo(null);
    setIdEdit("");
  };

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          width: 350,
          flexWrap: "wrap",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            flex: 1,
            flexWrap: "wrap",
            width: 300,
          }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleUpdateTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16, marginVertical: 50, borderRadius: 6 }}>
     
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 10,
            borderRadius: 6,
            fontSize: 33,
            color: "#9932CC",
            fontWeight: "900",
            backgroundColor: "#F8F8FF",
          }}
        >
          To-do List
        </Text>
        <TextInput
          style={{
            borderRadius: 6,
            paddingVertical: 20,
            paddingHorizontal: 16,
            fontSize: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            textAlign: "center",
            marginTop: 15,
            backgroundColor: "#FFFAF0",
          }}
          placeholder="Escribe tu Tarea"
          value={todo}
          onChangeText={(userText) => {
            setTodo(userText);
          }}
        />
        {updateTodo ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#708090",
              borderRadius: 6,
              paddingVertical: 12,
              marginVertical: 15,
              alignItems: "center",
            }}
            onPress={() => UpdateBoton()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Guardar
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "#708090",
              borderRadius: 6,
              paddingVertical: 12,
              marginVertical: 15,
              alignItems: "center",
            }}
            onPress={() => handleAddTodo()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Agregar
            </Text>
          </TouchableOpacity>
        )}
        {/* renderizar el todo list*/}

        <FlatList data={todoList} renderItem={renderTodos} />
    
      {
        todoList.length<=0 &&(<Fallback/>)
      }
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
