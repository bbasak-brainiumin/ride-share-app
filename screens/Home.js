import React from 'react';
import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

    const DATA = [
        { id: '1', icon: 'home-outline', label: 'Form   -  To', value: 'London → Manchester' },
        { id: '2', icon: 'person-outline', label: 'Form   -  To', value: 'London → Manchester' },
        { id: '3', icon: 'settings-outline', label: 'Form   -  To', value: 'London → Manchester' },
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your pick of rides at low prices</Text>
            <View style={styles.searchwrap}>
                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Leaving from'}
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Going to'}
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Today'}
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.input}
                        placeholder={'1 passenger'}
                        placeholderTextColor="#000"
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
                    <Text style={styles.buttontext}>Search</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Where do you want a ride to?</Text>
            {/*<View>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.label}>{item.label}</Text>
                            <Text style={styles.label}>{item.value}</Text>
                        </View>
                    )}
                />
            </View>*/}
            <View style={styles.graygridsec}>
            <Text style={styles.text}>Our best selling bus routes </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchRow: { display: 'flex', flexDirection: 'row', width: '100%', marginBottom: 10 },
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20 },
    input: {
        flex: 1,
        fontSize: 18, borderWidth: 1, borderColor: '#000', padding: 10
    },
    searchwrap: { width: '100%', padding: 20 },
    button: {
        width: '100%',
        backgroundColor: '#5893D4',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttontext: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    graygridsec: {backgroundColor: '#ddd', padding: 20, marginTop: 20, width: '100%' },
});
