import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Avatar } from 'react-native-elements'
import Signin from '../screens/Signin';

const Home = ({ navigation, route }) => {
    const { params } = route;

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (params) {
            const { userData } = params;
            if (userData) {
                console.log("user data param", userData);
                setUser(userData);
            }
        }
    }, [])

    const onProductPress = () => {
        navigation.navigate('Products')
        }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
        }

    return (
        <View style={styles.container} >
            <View style={styles.bannerContainer}>
                <Avatar style = {styles.pic}
                    size= "xlarge"
                    rounded
                    source={{
                        uri: user ? user.photoURL : null                          
                    }}
                />
                {/* <Image source={user ? user.photoURL : null} style={styles.banner} />  */}
                <Text
                    style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginTop: 20,
                    marginBottom: 10,
                    textAlignVertical: 'center',
                    textAlign: 'center',}}>{user ? user.displayName : null}
                    </Text>
                    <Text style={styles.greetings}>
                    Mabuhay and Welcome to JabEE!
                    </Text>
                    <Text style={styles.greetings}>
                    Press Buy to Waste your money!
                    </Text>
                    <Text style={styles.last}>
                    Press Log Out to Save your Money!
                    </Text>
                    
                    <SocialIcon
                         title='Buy'
                         button
                         iconColor= 'orange'
                        onPress={onProductPress}
                        style={{borderRadius: 30, marginTop: -2, height:54}} />
                    <SocialIcon
                         title='Log Out'
                         button 
                         iconColor = 'orange'
                        onPress={onSignInPress}
                        style={{borderRadius: 30, marginTop: -2, height:54}} />
                        
                        <Image source={require('../assets/products/pog.png')}
                style={styles.logo} />
                     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#9799BA'
    },
    bannerContainer: {
        flex: 1,
        height: 30,
    },
    pic: {
        alignContent: 'center'
    },
    greetings: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 2,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    last: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 20,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        },
});

export default Home;
