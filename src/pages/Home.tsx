import { IonButton, IonItem, IonPage } from '@ionic/react';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { IonContent } from '@ionic/react';
import Topbar from '../components/Topbar';
import CardStatus from '../components/CardStatus';
import { AppContext } from '../contexts/AppProvider';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { List, Typography, Divider } from 'antd';


const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;

    .title-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .status{
        display: flex;
        margin-left: 8px;
        margin-right: 8px;
    }
    h1{
        padding-left: 16px;
    }
    .status{
        opacity: 0.6;
    }
    .topic{
        margin-top: 10px;
    }
    .img {
        border-radius: 50px;
    }
    .col{
        display: flex;
        justify-content: space-between;
    }
    .container{
        margin-left:20px;
        margin-right: 20px;
    }
    .box1 {
    background: linear-gradient(to right, #179eec, #2b32b2);
   }
   .box2 {
    background: linear-gradient(to right, #ede574, #e1f5c4);
   }
   .box3 {
    background: linear-gradient(to right, #2193b0, #6dd5ed);
   }
   .box4 {
    background: linear-gradient(to right, #c93445, #ea384d);
   }
   .box5 {
    background: linear-gradient(to right, #1dc569, #93f9b9);
   }
   
    
`

const Home = () => {
    const history = useHistory()
    const { repairsController, authController } = useContext(AppContext)
    const { repairs } = repairsController
    const { user } = authController
    const name = user ? user.name : null;
    const position = user ? user.position.name : null;
    const uid = user ? user.uid : null

    const positionCheck = () => {
        if (position === "ผู้ดูแลระบบ" || position === "เจ้าหน้าที่") {
            return (
                repairs && repairs.sort((a, b) =>
                    b.noti_date.valueOf() - a.noti_date.valueOf())
                    .map((repair, index) => {
                        return (
                            <Link key={index} to={`/repairlist/${repair.id}`}>
                                <CardStatus repair={repair} bnt={'ซ่อนปุ่ม'} />
                            </Link>
                        )
                    })
            )
        }

        if (position === "ผู้ใช้งานทั่วไป") {
            return (
                repairs && repairs.filter(repair => repair.informer === name).length ? (repairs.filter(repair => repair.informer === name)
                    .sort((a, b) => b.noti_date.valueOf() - a.noti_date.valueOf())
                    .map((repair, index) => {
                        return (
                            <Link key={index} to={`/repairlist/${repair.id}`}>
                                <IonItem>
                                    <CardStatus repair={repair} bnt={'ซ่อนปุ่ม'} />
                                </IonItem>
                            </Link>
                        )
                    }))
                    : <IonButton color="light" expand="block" shape="round" onClick={() => history.push(`/users/${uid}/request-repairing`)}> แจ้งซ่อม </IonButton>
            )
        }
    }
    return (
        <StyledWrapper>
            <IonPage >
                <IonContent>
                    <Topbar title={'หน้าแรก'} bnt={'ซ่อนปุ่ม'} />
                    <h1>รายการแจ้งซ่อม</h1>
                    <div className="container">
                        <div>อธิบายสถานะ</div>
                        <div className="col">
                            <div className="box2">รอการตอบรับ</div>
                            <div className="box3">กำลังดำเนินการ </div>
                            <div className="box1">รอประเมิน </div>
                            <div className="box4">ยกเลิกแล้ว</div>
                            <div className="box5">เรียบร้อย </div>
                        </div>
                    </div>

                    {
                        user && positionCheck()
                    }
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default Home
