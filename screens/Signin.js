import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, TextInput , Text,  TouchableOpacity  } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import FacebookSignin from '../screens/FacebookSignin';


import { retrieveAUser, saveAUser }  from '../utils/firebaseHelper';
import GoogleSignIn from './GoogleSignin';

const Signin = ({navigation}) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [fullname, setFullName] = useState(null);

    const handleOnPress = () => {

        // setUsername("kenneth");
        console.log("the button signin is pressed", username);

        navigation.navigate('Home', {fullname: fullname})
    }
    const placeholder = "        Enter your username       "
    const placeholderPassword ="        Enter your password      "

    useEffect(()=>{


    }, [])


    const saveInfo = async() => {
        const data = {
            fullname : fullname
        }

        saveAUser(data)
        .then(result => {
            console.log("ano ang result", result);
        })

    }

    const retrieveInfo = async() => {
        const data ={
            id : "40OMUOwvDsUVXcHb3J48",

        }

        retrieveAUser(data)
        .then(result => {
            console.log("who is the user? ", result);
            setFullName(result.fullname)
        })
    }


    const handleOnPressSave = () => {
        saveInfo();
    }

    const handleOnPressRetrieve = ()=> {
        retrieveInfo();
    }
    return (
      
        <View style = {styles.container} >
                <Image source={require('../assets/products/Logo.png')}
                style={styles.logo} />

                <Text style = {styles.welcome}> 
                 </Text>   
                 
                 <Text style = {styles.how} >
                 </Text>

            <TextInput placeholder={placeholder} value={username} 
            onChangeText={(text)=>setUsername(text)} style={styles.textinput} />

            <TextInput placeholder={placeholderPassword} value={password} keyboardType="default" password
            onChangeText={(text)=>setPassword(text)} style={styles.textinput} />


            <TouchableOpacity onPress={handleOnPress} style={styles.button} >
                <Text>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleOnPressSave} style={styles.button} >
                <Text>SAVE USER INFO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleOnPressRetrieve} style={styles.button} >
                <Text>RETRIEVE USER INFO</Text>
            </TouchableOpacity>

            <FacebookSignin style={{width:10000}} navigation= {navigation} />
            <GoogleSignIn navigation={navigation} />
           
        </View>
    )
}

const styles = StyleSheet.create({

    textinput:{
        borderBottomColor:'black',
        borderBottomWidth: 2,
        marginTop: 30,
        marginBottom: 10
    },
    button:{
        padding: 5,
    },
    container: {
        flex: 1 ,
        backgroundColor: '#4dd091',
        alignItems: 'center',
        justifyContent: 'center',
      },    
        logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        top: 50,
        marginLeft: 40,
        },
        welcome: {
            fontWeight: 'bold',
            alignContent: 'center',
            fontSize: 23,
            justifyContent: 'center',
            textAlign: 'center',
            height: -30,
            color: 'white',
            },          
            how: {
                alignContent: 'center',
                fontSize: 20,
                justifyContent: 'center',
                textAlign: 'center',
                padding: 10,
                color: 'white',
            },
        input: {
        width:20000,
        borderWidth: 3,
        borderColor: 'black',
        },
    })

export default Signin;