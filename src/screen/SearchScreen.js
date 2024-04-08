import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term,setTerm] = useState("");
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
    const searchApi = async ()=> {
        try {
        const response = await yelp.get("/search", 
        {
            params: {
                limit : 50,
                term,
                location: "san jose",
            },
        });
        //  console.log(response.data.businesses);
        setResults(response.data.businesses);
        setErrorMessage("");
        // console.log("number of found result : " + result.length);
    } catch (err) {
        // console.log("something wrong");
        setErrorMessage("something wrong!!");
    }
    };
    useEffect(()=>{
        searchApi("Pizza");
    },[]);
    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        });
    };

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Feather name="search" style={styles.icon}/>
            <TextInput 
            placeholder='Search i.e. Ramen, Pizza'
            value={term}
            onChangeText={(newTerm)=>setTerm(newTerm)}
            onEndEditing={searchApi}
            style={styles.input}
            />
        </View>
        <View style={{flexDirection:'row'}}>
        <Text>Search Term: {term}</Text>
        <Text> Result found :{results.length} results </Text>
        </View>
        <ResultsList title= 'Cheap' results={filterResultsByPrice("$")}  />
        <ResultsList title= 'Moderate'results={filterResultsByPrice("$$")}   />
        <ResultsList title= 'Expensive'results={filterResultsByPrice("$$$")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2c6c2"
    },
    inputContainer:{
        marginTop : 10,
        backgroundColor: "#f0eeee",
        height : 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:"row",
    },
    input : {
        flex: 1,
        fontSize: 20,
    },
    icon : {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
});

export default SearchScreen