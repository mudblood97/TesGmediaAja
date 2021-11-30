import { genericTypeAnnotation } from '@babel/types';
import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'

export default class DetailLaryawan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            gender: '',
            dateOfBirth: ''
        };
    }

    // login = () => {
    //     if(!this.state.username && !this.state.password){
    //         Alert.alert("Error", "Username dan Password harus diisi")
    //     } else {
    //         this.setState({
    //             isLogin: true
    //         })
    //     }
        
    // }

    render() {
        const { name, address, gender, dateOfBirth } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Detail Data Karyawan</Text>

                <View style={styles.isi}>
                    <View style={styles.wrapperInput}>
                        <Text style={{fontWeight: 'bold', marginBottom: 5, fontSize: 18}}>Nama</Text>
                        <TextInput 
                            style={styles.textInputName} 
                            value={name}
                            onChangeText={(name) => this.setState({name})}
                        />
                    </View>

                    <View style={styles.wrapperInput}>
                        <Text style={{fontWeight: 'bold', marginBottom: 5, fontSize: 18}}>Alamat</Text>
                        <TextInput 
                            style={styles.textInputAddress} 
                            value={address}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(address) => this.setState({address})}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => this.login()}>
                        <Text style={styles.textButton}>LOGIN</Text>
                    </TouchableOpacity>

                    {/* {isLogin &&
                        <Text style={{marginTop: 20}}>
                            Selaman Berhasil Login : {username}
                        </Text>
                    } */}
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {padding: 30},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    isi: {
        paddingLeft: 10,
        paddingRight: 10
    },
    wrapperInput: {
        marginTop: 20
    },
    textInputName: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        height: 40
    },
    textInputAddress: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        borderRadius: 5,
        height:100, 
        textAlignVertical: 'top',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
