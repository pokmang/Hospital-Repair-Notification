import { IonButton, IonCol, IonItem, IonPage, IonRow } from '@ionic/react';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { IonContent } from '@ionic/react';
import Topbar from '../components/Topbar';
import CardStatus from '../components/CardStatus';
import { AppContext } from '../contexts/AppProvider';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
        padding: 0px;
    }
`

const Home = () => {
    const { repairsController, authController } = useContext(AppContext)
    const { repairs } = repairsController
    const { user } = authController

    const name = user ? user.name : null;
    const position = user ? user.position.name : null;

    const positionCheck = () => {
        if (position === "ผู้ดูแลระบบ" || position === "เจ้าหน้าที่") {
            return (
                repairs && repairs.sort((a, b) => 
                b.noti_date.valueOf() - a.noti_date.valueOf())
                    .map((repair, index) => {
                        return (
                            <Link key={index} to={`/home/repairlist/${repair.id}`}>
                                <CardStatus repair={repair} />
                            </Link>
                        )
                    })
            )
        }
        if (position === "ผู้ใช้งานทั่วไป") {
            return (
                repairs && repairs.filter(repair => repair.repairer === name)
                    .sort((a, b) => b.noti_date.valueOf() - a.noti_date.valueOf())
                    .map((repair, index) => {
                        return (
                            <Link key={index} to={`/home/repairlist/${repair.id}`}>
                                <IonItem>
                                    <CardStatus repair={repair} />
                                </IonItem>
                            </Link>
                        )
                    })
            )
        }
    }
    return (
        <StyledWrapper>
            <IonPage >
                <IonContent>
                    <Topbar title={'หน้าแรก'} />
                    <h1>รายการแจ้งซ่อม</h1>
                    {
                        user && positionCheck()
                    }
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default Home
