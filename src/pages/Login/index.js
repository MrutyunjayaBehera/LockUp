import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {Text} from '../../common/components';
import useLoginWithEmail from './useLoginWithEmail';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const PASSWORD_MIN_LENGTH = 8;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const {loginWithEmail = () => {}} = useLoginWithEmail();

  const handleEmailChange = text => {
    setEmail(text);
    setEmailError(null); // Clear error when user starts typing again
  };

  const handlePasswordChange = text => {
    setPassword(text);
    setPasswordError(null); // Clear error when user starts typing again
  };

  const validateEmail = e => {
    if (!EMAIL_REGEX.test(e)) {
      setEmailError('Invalid email format');
      return false;
    }
    return true;
  };

  const validatePassword = p => {
    if (p.length < PASSWORD_MIN_LENGTH) {
      setPasswordError(
        `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`,
      );
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      // Login logic here (e.g., send API request)
      loginWithEmail({
        email,
        password,
      });
      // Handle successful login (e.g., navigate to another screen)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={'#221f20'}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address" // Set keyboard type for email
        autoCapitalize="none" // Prevent auto-capitalization
        autoCorrect={false} // Disable auto-correction for emails
      />
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={'#221f20'}
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true} // Hide password characters
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#221f20',
    borderRadius: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default Login;
