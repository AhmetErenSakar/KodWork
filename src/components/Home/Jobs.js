import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import JobCard from '../JobCard/JobCard';


import { setJobs } from '../../../redux/WorkSlice';



function Home({ navigation }) {

    const dispatch = useDispatch()
    const jobs = useSelector(state => state.work.jobs)
    const [data, setData] = useState([])


    async function fetchData() {
        const { data: responseData } = await axios.get('https://www.themuse.com/api/public/jobs?page=1')
        setData(responseData.results)
        dispatch(setJobs(responseData.results))
    }

    function handleSelect(item) {
        navigation.navigate('Job', { item: item })
    }

    useEffect(() => {
        fetchData()
        console.log('1');
    }, [])

    function renderJobs({ item }) {
        return <TouchableOpacity onPress={() => handleSelect(item)} style={styles.jobCon}>
            <JobCard item={item} />
        </TouchableOpacity>
    }



    return (
        <View style={styles.container}>
            <FlatList style={{ marginTop: 5 }} data={data} renderItem={renderJobs} />
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
        borderWidth: 2,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white',
    }
})

export default Home