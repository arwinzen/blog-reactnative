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

function Login(props){
    return(
        <SafeAreaView style={AUTH_CONTAINER}>
            <Text style={LOGO}>Arwin's Substack</Text>
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
                    placeholder="Password" 
                    placeholderTextColor="#fff"
                    keyboardType="default" 
                    secureTextEntry={true}
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