import React, { useState } from 'react';
import axios from "axios";
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Logo from '../../assets/images/logo.jpg';
import validator from 'validator';


export default function Login({ navigation }) {
    const [email, SetEmail] = useState(null)
    const [error, setErrorEmail] = useState(null)

    // const validate = () => {
    //     setErrorEmail("Email invalid")
    //     return false
    // }

    const authenticateUser = async () => {

        setErrorEmail(null);


        if (!validator.isEmail(email)) {
            setErrorEmail('This not a valid email')
            return;
        }


        try {
            const res = await axios.get(`https://60c0-24-200-220-70.ngrok.io/api/Employee/GetUserByEmail`, {
                params: {
                    email: email,
                }
            }

            );

            if (res.data) {
                navigation.navigate('Home')
            }

            else {
                setErrorEmail('invalid email')
            }

            console.log("authenticateUser res:", res.data);

        } catch (error) {
            console.warn("authenticateUser error:", error);
            setErrorEmail('An error occurried while checking the email')
        }



    }



    const { height } = useWindowDimensions();

    return (
        <View style={styles.container}>

            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain"></Image>

            <Text h3>LOG IN</Text>
            <Input
                placeholder="E-mail"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={(text) => SetEmail(text)}
                // {value => SetEmail(value)}
                keyboardType="email-address"
                value={email}
            />

            <Button
                title="LOG IN"
                onPress={authenticateUser}
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
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 180,
    }
});
