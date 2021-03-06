// This file adapted from example at https://reactnative.dev/docs/textinput
import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const AuthButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => (props.bottomButton ? [
        {
          backgroundColor: pressed ? '#00000033' : 'transparent',
        }, styles.bottomButton] : [
        {
          backgroundColor: pressed ? '#E1E1E1' : '#FFFBFC',
        }, styles.button]
      )}
      onPress={() => { props.onPress(); }}
    >
      <Text style={props.bottomButton ? styles.bottomButtonText : styles.buttonText}>
        { props.text }
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
  },
  bottomButton: {
    elevation: 40,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 30,
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: '#468189',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  bottomButtonText: {
    fontSize: 18,
    color: '#FFFBFC',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AuthButton;
