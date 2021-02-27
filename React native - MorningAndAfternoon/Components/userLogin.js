import React, { useEffect, useState } from "react";
import { ImageBackground,Text,TextInput,StyleSheet,View, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const image1 = {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wtuVVaD0JKjnKf5QO5EU9MEPMb0vvnIw4g&usqp=CAU"};
const userLogin = ({navigation}) => 
{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const saveData = async () => {
        try
        {
          await AsyncStorage.setItem("user", userName)
          alert('Data stored successfully')
          navigation.navigate("Add and print")
        } catch (e) 
        {
          alert('Failed to save the data to the storage')
        }
      }

    const logged = () => {
        if(userName != "Nikhil" || password !="Nik12"){
            alert("Enter correct username and password");
            return;
        }
        saveData();
        console.log(userName);
    }
    return (
        <View style={styles.container}>
        <ImageBackground source={image1} style={styles.image}>
    
            <Text style={styles.loginTextStyle}>
               Login To Notes App
            </Text>
            <TextInput placeholder="Enter Username" onChangeText={ (text) => setUserName(text)} style={styles.textInputStyle} />
            <Text></Text>
            <TextInput placeholder="Enter Password" onChangeText={ (text) => setPassword(text)} style={styles.textInputStyle} />
            <Text style={styles.error}>{error}</Text>
            <Button title="Login" color="black"  onPress={logged} />
            </ImageBackground>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    image: {
        flex: 1,
        width:"100%",
        resizeMode: "cover",
        justifyContent: "center"
      },
    loginTextStyle: {
        fontSize: 40,
        fontWeight: "700",
        color:"black",
        marginLeft:60,
        marginVertical: 20
    },
    textInputStyle: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        marginLeft:60,
        padding: 5,
        width: "60%",
        textAlign:"center"
    },
    error:
    {
        color:"red",
        marginBottom: 20,

    }
})

export default userLogin;
