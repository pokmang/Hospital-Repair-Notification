import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'
import styled from 'styled-components';
import bg from '../img/background.jpg';
import { IonMenu, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import Topbar from '../components/Topbar';

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
   
    /* background-image: url('${bg}'); */
    background-size: cover;
   .title-card{
       display: flex;
       justify-content: space-between;
    align-items: center;
   }
   .status{
    opacity: 0.6;
   }

`

const CardStatus = () => {
    return (
        <StyledWrapper>


            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <div className="title-card">
                            <p>เครื่องปริ้นต์เสีย  </p>
                            <IonButton color="light" className="status">รอดำเนินการ</IonButton>
                        </div>
                        <h1>แผนกบัญชี</h1>
                        <p>แจ้งโดย</p>
                        <p>สมชาย  เชื่อมัน</p>
                        <small>แจ้งโดย 10 นาทีที่แล้ว</small>
                    </IonCardContent>
                </IonCard>

            </IonContent>


        </StyledWrapper>
    )
}

export default CardStatus
