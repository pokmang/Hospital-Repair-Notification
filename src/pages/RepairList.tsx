import { IonPage, IonHeader, IonContent, IonCol, IonRow, IonButton, IonImg, IonIcon } from '@ionic/react';
import React, { useContext } from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import avatar from '../img/avatar.png';
import { time } from 'ionicons/icons';
import { Timeline } from 'antd';
import { useParams } from 'react-router';
import { AppContext } from '../contexts/AppProvider';

const StyledWrapper = styled.div`
    .status{
        align-items: center;
    }
    small{
        opacity: 0.6;
    }
`
const RepairList = () => {
    const { repairsController, userController } = useContext(AppContext)
    const { repairObj } = repairsController
    const params = useParams<{ id: string }>();
    const repair = repairObj ? repairObj[params.id] : null;

    console.log(repair);

    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'รายการแจ้งซ่อม'} />
                </IonHeader>
                <IonContent>
                    <IonRow className="status">
                        <IonCol> <h3 >เครื่องปริ้นเสีย</h3></IonCol>
                        <IonCol><IonButton className="bnt" color="light" expand="block">เสร็จสิ้น</IonButton></IonCol>
                    </IonRow>
                    <IonRow>
                        <p>เครื่องปริ้นเปิดเครื่องไม่ได้ ไฟที่เครื่องไม่ติด ลองถอดเสียบใหม่หลายรอบแล้วก็ยังไม่ติด</p>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonImg className="img" src={avatar} />
                        </IonCol>
                        <IonCol>
                            <IonImg className="img" src={avatar} />
                        </IonCol>
                        <IonCol>
                            <IonImg className="img" src={avatar} />
                        </IonCol>
                    </IonRow>
                    <p>แผนกบัญชี</p>
                    <IonRow>
                        <IonCol>
                            <IonIcon icon={time} ></IonIcon>
                            <small>แจ้งเมื่อ 10 นาที่ที่แล้ว</small>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <Timeline>
                            <Timeline.Item color="#FFDD82">(2020-11-12 10:00) แจ้งซ่อมโดย สมชาย เข็มกลัด</Timeline.Item>
                            <Timeline.Item color="#618AE0">(2020-11-12 10:05) สมพร เชื่อมั่น รับเรื่องแจ้งซ่อม</Timeline.Item>
                            <Timeline.Item color="#6BB4DF">(2020-11-12 10:10) ดำเนินการเสร็จสิ้น รอการประเมิณ</Timeline.Item>
                            <Timeline.Item color="#99D1A3">(2020-11-12 10:10) สมชาย เข็มกลัด ประเมิณการซ่อมเรียบร้อย</Timeline.Item>
                        </Timeline>
                    </IonRow>
                    <IonRow>

                    </IonRow>
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default RepairList
