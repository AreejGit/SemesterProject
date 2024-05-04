import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Signup({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    name: '',
    dob: '',
    country: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signup form data:', form);
    // Navigate to the next screen after signup
    // navigation.navigate('NextScreen'); // Replace 'NextScreen' with the name of your next screen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              onChangeText={(name) => setForm({ ...form, name })}
              placeholder="Your Name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.name}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <TextInput
              onChangeText={(dob) => setForm({ ...form, dob })}
              placeholder="MM/DD/YYYY"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.dob}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Country</Text>
            <TextInput
              onChangeText={(country) => setForm({ ...form, country })}
              placeholder="Your Country"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.country}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              onChangeText={(phone) => setForm({ ...form, phone })}
              placeholder="Phone Number"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.phone}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="Password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              onChangeText={(confirmPassword) =>
                setForm({ ...form, confirmPassword })
              }
              placeholder="Confirm Password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.confirmPassword}
            />
          </View>

          <TouchableOpacity onPress={handleSignup}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Example'); // Navigate back to the sign-in screen
          }}
          style={{ marginTop: 'auto' }}
        >
          <Text style={styles.formFooter}>
            Already have an account?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
    padding: 24,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
});