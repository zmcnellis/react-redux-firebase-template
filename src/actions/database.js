import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAyUkjdcyczl0RkgKpWv3OocYy4dlyR1Rk',
  authDomain: 'eventapp-f9ab0.firebaseapp.com',
  databaseURL: 'https://eventapp-f9ab0.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;

