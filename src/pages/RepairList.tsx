import { IonPage, IonContent, IonCol, IonRow, IonButton, IonImg, IonIcon, IonGrid } from '@ionic/react';
import React, { useContext } from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { time } from 'ionicons/icons';
import { Button, Timeline } from 'antd';
import { useParams } from 'react-router';
import { AppContext } from '../contexts/AppProvider';


const StyledWrapper = styled.div`
    .page{
        padding: 0 1vh 1vh 1vh;
    }
    .status{
        text-align:center;
        background-color:yellow;
    }
    small{
        opacity: 0.6;
    }
    .bnt{
        margin-bottom: 3px;
    }
    .img{
        height:150px;
        width:150px
        
        
    }
    .photo{
        display: flex;
    place-content: center;
    }
`
const RepairList = () => {
    const { repairsController, userController } = useContext(AppContext)
    const { repairObj } = repairsController
    const params = useParams<{ id: string }>();
    const repair = repairObj ? repairObj[params.id] : null;
    const detail = repair ? repair.detail : null;
    const device = repair ? repair.device : null;
    const department = repair ? repair.department.name : null;
    const photos = repair ? repair.photos : null;
    const status = repair ? repair.status : null;
    const informer = repair ? repair.informer : null;
    const repairer = repair ? repair.repairer : null;

    const notiDate = repair ? repair.noti_date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : null;
    const repairDate = repair && repair.repair_date ? repair.repair_date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : null;
    const repairedDate = repair && repair.repaired_date ? repair.repaired_date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : null;
    const cancelDate = repair && repair.cancel_date ? repair.cancel_date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : null;
    const evaluateDate = repair && repair.evaluate_date ? repair.evaluate_date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : null;

    console.log(repair);

    return (
        <StyledWrapper>
            <IonPage>
                <Topbar title={'รายการแจ้งซ่อม'} />
                <IonContent >
                    <IonGrid className="page">
                        <IonRow >
                            <IonCol> <h1>{device}</h1></IonCol>
                            <IonCol ><h1 className="status"> {status}</h1></IonCol>
                        </IonRow>
                        <IonRow>
                            <p>รายละเอียด: {detail}</p>
                        </IonRow>
                        <IonRow>
                            <IonCol className='photo'>
                                {
                                    photos && photos.map((repair, index) => {
                                        return (
                                            <IonImg key={index} className="img" src={repair} />
                                        )
                                    })
                                }

                            </IonCol>
                        </IonRow>
                        <p>แผนก: {department}</p>
                        <IonRow>
                            <IonCol>
                                <IonIcon icon={time} ></IonIcon>
                                <small>แจ้งเมื่อ 10 นาที่ที่แล้ว</small>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <Timeline>
                                <Timeline.Item color="#FFDD82">({notiDate}) แจ้งซ่อมโดย {informer} รอการตอบรับจาก เจ้าหน้าที่</Timeline.Item>
                                <Timeline.Item color="#618AE0">({repairDate}) {repairer} รับเรื่องแจ้งซ่อม กำลังดำเนินการซ่อมแซม</Timeline.Item>
                                <Timeline.Item color="#6BB4DF">({repairedDate}) ดำเนินการเสร็จสิ้น รอประเมินจาก {informer}</Timeline.Item>
                                <Timeline.Item color="#99D1A3">({evaluateDate}) {informer} ประเมินการซ่อมเรียบร้อย</Timeline.Item>
                                <Timeline.Item color="#99D1A3">({cancelDate}) {repairer} ยกเลิกการแจ้งซ่อม</Timeline.Item>
                            </Timeline>
                        </IonRow>
                        <IonButton color="primary" expand="block" className="bnt">ตอบรับ</IonButton>
                        <IonButton color="primary" expand="block" className="bnt">เสร็จสิ้น</IonButton>
                        <IonButton color="danger" expand="block" >ยกเลิก</IonButton>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default RepairList
