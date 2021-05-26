import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ProductItem from '../components/ProductItem';


import ProductList from '../components/ProductList';


const Test = () => {
    return (
        <View style={styles.page}>
            {/* render product component */}
            <ProductItem item={products[0]} />
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        width: '100%',
        padding: 10,
    }
});

export default Test;