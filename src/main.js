import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPhQ6S3ze3ow--XjncKr67jynCs8oPAj8",
    authDomain: "vue-auth-bf4f0.firebaseapp.com",
    projectId: "vue-auth-bf4f0",
    storageBucket: "vue-auth-bf4f0.appspot.com",
    messagingSenderId: "991512380355",
    appId: "1:991512380355:web:9120e7216cc0f00e7cb376",
    measurementId: "G-3GNB8XETCD"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
