import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import yelp from '../api/yelp'

const ResultsShowScreen = ({route,navigation}) => {
    const[results,setResults] = useState (null);
    const {id} =route.params;

    const getResults = async (id) =>{
        const response =await yelp.get(`/${id}`);
        setResults(response.data);
    };
    useEffect(() => {
        getResults(id);
    },[]);

    if(!results){
        return null;
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{results.name}</Text>
      <FlatList 
      data={results.photos}
      keyExtractor={photo=>photo}
      renderItem={({item})=>{
        return <Image style={styles.image} source={{uri:item}}/>
      }}/>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#8c2641',
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        alignSelf:'center',
        marginBottom:10,
    },
    image:{
        width:230,
        height:100,
        marginBottom:5,
        borderRadius:4,
        margin:5
    },

});

export default ResultsShowScreen