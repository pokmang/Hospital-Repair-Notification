import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonPage, IonHeader, IonContent, IonList, IonAlert } from '@ionic/react';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import UploadGallery from '../components/UploadGallery';
import { AppContext } from '../contexts/AppProvider';
import { uploadFile } from '../firebase';

const StyledWrapper = styled.div`
    h1{
        margin-left: 16px;
    }
`

const RequestRepair = () => {
    const history = useHistory();
    const { userController, repairsController } = useContext(AppContext);
    const { userObj, departments } = userController;
    const { addRepair } = repairsController;

    const params = useParams<{ id: string }>();
    const user = userObj ? userObj[params.id] : null;
    const repairer = user && user.name

    const [device, setDevail] = useState<string>('');
    const [detail, setDetail] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [fileList, setFileList] = useState([]);
    const [showAlert1, setShowAlert1] = useState(false);

    const handleConfirm = async () => {
        setShowAlert1(true)
    }

    const confirmRequest = async () => {
        setShowAlert1(false)
        const promises = fileList.map((file) => {
            return uploadFile(file.originFileObj)
        });
        const urls = await Promise.all(promises);
        addRepair({
            repairer,
            department,
            repair_notification_date: new Date(),
            detail,
            device,
            photo: urls,
            status: "รอการตอบรับ"
        });
        history.push(`/home/${user.id}`);
    }

    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'แจ้งซ่อม'} />
                </IonHeader>
                <IonContent>
                    <h1>แจ้งซ่อม</h1>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">หัวข้อการแจ้งซ่อม</IonLabel>
                            <IonInput value={device} onIonChange={e => setDevail(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">รายละเอียดการแจ้งซ่อม</IonLabel>
                            <IonInput value={detail} onIonChange={e => setDetail(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>แผนก</IonLabel>
                            <IonSelect value={department} okText="Okay" cancelText="Dismiss" onIonChange={e => setDepartment(e.detail.value)}>
                                {departments.map((value, index) => (<IonSelectOption key={index} value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>

                        <UploadGallery fileList={fileList} onChange={setFileList} />
                        <IonButton expand="block" className="button" onClick={handleConfirm}>ยืนยัน</IonButton>
                    </IonList>
                    {device !== '' && detail !== '' && department !== '' && fileList.length !== 0 ?
                        <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => setShowAlert1(false)}
                            cssClass='my-custom-class'
                            header={'Request repair?'}
                            message={`Please confirm to request repair.`}
                            buttons={[
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                },
                                {
                                    text: 'Okay',
                                    handler: confirmRequest
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

export default RequestRepair
