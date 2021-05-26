const ProductItem = () => {
    return (
        <View style={styles.root}>
                
                    <View style={styles.rightContainer}>
                        <Text style={styles.title} numberOfLines={3}>Redragon K552 Mechanical Gaming Keyboard</Text>
                        /* ratings */
                        <View style={styles.ratingsContainer}>
                            <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                            <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                            <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                            <FontAwesome style={styles.star} name="star-half-full" size={18} color={'#e47911'} />
                            <FontAwesome style={styles.star} name="star-o" size={18} color={'#e47911'} />
                            
                            <Text>1,234</Text>
                        </View>
                        <Text style={styles.price}>from ₱1569.69</Text>
                        <Text style={styles.oldPrice}> ₱2000.00</Text>
                    </View>
            </View> 
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    image: {
        flex : 2,
        height: 150,
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
    },
    star: {
        margin: 2,
    },
});
export default  ProductItem;