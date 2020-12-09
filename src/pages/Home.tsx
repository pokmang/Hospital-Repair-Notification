import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.png';
import { IonMenu, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import Topbar from '../components/Topbar';
import CardStatus from '../components/CardStatus';

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

`

const Home = () => {
    return (
        <StyledWrapper>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <Topbar title={'หน้าแรก'} />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <h1>รายการแจ้งซ่อม</h1>
                    </IonRow>
                    <IonRow className="status">
                        <IonCol> <IonButton className="bnt" color="tertiary" expand="block"  >รอดำเนินการ</IonButton></IonCol>
                        <IonCol><IonButton className="bnt" color="light" expand="block">เสร็จสิ้น</IonButton></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <div className="title-card">
                                        <h2>เครื่องปริ้นต์เสีย  </h2>
                                        <IonButton color="tertiary" className="status">รอดำเนินการ</IonButton>
                                    </div>
                                    <h3>แผนกบัญชี</h3>
                                    <p className="topic">แจ้งโดย</p>
                                    <IonRow>
                                        <IonCol>
                                            <IonImg className="img" src={avatar} />
                                        </IonCol>
                                        <IonCol>
                                            <p>สมชาย  เชื่อมัน</p>
                                            <small>แจ้งโดย 10 นาทีที่แล้ว</small>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </StyledWrapper>
    )
}

export default Home
