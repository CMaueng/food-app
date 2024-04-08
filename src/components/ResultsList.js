import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useNavigation from '@react-navigation/native'


const ResultsList = ({title,results}) => {
    const navigation = useNavigation();
    if (!results.length){
        return null;
    }
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={item => item.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("ShowScreen",{id:item.id})}>
                    <View style={styles.container}>
                       <Image style={styles.image} source={{uri:item.image_url}} />
                <Text style={styles.name}></Text>
                <Text>{item.rating} stars from {item.review_count} Reviews </Text>
                    </View>
                    </TouchableOpacity>
                    )
            }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    name:{
        fontWeight:'bold'
    },
    image:{
        width:230,
        height:100,
        marginBottom:5,
        borderRadius:4,
        margin:5
    }
})

export default ResultsList