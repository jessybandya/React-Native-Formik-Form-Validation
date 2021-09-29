import React, {useEffect,useLayoutEffect} from 'react'
import { View, StyleSheet, TextInput, Text,SafeAreaView,Image,ScrollView,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'

const HomeScreen = ({navigation}) => {

    
    
    useLayoutEffect(()=>{
        navigation.setOptions({

            headerBackTitleVisible: false,
            headerTitle: ()=>
            <View style={{
                flexDirection:"row",
                alignItems: "center",
                flexDirection: "row",
                alignItems: "center",
                height:30,
                backgroundColor:"#ecf0f1",
                width:180,
                borderRadius: 20,
                padding:5
            }}>
          <FontAwesome  name="search" size={18} color="#43A6C6" />
          <TextInput style={{width: 142}} placeholder="Search..."/>
            </View>,
  
            headerLeft: () =>
                 <TouchableOpacity 
                 style={{ marginLeft:10 }} 
                 onPress={navigation.goBack}
                 activeOpacity={0.5}>
                                  <Image style={{height:30,width:30,borderRadius:30/2}} source={{uri: "https://e7.pngegg.com/pngimages/649/310/png-clipart-blue-logo-electric-blue-brand-symbol-internet-chromium-blue-logo.png"}}/>
                 </TouchableOpacity>,
          headerRight: () =>
                 <View style={{
                     flexDirection:"row",
                     justifyContent: "space-between",
                     width:80,
                     marginRight:20
                 }}>
                     <TouchableOpacity>
                         <FontAwesome name="video-camera" size={24} color="white" onPress={() => alert("Still under development mode!!!")}/>
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <Image style={{height:50,width:50,borderRadius:50/2}} source={{uri: "https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="}} />
                     </TouchableOpacity>
                 </View>
            
        })
      },[])

    return (
      <SafeAreaView style={styles.container}>

  
          <ScrollView style={styles.main}>
          <View style={styles.post}>
           <View style={styles.postHeader}>
           <View>
            <Image style={{height:60,width:60,borderRadius:60/2}} source={{uri:"https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="}} />
           </View>
           <View>
           <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                     <Text style={{fontSize:18,fontWeight:"500",marginLeft:5}}>Niva          
                      </Text>
  
                      <Feather style={{marginLeft:170}} name="more-horizontal" size={24} color="#43A6C6" />
           </View>
  
            <Text style={{marginLeft:10,marginTop:5}}>Caption manzee that gonna hit differently</Text>
                     <Text style={{marginLeft:10,marginTop:5,color: "#AEAEAE"}}>Posted on Sat 14th jun 2021</Text>
           </View>
           </View>
            <View style={styles.postImage}>
                      <Image style={{height:350,width:"100%",objectFit: "contain",marginRight:10}} source={{uri:"https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="}} />
           </View>
           <View style={styles.postFooter}>
           <View style={{flexDirection: "row",alignItems: "center"}}>
            <AntDesign name="like2" size={24} color="#43A6C6" />
            <Text style={{marginLeft:2,fontSize:16,fontWeight:"500"}}>50k</Text>
           </View>
                    <View style={{flexDirection: "row",alignItems: "center"}}>
            <FontAwesome name="comment-o" size={24} color="#43A6C6" />
            <Text style={{marginLeft:2,fontSize:16,fontWeight:"500"}}>16k</Text>
           </View>
           <AntDesign name="sharealt" size={24} color="#43A6C6" />
           </View>
           </View>
  
  
  
                   <View style={styles.post}>
           <View style={styles.postHeader}>
           <View>
            <Image style={{height:60,width:60,borderRadius:60/2}} source={{uri:"https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="}} />
           </View>
           <View>
            <Text style={{fontSize:18,fontWeight:"500",marginLeft:5}}>Jessy Bandya </Text>
            <Text style={{marginLeft:10,marginTop:5}}>Caption manzee that gonna hit differently</Text>
                     <Text style={{marginLeft:10,marginTop:5,color: "#AEAEAE"}}>Posted on Sat 14th jun 2021</Text>
           </View>
           </View>
            <View style={styles.postImage}>
                      <Image style={{height:350,width:"100%",objectFit: "contain",marginRight:10}} source={{uri:"https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk="}} />
           </View>
           <View style={styles.postFooter}>
           <View style={{flexDirection: "row",alignItems: "center"}}>
            <AntDesign name="like2" size={24} color="black" />
            <Text style={{marginLeft:2,fontSize:16,fontWeight:"500"}}>50k</Text>
           </View>
                    <View style={{flexDirection: "row",alignItems: "center"}}>
            <FontAwesome name="comment-o" size={24} color="black" />
            <Text style={{marginLeft:2,fontSize:16,fontWeight:"500"}}>16k</Text>
           </View>
           <AntDesign name="sharealt" size={24} color="black" />
           </View>
           </View>
          </ScrollView>     
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    post:{
       marginTop:8
    },
    postFooter:{
      flexDirection: "row",
      justifyContent:"space-between",
      padding:15,
      height: 55,
      backgroundColor: "#ecf0f1",
      alignItems: "center"
    },
    postImage:{
    },
    postHeader:{
     flexDirection: "row"
    },
    main:{
      backgroundColor: "#fff"
    },
    headerRight:{
      flexDirection: "row",
      alignItems: "center",
    },
    headerText:{
      color:"blue",
      fontSize:18,
      fontWeight: "400"
    },
    header:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 5
    },
    container: {
      padding: 10,
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  
  export default HomeScreen;
