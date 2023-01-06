import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function StatusElevator({ route, navigation }) {

    const { idElevator, status } = route.params;
    console.log("route.params: ", route.params);

    const onReturnPress = () => {
        navigation.navigate("Home");
    };


    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ID Elevator : {idElevator}</Text>
            <Text style={styles.title}>Status Elevator : {status}</Text>
            <View style={styles.styleBtnLogout}>
                <Button
                    title="UPDATE TO ONLINE"
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
                // onPress={() => onElevatorPress(elevator)}
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
    },

    styleBtnLogout: {
        marginTop: 50,
        display: "flex",
        alignItems: "center"
    },
});
