import React from 'react';
import { 
    View, 
    SafeAreaView, 
    Text, 
    ScrollView, 
    FlatList
} from 'react-native';
import { 
    CARD_STYLE,
    CARD_TITLE,
    BLOG_CONTAINER,
    TEXT_COLOR,
    TITLE_HEADER
} from '../../assets/styles';

import { aboutData } from '../../aboutData';

function About(){
    function _renderEmptyView(){
        return(
            <View>
                <Text>Oops, looks like there's nothing here.</Text>
                <Text>Please come back later.</Text>
            </View>
        )
    }

    function _renderList(item){
        return (
            <View key={item.index}>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
            </View>
        )
    }

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
                <Text style={TITLE_HEADER}>About Page</Text>
                <View style={CARD_STYLE}>
                     <Text style={CARD_TITLE}>
                         Lorem ipsum
                    </Text>
                    <Text style={{padding: 15}}>
                        Lorem ipsum
                    </Text>
                    <FlatList
                        data={ aboutData }
                        renderItem = {({ item }) => _renderList(item)}
                        keyExtractor={( item ) => item.index}
                        ListEmptyComponent = {() => _renderEmptyView()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default About;