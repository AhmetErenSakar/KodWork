import { useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'



function JobCard({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.categorie}>{item.categories[0].name}</Text>
            <Text style={styles.company}>{item.company.name}</Text>
            <View style={styles.location}>
                <Text style={styles.locationName}>{item.locations[0].name}</Text>
            </View>
            <Text style={styles.levels}>{item.levels[0].name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    categorie: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    company: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    location: {
        backgroundColor: '#F44336',
        width: Dimensions.get('screen').width / 3,
        borderRadius: 50,
        alignItems: 'center',
    },
    locationName: {
        color: '#FAFAFA',
        fontWeight: 'bold',
    },
    levels: {
        marginLeft: Dimensions.get('screen').width / 1.5,
        fontSize: 16,
        color: '#F44336',
        fontWeight: 'bold',
    }
})

export default JobCard