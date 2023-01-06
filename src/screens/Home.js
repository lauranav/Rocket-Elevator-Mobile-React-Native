import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Text, Button } from 'react-native-elements';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '../../App';
import { ListItem } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getElevators();
        });
        return focusHandler;
    }, [navigation]);

    useFocusEffect(
        React.useCallback(() => {
            console.log("home screen is currently visible!");

            getElevators(setElevators);
        }, [])
    );

    const getElevators = async (setElevators) => {

        try {
            const res = await axios.get(
                "https://4a00-24-200-220-70.ngrok.io/api/Elevator/GetAllElevatorStatusNotOperation",
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            console.log("res.data: ", res.data);

            setElevators(res.data);
        } catch (error) {
            console.warn("[getElevators] error:", error);
        }
    };

    const [elevators, setElevators] = useState(null);

    useEffect(() => {
        getElevators(setElevators);
    }, []);




    console.log("elevators: ", elevators);

    const onElevatorPress = (elevator) => {
        console.log("onElevatorPress elevator:", elevator.id);
        navigation.navigate("StatusElevator", {
            id: elevator.id,
            currentStatus: elevator.status
        });
    };

    const renderItem = ({ item }) => (
        <Item elevator={item} />
    );

    const Logout = () => {
        navigation.navigate("Login");
    };

    const Item = ({ elevator }) => {
        console.log("id is:", elevator);

        return (
            <View style={styles.styleBtnFlatList}>
                <Button
                    title={elevator.id.toString()}
                    onPress={() => onElevatorPress(elevator)}
                    buttonStyle={{
                        backgroundColor: '#0c64a3',
                        borderWidth: 2,
                        borderColor: '#0c64a3',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 300,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </View>
        );
    };

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Elevators not operation:</Text>
            <FlatList
                data={elevators}
                renderItem={renderItem}
            // keyExtractor={item => item.id}
            />
            <View style={styles.styleBtnLogout}>
                <Button
                    title="LOG OUT"
                    buttonStyle={{
                        backgroundColor: '#A94545',
                        borderWidth: 2,
                        borderColor: '#A94545',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={() => Logout()}
                />
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    item: {
        marginTop: 20,
        marginBottom: 20,
        padding: 30,
        backgroundColor: '#C0392B',
        fontSize: 30
    },

    styleBtnFlatList: {
        marginTop: 15,
        display: "flex",
        alignItems: "center"
    },

    title: {
        fontSize: 25,
        marginLeft: 10
    },

    styleBtnLogout: {
        marginTop: 50,
        display: "flex",
        alignItems: "center"
    },
});