import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import CustomInput from '../../components/CustomInput '
import React, {useEffect,useLayoutEffect} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'
import { Avatar } from 'react-native-elements'


const SignUpScreen = ({navigation}) => {

    useLayoutEffect(()=>{
        navigation.setOptions({
             headerTitle: "Sign Up"
        });
       },[navigation])

 
    const signUpValidationSchema = yup.object().shape({
        
        fullName: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names')
          .required('Full name is required'),
        phoneNumber: yup
          .string()
          .matches(/(07)(\d){8}\b/, 'Enter a valid phone number')
          .required('Phone number is required'),
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email is required'),
        password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
          .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
          .matches(/\d/, "Password must have a number")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
          .min(8, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),

      })
    //   if(isValid !== ''){

    //     navigation.navigate("SignUp")
    //   }
 
  return (
    <>
      <StatusBar barStyle="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text>Sign Up Screen</Text>

          <Formik
             validationSchema={signUpValidationSchema}
             
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: ''
            }}
            onSubmit={values => console.log(values) || navigation.navigate("Home1")}
          >
            {({ 
                             handleChange,
                             handleBlur,
                             handleSubmit,
                             values,
                             errors,
                             touched,
                             isValid,
             }) => (
              <>
                <TextInput
                  placeholder="Full Name"
                  style={styles.textInput}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
                {(errors.fullName && touched.fullName) &&
                  <Text style={styles.errorText}>{errors.fullName}</Text>
                }

                <TextInput
                name="email"
         placeholder="Email Address"
         style={styles.textInput}
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         keyboardType="email-address"
       />
                {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }

            <TextInput
                  placeholder="Phone Number"
                  style={styles.textInput}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                />
                {(errors.phoneNumber && touched.phoneNumber) &&
                  <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                }

<TextInput
         placeholder="Password"
         style={styles.textInput}
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry
       />
                {(errors.password && touched.password) &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }


                <Button
                onPress={handleSubmit}
                title="SIGN UP"
                disabled={!isValid}
                
              />
  
  <View style={{marginTop:15}}>
          <Text>Do you have an account? <Text onPress={()=> navigation.navigate("SignIn")} style={{color: "#088FFA",marginLeft:10}}>Sign In</Text></Text>
   </View>       
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})
export default SignUpScreen