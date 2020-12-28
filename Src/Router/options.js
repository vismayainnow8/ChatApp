import {colors} from '../Assets';

export const noTopBar = {
  headerShown: false,
};

export const signInStackTopbar = (headerTitle) => ({
  headerTitle,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerStyle: {
    backgroundColor: 'white',
    elevation: 0,
  },
  headerTintColor: '#128c7e',
});

export const appStackTopbar = (headerTitle) => ({
  headerTitle,
  headerStyle: {
    backgroundColor: '#075e54',
    elevation: 0,
  },
  headerTitleAlign: 'left',
  headerTintColor: 'white',
});

export const homeTabOptions = {
  indicatorStyle: {backgroundColor: '#FFF', height: 3},
  labelStyle: {color: '#FFF'},
  style: {backgroundColor: colors.themePrimary.dark},
};
