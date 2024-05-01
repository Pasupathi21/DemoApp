import { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Formik, FormikHelpers } from 'formik'
import CheckBox from '@react-native-community/checkbox';
import RNSelect from 'react-native-picker-select'

export default function LoginForm() {
    const [formValue, setFormValue] = useState<Record<string, any>>({
        username: null,
        mobileno: null,
        password: null,
        termsAndCondition: false
    })
    const submitForm = () => {
        console.log('form data >>>>>>', formValue)
    }
    const handleChange = (key: string, value: any) => {
        setFormValue({
            ...formValue,
            [key]: value
        })
    }
    return (
        <View style={loginFormStyle.form_container}>
            <View >
                {/* <Image 
                source={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522online%2Bregistration%2522&psig=AOvVaw1gDMeO26KkNZKPZ2cCT8Y3&ust=1714631477684000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCN4ZPq64UDFQAAAAAdAAAAABAE"}
                /> */}
            </View>
            <View>
                <View>
                    <TextInput
                        style={loginFormStyle.textInput}
                        placeholder='enter username'
                        value={formValue?.username}
                        onChangeText={(v) => handleChange('username', v)}
                    />
                </View>
                <View>
                    <TextInput
                        style={loginFormStyle.textInput}
                        placeholder='enter mobile number'
                        value={formValue?.mobileno}
                        keyboardType="numeric"
                        onChangeText={(v) => handleChange('mobileno', v)}
                    />
                </View>
                <View>
                    <TextInput
                        style={loginFormStyle.textInput}
                        placeholder="enter password"
                        value={formValue?.password}
                        onChangeText={(v) => handleChange('password', v)}
                    />
                </View>
                <View style={loginFormStyle.checkbox_container}>
                    <CheckBox
                        value={formValue?.termsAndCondition}
                        onValueChange={(v) => handleChange('termsAndCondition', v)}
                    />
                    <Text>accept terms & conditions</Text>
                </View>
                <View style={loginFormStyle.divider} />
                <View>
                    <TouchableOpacity
                        style={loginFormStyle.submit_btn}
                        onPress={() => submitForm()}
                        // disabled={true}
                    >
                        <Text style={loginFormStyle.submit_btn_color}>submit</Text>
                    </TouchableOpacity>
                    {/* <Button
                        title="submit"
                        color="#32012F"
                        // disabled={true}
                    /> */}
                </View>
            </View>
        </View>
    )
}
const loginFormStyle = StyleSheet.create({
    form_container: {
        height: '50%',
        width: '70%',
        display: 'flex',
        justifyContent: 'center',
        borderColor: '#ff0000',
        borderRadius: 10,
        gap: 5
    },
    textInput: {
        // backgroundColor: 'lightblue',
        borderRadius: 5,
        borderColor: 'lightblue',
        borderWidth: 1,
        width: '100%',
        color: 'white'
    },
    button: {
        borderRadius: 5,
        color: "#32012F",
        width: '100%'
    },
    divider: {
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: '#524C42'
    },
    checkbox_container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',

    },
    submit_btn: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        height: 'auto',
        borderRadius: 5,
        backgroundColor: "#32012F",
    },
    submit_btn_color: {
        color: 'white'
    }

})