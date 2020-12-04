import React from 'react';
import styled from "styled-components"
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
// import firebase from '../firebase'
import firebase from 'firebase'
const StyledWrapper = styled.div`
    background-image: url('https://lh3.googleusercontent.com/lkna-rrOEjpKNmNcMrKrKXIjqJ-Tyi5jBp0o7tGb5k75JCk9fbFlD5rPLLIrtknUG9yRF-Y2GCsNIZMy=w1080-h608-p-no-v0');
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Login = () => {
    const test = firebase.firestore().collection('repairs').doc('riMMYqyHRSJThfFUwKqU')
        .get()
        .then((doc) => {
            console.log(doc.data());
        })
    console.log(test);

    return (
        <StyledWrapper>

        </StyledWrapper>
    )
}

export default Login;
