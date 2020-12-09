import { IonAlert, IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Topbar from '../components/Topbar'
import { AppContext } from '../contexts/AppProvider'

const StyledWrapper = styled.div`
    .title{
        padding:0 13px;
        margin:13px 0 0 0 ;
    }
    .button{
        margin-top:20px;
    }
`
const EditProfile = () => {
    const { userController } = useContext(AppContext);
    const { userObj, users, updateUser, positions, departments } = userController;
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [showAlert1, setShowAlert1] = useState(false);

    const handleRegister = () => {
        setShowAlert1(true)
    }

    const params = useParams<{ id: string }>();

    const user = userObj ? userObj[params.id] : null;
    const userName = user ? user.name : null;
    const userPhone = user ? user.phone : null;
    const userPosition = user ? user.position : { name: null };
    const userDepartment = user ? user.department : { name: null };

    useEffect(() => {
        if (user) {
            setName(userName);
            setPhone(userPhone);
            setPosition(userPosition.name);
            setDepartment(userDepartment.name);
        }
    }, [params, user]);

    return (
        <StyledWrapper>
            <IonPage>
                <Topbar title={'แก้ไขโปรไฟล์'} />
                <IonContent>
                    <h1 className="title">ข้อมูลทั่วไป</h1>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">ชื่อ - สกุล</IonLabel>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>ตำแหน่ง</IonLabel>
                            {
                                positions && (
                                    <IonSelect value={position} okText="Okay" cancelText="Dismiss" onIonChange={e => setPosition(e.detail.value)}>
                                        {
                                            positions.map((value, index) => (
                                                <IonSelectOption key={index} value={value.name}>{value.name}</IonSelectOption>
                                            ))
                                        }
                                    </IonSelect>
                                )
                            }
                        </IonItem>
                        <IonItem>
                            <IonLabel>แผนก</IonLabel>
                            {
                                department && (
                                    <IonSelect value={department} okText="Okay" cancelText="Dismiss" onIonChange={e => setDepartment(e.detail.value)}>
                                        {
                                            departments.map((value, index) => (
                                                <IonSelectOption key={index} value={value.name}>{value.name}</IonSelectOption>
                                            ))
                                        }
                                    </IonSelect>
                                )
                            }
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">เบอร์โทรศัพท์</IonLabel>
                            <IonInput value={phone} onIonChange={e => setPhone(e.detail.value)}></IonInput>
                        </IonItem>
                    </IonList>
                    <IonButton expand="block" className="button" onClick={handleRegister}>บันทึก</IonButton>
                    {name !== '' && phone !== '' && position !== '' && department !== '' ?
                        <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => {
                                setShowAlert1(false)
                                updateUser(params.id, {
                                    name,
                                    phone,
                                    position: { name: position },
                                    department: { name: department }
                                })
                            }}
                            cssClass='my-custom-class'
                            header={'Edit?'}
                            message={`Please confirm ${name} to edit.`}
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
    )
}

export default EditProfile
