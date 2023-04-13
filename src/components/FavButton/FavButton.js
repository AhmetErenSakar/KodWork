import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFavourities } from '../../../redux/WorkSlice';



function FavButton({ item, text, disabledd }) {

    const dispatch = useDispatch();
    const faourities = useSelector(state => state.work.faourities)


    function onPress(item) {
        dispatch(setFavourities(item))
    }

    return (
        <TouchableOpacity disabled={disabledd} style={styles.container} onPress={onPress(item)}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 2.1,
        height: Dimensions.get('screen').height / 13,
        backgroundColor: '#E53935',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default FavButton