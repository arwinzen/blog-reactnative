import React from 'react';
import { 
    View,
    SafeAreaView,
    Text, 
    ScrollView, 
    TouchableOpacity,
    Image,
} from 'react-native';

import { 
    CARD_STYLE,
    CARD_TITLE,
    BLOG_CONTAINER,
    BLOG_CARD_STYLE,
} from '../../assets/styles';

function BlogPost({ route }){
    const { blogPost } =  route.params;
    console.log(blogPost);
    return (
        <SafeAreaView style={BLOG_CONTAINER}>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{ 
                    paddingHorizontal: 20, 
                }}
            >
                <View style={BLOG_CARD_STYLE}>
                    <Image
                        source={{uri: blogPost.imageSrc}}
                        style={{
                            width: '100%', 
                            height:150,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }} 
                    />
                    <Text style={CARD_TITLE}>
                        {blogPost.title}
                    </Text>
                    <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
                        Date Published: {blogPost.datePublished}
                    </Text>
                    <Text style={{padding: 15, textAlign: 'justify'}}>
                        {blogPost.body}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BlogPost;