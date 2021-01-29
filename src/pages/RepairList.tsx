import { IonPage, IonContent, IonCol, IonRow, IonButton, IonImg, IonIcon, IonGrid } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { time } from 'ionicons/icons';
import { Button, Timeline } from 'antd';
import { useParams } from 'react-router';
import { AppContext } from '../contexts/AppProvider';
import { Link } from 'react-router-dom';


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
        G
        
    }
    .photo{
        display: flex;
    place-content: center;
    }
`
const RepairList = () => {
    const { repairsController, authController } = useContext(AppContext);
    const { user } = authController;
    const userName = user ? user.name : null;
    const userPosition = user ? user.position.name : null;
    const { repairObj, updateRepair } = repairsController;
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

    const handleYes = () => {
        updateRepair(
            params.id,
            {
                status: "กำลังดำเนินการ",
                repair_date: new Date,
                repairer: userName
            }
        )
    }
    const handleRepaired = () => {
        updateRepair(
            params.id,
            {
                status: "รอประเมิน",
                repaired_date: new Date
            }
        )
    }
    const handleCancel = () => {
        updateRepair(
            params.id,
            {
                status: "ยกเลิกแล้ว",
                cancel_date: new Date,
                repairer: userName
            }
        )
    }

    const TimelineRepair = () => {
        switch (status) {
            case "รอการตอบรับ":
                return (
                    <>
                        {userPosition === "ผู้ดูแลระบบ" || userPosition === "เจ้าหน้าที่" ? (
                            <>
                                <IonButton color="primary" expand="block" className="bnt" onClick={handleYes}>ตอบรับ</IonButton>
                                <IonButton color="danger" expand="block" onClick={handleCancel}>ยกเลิก</IonButton>
                            </>
                        ) : null}
                    </>
                )
            case "กำลังดำเนินการ":
                return (
                    <>
                        {userPosition === "ผู้ดูแลระบบ" || userPosition === "เจ้าหน้าที่" ? (
                            <>
                                <IonButton color="primary" expand="block" className="bnt" onClick={handleRepaired}>เสร็จสิ้น</IonButton>
                                <IonButton color="danger" expand="block" onClick={handleCancel}>ยกเลิก</IonButton>
                            </>
                        ) : null}
                    </>
                )
            case "เสร็จสิ้น":
                return (
                    <>
                        <IonButton color="primary" expand="block" className="bnt">เสร็จสิ้น</IonButton>
                    </>
                )
            case "รอประเมิน":
                return (
                    <>
                        {userName === informer ? (
                            <Link to={`/repairlist/${params.id}/evaluate`}>
                                <IonButton color="primary" expand="block" className="bnt">ประเมิน</IonButton>
                            </Link>
                        ) : null}
                    </>
                )
            default: 
      
                break;
        }
    }

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
                        <Timeline>
                            {notiDate && <Timeline.Item color="#FFDD82">({notiDate}) แจ้งซ่อมโดย "{informer}" รอการตอบรับจาก เจ้าหน้าที่</Timeline.Item>}
                            {repairDate && <Timeline.Item color="#618AE0">({repairDate}) "{repairer}" รับเรื่องแจ้งซ่อม กำลังดำเนินการซ่อมแซม</Timeline.Item>}
                            {repairedDate && <Timeline.Item color="#6BB4DF">({repairedDate}) ดำเนินการเสร็จสิ้น รอประเมินจาก "{informer}"</Timeline.Item>}
                            {evaluateDate && <Timeline.Item color="#99D1A3">({evaluateDate}) "{informer}" ประเมินการซ่อมเรียบร้อย</Timeline.Item>}
                            {cancelDate && <Timeline.Item color="#eb2929">({cancelDate}) "{repairer}" ยกเลิกการแจ้งซ่อม</Timeline.Item>}
                        </Timeline>
                        {TimelineRepair()}
                    </IonGrid>
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default RepairList
