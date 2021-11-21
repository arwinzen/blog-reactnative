import React from 'react';
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
    return(
        <SafeAreaView style={AUTH_CONTAINER}>
            <Text style={LOGO}>Sign up</Text>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Username" 
                    placeholderTextColor="#fff"
                    keyboardType="default" 
                    style={INPUT_TEXT}  
                />
            </View>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Email" 
                    keyboardType="default" 
                    placeholderTextColor="#fff"
                    style={INPUT_TEXT}  
                />
            </View>
            <View style={INPUT_VIEW}>
                <TextInput 
                    placeholder="Password" 
                    keyboardType="default" 
                    secureTextEntry={true}   
                    placeholderTextColor="#fff"
                    style={INPUT_TEXT} 
                />
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={BUTTON_STYLE}    
            >
                <Text style={{
                    color: TEXT_COLOR, 
                    fontWeight: 'bold',
                    fontSize: 18
                }}
                >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
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