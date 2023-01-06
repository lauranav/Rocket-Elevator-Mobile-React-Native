import React, { useEffect, useState } from 'react';
import axios from "axios";
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function StatusElevator({ route, navigation }) {

    const { id, currentStatus } = route.params;
    console.log("route.params: ", route.params);

    const onReturnPress = () => {
        navigation.navigate("Home");
    };

    const [elevatorStatus, setElevatorStatus] = useState(currentStatus);


    const onChangeStatusElevators = async () => {
        try {


            // console.log("id.elevator: ", id);

            const res = await axios.post(`https://60c0-24-200-220-70.ngrok.io/api/Elevator/UpdateStatusElevatorById`, {
                id: id,
                status: "online",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(function () {
                console.log("response.data: ", 1);

                setElevatorStatus("online");

            }).catch(function (error) {
                if (error.response) {
                    console.log("error.response: ", error.response);
                } else if (error.request) {
                    console.log("error.request: ", error.request);
                } else if (error.message) {
                    console.log("error.message: ", error.message);
                }

            });

        } catch (elev) {
            console.warn("change status elev:", elev);
        }
    };

    const statusColor = elevatorStatus === "offline" ? "red" : "green";



    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Elevator ID : <Text style={{ fontWeight: '500' }} >{id}</Text></Text>
            <Text style={styles.title}>Status : <Text style={{ color: statusColor }}>{elevatorStatus}</Text></Text>
            <View style={styles.styleBtnLogout}>
                <Button
                    title="UPDATE STATUS"
                    buttonStyle={{
                        backgroundColor: '#0c64a3',
                        borderWidth: 2,
                        borderColor: '#0c64a3',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={() => onChangeStatusElevators()}
                />
                <Button
                    title="RETURN"
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
                    onPress={() => onReturnPress()}
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

    title: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: '700'
    },

    styleBtnLogout: {
        marginTop: 50,
        display: "flex",
        alignItems: "center"
    },
});
