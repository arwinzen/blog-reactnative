import React from 'react';
import { 
    View, 
    SafeAreaView, 
    Text, 
    ScrollView, 
    Dimensions, 
    TouchableOpacity, 
    Image 
} from 'react-native';
import { 
    CARD_STYLE,
    CARD_TITLE,
    BLOG_CONTAINER,
    TEXT_COLOR,
    TITLE_HEADER
} from '../../assets/styles';

function Contact(){
    return (
        <SafeAreaView style={BLOG_CONTAINER}>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ 
                    paddingHorizontal: 20, 
                    flexWrap: "wrap", 
                    flexDirection:"row" ,
                    justifyContent: "space-between"
                }}
            >
                <Text style={TITLE_HEADER}>Contact Page</Text>
                <View style={CARD_STYLE}>
                     <Text style={CARD_TITLE}>
                         Lorem ipsum
                    </Text>
                    <Text style={{padding: 15}}>
                        Lorem ipsum
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Contact;