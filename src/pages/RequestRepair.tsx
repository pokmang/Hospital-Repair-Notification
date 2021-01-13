import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonPage, IonHeader, IonContent, IonList } from '@ionic/react';
import React, { useContext } from 'react'
import { useState } from 'react';
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
    const { userController, repairsController } = useContext(AppContext);
    const { positions, departments } = userController;
    const { addRepair } = repairsController;
    const [device, setTitle] = useState<string>('');
    const [detail, setdetail] = useState<string>('');
    const [department, setDepartment] = useState<string>('');

    const [fileList, setFileList] = useState([]);

    const handleConfirm = async () => {
        console.log("ยืนยัน");
        const arrImg = []

        // for (let i = 0; i < fileList.length; i++) {
        //     arrImg.push(await uploadFile(fileList[i]))
        // }

        const promises = fileList.map((file) => {
            console.log('file', file);
            return uploadFile(file.originFileObj)
        });
        const urls = await Promise.all(promises);

        addRepair({
            detail,
            device,
            photo: urls,

        })
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
                            <IonInput value={device}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">รายละเอียดการแจ้งซ่อม</IonLabel>
                            <IonInput value={detail}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>แผนก</IonLabel>
                            <IonSelect value={department} okText="Okay" cancelText="Dismiss" onIonChange={e => setDepartment(e.detail.value)}>
                                {departments.map(value => (<IonSelectOption value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>

                        <UploadGallery fileList={fileList} onChange={setFileList} />
                        <IonButton expand="block" className="button" onClick={handleConfirm}>ยืนยัน</IonButton>
                    </IonList>
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default RequestRepair
