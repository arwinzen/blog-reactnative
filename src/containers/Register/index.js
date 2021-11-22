import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth';
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { 
    BACKGROUND_COLOR, 
    LOGO,
    BUTTON_COLOR, 
    INPUT_STYLE,
    AUTH_CONTAINER,
    INPUT_VIEW,
    INPUT_TEXT,
    BUTTON_STYLE,
    TEXT_COLOR
} from '../../assets/styles'

function Register(props){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const registeredUsers = useSelector((state) => state.registeredUsers);
    console.log(registeredUsers);

    const dispatch = useDispatch();

    function handleRegister(e){
        console.log(name, email, password);
        if(!name || !email || !password) {
            alert('Please fill in all fields');
        } else if (registeredUsers.find(user => user.email === email)){
            alert('Email has been registered before');
        } else {
            dispatch(register({
                name: name,
                email: email, 
                password: password, 
                key: Date.now()
            }))
            alert(`User ${name} successfully created. Please Login`);
            console.log(registeredUsers);
            props.navigation.navigate("Login")
        }
    }

    return(
        <SafeAreaView style={AUTH_CONTAINER}>
            <Text style={LOGO}>Sign up</Text>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Username" 
                    placeholderTextColor="#fff"
                    keyboardType="default" 
                    style={INPUT_TEXT}  
                    onChangeText={(e) => setName(e)}
                />
            </View>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Email" 
                    keyboardType="email-address" 
                    placeholderTextColor="#fff"
                    style={INPUT_TEXT}  
                    onChangeText={(e) => setEmail(e)}
                />
            </View>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Password" 
                    keyboardType="default" 
                    secureTextEntry={true}   
                    placeholderTextColor="#fff"
                    style={INPUT_TEXT} 
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity
                // onPress={() => props.navigation.navigate("Login")}
                onPress={(e) => handleRegister(e)}
                style={BUTTON_STYLE}    
            >
                <Text style={{
                    color: TEXT_COLOR, 
                    fontWeight: 'bold',
                    fontSize: 18
                }}
                >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => props.navigation.navigate("Login")}
                // onPress={(e) => handleRegister(e)}
            >
                <Text 
                    style={{
                        color: TEXT_COLOR,
                        marginTop: 20,
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}
                    >Login here
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Register;