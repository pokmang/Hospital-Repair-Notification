import { IonPage, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonAlert } from '@ionic/react';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { AppContext } from '../contexts/AppProvider';



const StyledWrapper = styled.div`

    .title{
        padding-left: 25px;
    }
    .button2{
        margin-top: 33px;
    }
`
const ToppicEvaluate = () => {
    const history = useHistory();
    // const { authController, userController ,repairsController } = useContext(AppContext);
    // const { userObj, departments } = userController;
    // const { addTopic } = repairsController;

    const [ToppicOne, setToppicOne] = useState<string>('');
    const [ToppicTwo, setToppicTwo] = useState<string>('');
    const [ToppicThree, setToppicThree] = useState<string>('');
    const [ToppicFour, setToppicFour] = useState<string>('');
    const [ToppicFive, setToppicFive] = useState<string>('');
    const [ToppicOther, setToppicOther] = useState<string>('');




    const confirmAddTopic = () => {
   
    }
    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'หัวข้อประเมิน'} />
                </IonHeader>
                <IonContent>
                    <h1 className="title">หัวข้อประเมิน</h1>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">1</IonLabel>
                            <IonInput value={ToppicOne} onIonChange={e => setToppicOne(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">2</IonLabel>
                            <IonInput value={ToppicTwo} onIonChange={e => setToppicTwo(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">3</IonLabel>
                            <IonInput value={ToppicThree} onIonChange={e => setToppicThree(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">4</IonLabel>
                            <IonInput value={ToppicFour} onIonChange={e => setToppicFour(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">5</IonLabel>
                            <IonInput value={ToppicFive} onIonChange={e => setToppicFive(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">อื่นๆ</IonLabel>
                            <IonInput value={ToppicOther} onIonChange={e => setToppicOther(e.detail.value)}></IonInput>
                        </IonItem>
                        
                    </IonList>
                    <div className="button2">
                        <IonButton expand="block" onClick={confirmAddTopic}>เพิ่ม</IonButton>
                    </div>
                   
               
                </IonContent>
            </IonPage>
        </StyledWrapper>
    );
};
export default ToppicEvaluate
