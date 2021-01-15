import { IonButton, IonCol, IonPage, IonRow } from '@ionic/react';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { IonContent } from '@ionic/react';
import Topbar from '../components/Topbar';
import CardStatus from '../components/CardStatus';
import { AppContext } from '../contexts/AppProvider';

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
    const { repairsController } = useContext(AppContext)
    const { repairs } = repairsController

    return (
        <StyledWrapper>
            <IonPage >
                <IonContent>
                    <IonRow>
                        <IonCol className="col">
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
                            {
                                repairs && repairs.map((repair, index) => {
                                    return (
                                        <CardStatus key={index} repair={repair} />
                                    )
                                })
                            }
                        </IonCol>
                    </IonRow>

                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default Home
