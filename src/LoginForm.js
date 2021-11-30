import { genericTypeAnnotation } from '@babel/types';
import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import axios from 'axios';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLogin: false
        };
    }

    login = () => {

        this.setState({
            isLogin: false
        })

        if(!this.state.username && !this.state.password){
            Alert.alert("Error", "Username dan Password harus diisi")
        } else {
            axios
            .post('http://gmedia.bz/DemoCase/auth/login', {
                username: this.state.username,
                password: this.state.password,
            }, {
                headers: {
                    'Client-Service': `gmedia-recruitment`,
                    'Auth-Key': `demo-admin`
                }
            })
                .then(response => {
                console.log('response data : ', response.data.metadata);
                console.log('response status : ', response.data.metadata.status);

                if (response.data.metadata.status === 200) {
                    // console.log('BERHASIL >>>', usernameInput, passwordInput, response);
                    // console.log('Masuk if status 200');
                    // this.props.navigation.navigate('DetailLaryawan');
                    Alert.alert('OK ', response.data.metadata.message);

                } else {
                    console.log(
                        'Peringatan >>>',
                        this.state.username,
                        this.state.password,
                        response.data.metadata,
                    );
                    // Alert.alert('Username/Password Salah ', response.data.error.msg);
                    Alert.alert(response.data.metadata.message);
                }
            })
            .catch(error => {
                console.log('ERROR CATCH >>>', response.data.metadata.message);
                Alert.alert('Username/Password Salah ');
            });

            this.setState({
                isLogin: true
            })
        }
        
    }

    render() {
        const { username, password, isLogin } = this.state;
        return (
            <View style={styles.container}>
                {/* <Image style={styles.logoImage} 
                    source={require('./assets/logo.png')} 
                />; */}

                {/* <Image style={styles.logoImage} source={require('./assets/logo.png')} /> */}
                <View style={styles.logoImage}>
                    <Image source={require('./assets/logo.png')} />
                </View>

                <View style={styles.isi}>
                    
                    <View style={styles.wrapperInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Username"
                            value={username}
                            onChangeText={(username) => this.setState({username})}
                        />
                    </View>

                    <View style={styles.wrapperInput}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Password"
                            value={password}
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>

                    {isLogin &&
                        <Text style={{marginTop: 20}}>
                            Selaman Berhasil Login : {username}
                        </Text>
                    }
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: 'white'
    },
    logoImage: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    isi: {
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        alignSelf: 'center',
        height: 40,
        width: 250
    },
    wrapperInput: {
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 50,
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
        width: 85,
        alignSelf: 'center'
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
})
