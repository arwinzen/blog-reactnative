import React, { useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { blogPosts } from '../../blogData';
import { 
    CARD_STYLE,
    CARD_TITLE,
    BLOG_CONTAINER,
    TEXT_COLOR
} from '../../assets/styles';


function Home({navigation}){
    const [blogData, setBlogData] = useState(blogPosts);

    console.log(blogData);
    const _renderList = (data) => {
        return (
            <TouchableOpacity 
                onPress ={() => navigation.navigate("BlogPost", {blogPost: data})}
                
            >
                <View style={CARD_STYLE}>
                    <Image 
                        source={{uri: data.imageSrc}}
                        style={{
                                width: '100%', 
                                height:150,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10
                            }} 
                     />
                     <Text style={CARD_TITLE}>
                         {data.title}
                    </Text>
                    <Text style={{padding: 15}}>
                            {data.excerpt}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
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
                <Text style={{
                    color: TEXT_COLOR,
                    fontWeight: 'bold',
                    fontSize: 30,
                    marginTop: 15,
                    marginBottom: 15
                }}>Posts</Text>
                {
                    blogData.map((list) => _renderList(list))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;