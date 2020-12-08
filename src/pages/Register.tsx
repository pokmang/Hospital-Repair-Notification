import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonButton, IonAlert } from '@ionic/react';
import { AppContext } from '../contexts/AppProvider'
import Topbar from '../components/Topbar';

const StyledWrapper = styled.div`
    .title{
        padding:0 13px;
        margin:13px 0 0 0;
    }
    .button{
        margin-top:20px;
    }
    .grid{
        justify-content:center;
        align-items:center;
        display:flex;
    }
    .right{
        margin-right:auto;
    }
`
const Register = () => {
    const { authController, userController } = useContext(AppContext);
    const { register } = authController;
    const { positions, departments } = userController;
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [showAlert1, setShowAlert1] = useState(false);

    const handleRegister = () => {
        setShowAlert1(true)
    }

    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'เพิ่มผู้ใช้'} />
                </IonHeader>
                <IonContent>
                    <h1 className="title">ข้อมูลผู้ใช้</h1>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">ชื่อ - สกุล</IonLabel>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>ตำแหน่ง</IonLabel>
                            <IonSelect value={position} okText="Okay" cancelText="Dismiss" onIonChange={e => setPosition(e.detail.value)}>
                                {positions.map(value => (<IonSelectOption value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel>แผนก</IonLabel>
                            <IonSelect value={department} okText="Okay" cancelText="Dismiss" onIonChange={e => setDepartment(e.detail.value)}>
                                {departments.map(value => (<IonSelectOption value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">เบอร์โทรศัพท์</IonLabel>
                            <IonInput value={phone} onIonChange={e => setPhone(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">อีเมล์</IonLabel>
                            <IonInput value={email} onIonChange={e => setEmail(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">รหัสผ่าน</IonLabel>
                            <IonInput value={password} onIonChange={e => setPassword(e.detail.value)}></IonInput>
                        </IonItem>
                    </IonList>
                    <IonButton expand="block" className="button" onClick={handleRegister}>เพิ่มผู้ใช้งาน</IonButton>
                    {name !== '' && phone !== '' && email !== '' && password !== '' && position !== '' && department !== '' ?
                        <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => {
                                setShowAlert1(false)
                                console.log(register(email, password, { name, phone, email, position, department }));

                            }}
                            cssClass='my-custom-class'
                            header={'Register?'}
                            message={`Please confirm ${name} to register.`}
                            buttons={[
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                },
                                {
                                    text: 'Okay',
                                }
                            ]}
                        /> : <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => {
                                setShowAlert1(false)
                            }}
                            cssClass='my-custom-class'
                            header={'Alert!'}
                            message={'Please fill in all information.'}
                            buttons={['OK']}
                        />
                    }
                </IonContent>
            </IonPage>
        </StyledWrapper>
    );
};
export default Register;