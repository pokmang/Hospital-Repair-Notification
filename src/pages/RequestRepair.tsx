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
    .title{
        text-align: center;
    }
    .up{
        padding: 15px;
    }
`

const RequestRepair = () => {
    const history = useHistory();
    const { userController, repairsController } = useContext(AppContext);
    const { userObj, departments } = userController;
    const { addRepair } = repairsController;

    const params = useParams<{ id: string }>();
    const user = userObj ? userObj[params.id] : null;
    const informer = user && user.name

    const [device, setDevail] = useState<string>('');
    const [detail, setDetail] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [fileList, setFileList] = useState([]);
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const handleConfirm = async () => {
        setShowAlert1(true)
    }

    const confirmRequest = async () => {
        setShowAlert1(false)

        const promises = fileList.map((file) => {
            return uploadFile(file.originFileObj)
        });

        setShowAlert2(true)

        const urls = await Promise.all(promises);
        addRepair({
            informer,
            department,
            noti_date: new Date(),
            detail,
            device,
            photos: urls,
            status: "รอการตอบรับ",
            avatar: user.avatar
        });
        history.push("/");

    }

    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'แจ้งซ่อม'} />
                </IonHeader>
                <IonContent>
                    <h1 className="title">แจ้งซ่อม</h1>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">อุปกรณ์แจ้งซ่อม</IonLabel>
                            <IonInput value={device} onIonChange={e => setDevail(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">รายละเอียดการแจ้งซ่อม</IonLabel>
                            <IonInput value={detail} onIonChange={e => setDetail(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>แผนก</IonLabel>
                            <IonSelect value={department} okText="ยืนยัน" cancelText="ยกเลิก" onIonChange={e => setDepartment(e.detail.value)}>
                                {departments.map((value, index) => (<IonSelectOption key={index} value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>
                        <div className="up">
                            <UploadGallery fileList={fileList} onChange={setFileList} />
                        </div>

                        <IonButton expand="block" className="button" onClick={handleConfirm}>ยืนยัน</IonButton>
                    </IonList>
                    {device !== '' && detail !== '' && department !== '' && fileList.length !== 0 ?
                        <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => setShowAlert1(false)}
                            cssClass='my-custom-class'
                            header={'แจ้งซ่อม?'}
                            message={`โปรดกด "ยืนยัน" เพื่อทำการแจ้งซ่อม.`}
                            buttons={[
                                {
                                    text: 'ยกเลิก',
                                    role: 'ยกเลิก',
                                    cssClass: 'secondary',
                                },
                                {
                                    text: 'ยืนยัน',
                                    handler: confirmRequest
                                }
                            ]}
                        /> : <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => {
                                setShowAlert1(false)
                            }}
                            cssClass='my-custom-class'
                            header={'ล้มเหลว!'}
                            message={'กรุณาใส่ข้อมูลให้ครบถ้วน.'}
                            buttons={['ตกลง']}
                        />
                    }
                    <IonAlert
                        isOpen={showAlert2}
                        onDidDismiss={() => {
                            setShowAlert2(false)
                        }}
                        cssClass='my-custom-class'
                        header={'กำลังดำเนินการ!'}
                    />
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default RequestRepair
