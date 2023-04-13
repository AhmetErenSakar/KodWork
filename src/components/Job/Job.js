import { useEffect, useState } from 'react';
import { View, Text, useWindowDimensions, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';



import { useDispatch, useSelector } from 'react-redux';
import { findJob } from '../../../redux/WorkSlice';
import FavButton from '../FavButton/FavButton';

/*
favorilere ekle butonu ile favorilerin görünümü kaldı
*/


function Job({ navigation, route }) {
    const [items, setİtems] = useState([])
    const item = route.params.item;
    const { width } = useWindowDimensions();
    const source = {
        html: `${item.contents}`
    }

    async function fetchData(x) {
        return await axios.get(`https://www.themuse.com/api/public/jobs/${x}`)
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.locations}>Locations: <Text style={styles.location}>{item.locations[0].name}</Text></Text>
                <Text style={styles.locations}>Job Level: <Text style={styles.location}>{item.levels[0].name}</Text></Text>
                <Text style={styles.Detail}>Job Detail</Text>
                <RenderHtml contentWidth={width} source={source} baseStyle={styles.content} />
                <View style={styles.Buttons}>
                    <FavButton item={item} text={'Add To Favourities'} />
                    <FavButton item={item} text={'Submit'} disabledd={true} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    content: {
        borderWidth: 1,
        margin: 5,
        padding: 5,
        backgroundColor: '#FFFFFF',
        color: 'black',
        fontSize: 12,
    },
    locations: {
        marginTop: 8,
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold'
    },
    location: {
        fontSize: 15,
        color: 'black',
    },
    Detail: {
        marginTop: 10,
        marginBottom: 4,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    Buttons: {
        flexDirection: 'row'
    }
})

export default Job;