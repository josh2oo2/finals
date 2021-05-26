import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import { SocialIcon } from 'react-native-elements';
// import { firebaseConfig } from '../firebase/config';

import GoogleSignIn from '../screens/GoogleSignin';
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import { retrieveAUser, saveAUser } from '../utils/firebaseHelper';

const FacebookSignin = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const onFacebookSigninPress = async () => {
        setLoading(true);
        try {
            await Facebook.initializeAsync({
                appId: '2640939432870728', 
            }); // enter your Facebook App Id 
            const { type,
                token,
                expirationDate,
                permissions,
                declinedPermissions, } = await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile', 'email'],
                });
            // console.log("tokentype", type, token, expirationDate, permissions, declinedPermissions);
            if (type === 'success') {
                console.log("success na");
                // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTHyarn
                // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                // console.log('Logged in!', `Hi ${(await response.json()).name}!`)
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                // console.log("response", response);
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
             await   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(() => {
                        return firebase.auth().signInWithCredential(credential)
                            .then(user => {
                                // All   the details about user are in here returned from firebase            
                                // console.log("fb signin", user);   
                                // console.log("facebook login ", user, user.additionalUserInfo);
                                let userData = {
                                    provider: user.additionalUserInfo.providerId,
                                    family_name: user.additionalUserInfo.profile.last_name,
                                    given_name: user.additionalUserInfo.profile.first_name,
                                    displayName: user.additionalUserInfo.profile.name,
                                    email: user.additionalUserInfo.profile.email,
                                    lastLoginAt: new Date().toString(),
                                    photoURL: user.additionalUserInfo.profile.picture.data.url,
                                    uid: user.user.uid,

                                }
                                console.log("userdata123", userData)

                                  saveAUser(userData);
                                 navigation.navigate('Home', { userData: userData });
                                // onLoginSuccess(userData);
                            })
                            .catch((error) => {
                                console.log('Error occurred ', error)
                                // setLoading(false);
                            });
                    });

            } else {
                // type === 'cancel'
                console.log("type", type);
                setLoading(false);
            }

        
        } catch ({ message }) {
            console.log("what error", message);
            alert(`Facebook Login Error: ${message}`);
        }
    }




    return (

        <View style={styles.container} >
            <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                onPress={onFacebookSigninPress}
            />  

        </View>
    )
}

const styles = StyleSheet.create({

    textinput: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        marginTop: 100

    },
    button: {
        borderColor: 'red',
        borderWidth: 5,
    }
    // container: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },
    // bannerContainer: {
    //     flex: 1,
    //     height: 30
    // },
    // banner: {
    //     flex: 1,
    //     width: '100%',
    //     height: 30
    // }

})

export default FacebookSignin;