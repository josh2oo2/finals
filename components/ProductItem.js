import React, { useState } from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from './card';

export default function ProductList ({navigation}) {

    const [Product,setProduct] = useState ([

    {
        id:'1',
        title: "Redragon K552 Mechanical Gaming Keyboard",
        image: require('../assets/products/KBKumara.jpg'),
        avgRating: 5,
        ratings: '    1234',
        price: '₱1569.69',
        oldPrice: '₱2000.00',
    },
    {
        id:'2',
        title: "Keychron K8 Tenkeyless Wireless Mechanical Keyboard",
        image: require('../assets/products/KBKeychron.png'),
        avgRating: 4.8,
        ratings: '    2989',
        price: '₱5234.99',
        oldPrice: '₱6000.00',
    },
        {
        id:'3',
        title: "Funko Pop Deadpool",
        image: require('../assets/products/funkoDead.png'),
        avgRating: 4.5,
        ratings: '    548',
        price: '₱1233.32',
        oldPrice: '₱2234.42',
      },
      {
        id:'4',
        title: "Funko Pop Spooder",
        image: require('../assets/products/funkoSpidey.png'),
        avgRating: 4.5,
        ratings: '    5332',
        price: '₱394.23',
        oldPrice: '₱2234.42',
      },
      {
        id:'5',
        title: "Steelseries Rival 710 RGB",
        image: require('../assets/products/Mrival.png'),
        avgRating: 5,
        ratings: '    2344',
        price: '₱5399.32',
        oldPrice: '₱7179.42',
      },
        {
        id:'6',
        title: "Corsair Harpoon Pro RGB",
        image: require('../assets/products/Mharpoon.png'),
        avgRating: 2.5,
        ratings: '   55',
        price: '₱1500.00',
        oldPrice: '₱2591.21',
        },
        {
        id:'7',
        title: "MYPRO H1 Wireless & Wired Bluetooth Over Ear Stereo Headphones With Mic Comfortable And Lightweight",
        image: require('../assets/products/HPlocal.png'),
        avgRating: 2.5,
        ratings: '   55',
        price: '₱500.00',
        oldPrice: '₱1529.12',
        },
        {
            id:'8',
            title: "WK Wireless Bluetooth Headphone Stereo De-noising Earphone 4.2V Fold Pink Headband Receiver BP100",
            image: require('../assets/products/HPlowcal.png'),
            avgRating: 2.5,
            ratings: '   55',
            price: '₱333.23',
            oldPrice: '₱1555.21',
        },
        {
            id:'9',
            title: "Blackpink Seasons Greetings",
            image: require('../assets/products/BPgreetings.png'),
            avgRating: 2.5,
            ratings: '   55',
            price: '₱333.23',
            oldPrice: '₱1555.21',
        },
        {
            id:'10',
            title: "Tunay na Tunay Subok na Subok",
            image: require('../assets/products/Titan.png'),
            avgRating: 2.5,
            ratings: '   55',
            price: '₱333.23',
            oldPrice: '₱1555.21',
        },
        {
            id:'11',
            title: "twice tingi tingi album",
            image: require('../assets/products/TWICE.png'),
            avgRating: 2.5,
            ratings: '   55',
            price: '₱333.23',
            oldPrice: '₱1555.21',
        },
        {
            id:'12',
            title: "John Reniel De Belen Pogi",
            image: require('../assets/products/jowa.jpg'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }
        ,
        {
            id:'13',
            title: "Crisanto 'Crol' U. Manuzon",
            image: require('../assets/products/crisanto.jpg'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }
        ,
        {
            id:'14',
            title: "Jazmine Liberty Tumibay",
            image: require('../assets/products/jaz.jpg'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }
        ,
        {
            id:'15',
            title: "Darwin Pogi Dela Cruz",
            image: require('../assets/products/darwin.png'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }
        ,
        {
            id:'16',
            title: "Lhara Medina",
            image: require('../assets/products/lhara.jpg'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }
        ,
        {
            id:'17',
            title: "Riad Andre Pogi Mejia Tolentino",
            image: require('../assets/products/riad.jpg'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }
        ,
        {
            id:'18',
            title: "Thomas Angeles",
            image: require('../assets/products/thomas.jpg'),
            avgRating: 2.5,
            ratings: '   55',
            price: 'free',
            oldPrice: 'no price katulad',
        }])
    return (
        <View style={styles.root}>

            <FlatList
            numColumns ={2}
            data = {Product}
            renderItem = {({item})=>(
                <Card>
                    <TouchableOpacity onPress={()=>navigation.push(item.component)} >
                    <Image source = {item.image} style={styles.image}/>
                        <Text style={styles.title} numberOfLines={3}>
                            {item.title}  
                        </Text>
                        <Text style = {styles.price} numberOfLines={1}> 
                            {item.price}
                        </Text>
                        <Text>
                        <View style={styles.ratingsContainer}></View>
                        <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                        <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                        <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                        <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                        <FontAwesome style={styles.star} name="star-half-full" size={18} color={'#e47911'} />
                            {item.ratings}  
                        </Text>
                    </TouchableOpacity>
                </Card>
            )}
            />

         </View> 
    )};


const styles = StyleSheet.create({
    root: {
        padding: 4, 
        backgroundColor: '#FEADb9' 
    },
    image: {
        height: 130,
        width: 130,
        borderWidth: 1,
        resizeMode: 'contain',
    },
    rightContainer: {
        padding: 10,
        width: '100%',
        flex : 3,
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginRight: 3,
    },
    star: {
        margin: 2,
    },
});