import { IonGrid, IonRow, IonCol, IonIcon, IonButton, IonCard, IonCardContent, IonImg, DefaultIonLifeCycleContext } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { Doughnut } from 'react-chartjs-2';
import image from '../img/avatar.png';
import RadialProgress from '../components/RadialProgress';
const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    .dashbord{
        display:flex;
        background-color: #7fabe4;
        padding: 13px;
    }

    .gg{
        align-self: center;
        padding-right: 60px;
        padding-left: 20px;
    }
    .icon{
        text-align-last: end;
        padding-right: 10px;
    
    }
    .contianer{
        align-items: center;
    padding-top: 14px;
    }
    #image{
        border-radius: 66%;
    width: 67%;
    height: 100%;
    margin-left: 15px;
    }
    ion-icon {
  font-size: 30px;
  image{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: inherit;
    object-position: inherit;
    border-radius: 100%;
}
}
`

const DataUser = () => {

    return (
        <StyledWrapper>
            <Topbar title={'ข้อมูลผู้ใช้งาน'} />
                <IonRow className="contianer">
                   <IonCol>  
                       <img  src={image} /></IonCol>
                   <IonCol>
                       <IonRow>ผู้ดูแลระบบ</IonRow>
                       <IonRow>สมชายทันเพื่อน</IonRow>
                   </IonCol>
                   <IonCol className="icon"><IonIcon icon={settings}  ></IonIcon></IonCol>
                </IonRow>
            <IonGrid>
                <h1>ภาพรวม</h1>
                <IonRow>
                    <IonCard  >
                        <IonCardContent className="dashbord" >
                        <RadialProgress percent={80} />
                           <div className="gg">
                           <h3>ความพึงพอใจ</h3>
                            <h3>20 งาน</h3>
                           </div>
                           
                        </IonCardContent>
                    </IonCard>
                </IonRow>
                <IonRow>

                </IonRow>
                <IonRow>

                </IonRow>
            </IonGrid>
        </StyledWrapper>
    )
}

export default DataUser
