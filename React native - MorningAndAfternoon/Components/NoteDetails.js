import React from "react";
import { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const NoteDetails = ({ route, navigation }) => 
{
    const [title, setTitle] = useState(route.params.data.title);
    const [desc, setDesc] = useState(route.params.data.desc);
    const [titleError, setTitleError] = useState();
    const [descError, setDescError] = useState();

    const save = () => {
        if (!title || !desc) {
            if (!title)
                setTitleError("Please specify the note title");
            else
                setTitleError("");
            if (!desc)
                setDescError("Please specify the note description");
            else
                setDescError("");
            return;
        }
        route.params.update(route.params.id, title, desc);
        navigation.navigate("Add and print");

    }
    {/* <ActivityIndicator size="large" color="blue" /> */ }
    return (

        <View style={styles.container}>
            <View style={styles.mb30}>
                <Text style={styles.headingTitle} >Enter App Note Title</Text>
                <TextInput style={styles.textInputStyleText} onChangeText={(text) => setTitle(text)} >{title}</TextInput>
                <Text style={styles.error}>{titleError}</Text>
            </View>
            <View style={styles.mb40}>
                <Text style={styles.headingDesciption} >Enter Description</Text>
                <TextInput multiline={true} numberOfLines={3} style={styles.textInputStyleDesc} onChangeText={(text) => setDesc(text)} >{desc}</TextInput>
                <Text style={styles.error}>{descError}</Text>
            </View>
            <View style={styles.addnote}>
                <Button title="Add New Note" color="#83f2d5" onPress={save} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingTitle: {
        fontSize: 30,
        fontWeight: "600",
        color:"#009879",
        marginVertical: 5,
        
    },
    headingDesciption: {
        fontSize: 30,
        fontWeight: "600",
        color:"#009879",
        marginVertical: 5,
    },
    mb30: {
        marginBottom: 20,
        width: "100%",
        marginTop: "10%",
        alignItems: "center",
    },
    mb40: {
        marginBottom: 30,
        width: "100%",
        alignItems: "center",
    },
    container: {
        justifyContent:"flex-start",
        alignItems: "center",
        flex: 1
    },
    textInputStyleText: {
        borderColor: "purple",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        padding: 5,
        width: "80%",
        textAlign: "center"
    },
    textInputStyleDesc: {
        borderColor: "purple",
        borderWidth: 2,
        borderRadius: 30,
        fontSize: 20,
        padding: 10,
        width: "80%",
        textAlign: "center",
        justifyContent: "flex-start",
        textAlignVertical: 'center',
    },
    error:
    {
        color: "black"
    },
    addnote: {
        width: "80%",
    },
});

export default NoteDetails;
