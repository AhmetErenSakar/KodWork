import { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { useSelector } from 'react-redux';
import JobCard from '../JobCard/JobCard';



function Favourities({ navigation, route }) {


    const Favourities = useSelector(state => state.work.favourities)


    useEffect(() => {
        console.log(Favourities);
    }, [])


    function handleSelect(item) {
        navigation.navigate('Job2', { item: item })
    }



    function renderJobs({ item }) {
        return <TouchableOpacity onPress={() => handleSelect(item)} style={styles.jobCon}>
            <JobCard item={item} />
        </TouchableOpacity>
    }


    return (
        <View style={styles.container}>
            <FlatList style={{ marginTop: 5 }} data={Favourities} renderItem={renderJobs} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    jobCon: {
        height: Dimensions.get('screen').height / 7,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
    }
})


export default Favourities;