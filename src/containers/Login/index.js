import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { login } from '../../features/auth';

function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const registeredUsers = useSelector((state) => state.registeredUsers);

    const handleLogin = (e) => {
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if(!email || !password){
            alert('Please fill in all fields');
        } else if (user){
            console.log('user credentials match');
            dispatch(login({
                name: user.name,
                email: email,
                password: password,
                isLoggedIn: true
            }))
            props.navigation.navigate("TabNav")
        } else {
            alert('User credentaials are invalid');
        }
    }

    return(
        <SafeAreaView style={AUTH_CONTAINER}>
            <Text style={LOGO}>Arwin's Substack</Text>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="#fff"
                    keyboardType="default" 
                    style={INPUT_TEXT} 
                    onChangeText={(e) => setEmail(e)}
                />
            </View>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="#fff"
                    keyboardType="default" 
                    secureTextEntry={true}
                    style={INPUT_TEXT}    
                    onChangeText={(e) => setPassword(e)}
                />
            </View>
            <TouchableOpacity
                // onPress={() => props.navigation.navigate("TabNav")}
                onPress={(e) => handleLogin(e)}
                style={BUTTON_STYLE}    
            >
                <Text style={{
                    color: TEXT_COLOR,
                    fontWeight: 'bold',
                    fontSize: 18
                }}
                >Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
                <Text 
                    style={{
                        color: TEXT_COLOR,
                        marginTop: 20,
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}
                    >Sign up here
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default Login;