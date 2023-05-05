import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {},
  backgroundStyle: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});

export const LoginStyles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  inputs: {
    marginTop: 15,
  },
  login: {
    // backgroundColor: 'blue',
    width: '100%',
    marginTop: 10,
  },
  textInput: {
    // backgroundColor: 'pink',
    width: '100%',
  },
  signUp: {
    alignItems: 'flex-end',
    // backgroundColor: 'grey',
    width: '100%',
  },
  button: {
    width: '50%',
  },
  buttonContainer: {
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // width: '50%',
    marginTop: 15,
  },
  forgot: {
    alignItems: 'flex-start',
  },
  error: {
    color: 'red',
  },
});

export const ItemStyles = StyleSheet.create({
  imageStyle: {},
  viewTextStyle: {
    position: 'absolute',
  },
  textStyle: {},
});
