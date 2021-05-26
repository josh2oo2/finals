import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import { SocialIcon } from 'react-native-elements';
// import { firebaseConfig } from '../firebase/config';
import firebase from "firebase";
import "firebase/auth";
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

import { retrieveAUser, saveAUser } from '../utils/firebaseHelper';

const GoogleSignIn = ({ navigation }) => {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
            clientId: '748913881441-snmqjh4h5qik4mf39mlq29j660t26h8d.apps.googleusercontent.com',
        },
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;

            const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
            firebase.auth().signInWithCredential(credential)
                .then(user => {
                    console.log("successful google signin, who is user", user, user.additionalUserInfo);
                    let userData = {
                        provider: user.additionalUserInfo.providerId,
                        displayName: user.additionalUserInfo.profile.name,
                        email: user.additionalUserInfo.profile.email,
                        lastLoginAt: new Date().toString(),
                        uid: user.user.uid,

                    }
                    console.log("userdata", userData)
                    saveAUser(userData);
                    navigation.navigate("Home");
                });
        }
    }, [response]);

    return (
        <View style={styles.container}>

            <SocialIcon
                title='Sign In With Google'
                button
                type='google'
                onPress={() => { promptAsync(); }}
                style={{ borderRadius: 30, marginTop: -2, height: 54 }}
            />

        </View>
    )
}

export default GoogleSignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});