import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react'
import styled from 'styled-components';
import bg from '../img/background.jpg';
import { IonMenu, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import Topbar from '../components/Topbar';
import avatar from '../img/avatar.png';
import { AppContext } from '../contexts/AppProvider';
import { phonePortraitSharp } from 'ionicons/icons';
const StyledWrapper = styled.div`
    height: 30vh;
    width: 100vw;
    background-size: cover;
    .title-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .status{
        opacity: 0.6;
   }
   .card{
    background-color: #E5C1CD;
    margin-left: 7px;
    margin-right: 19px;
    border-radius: 29px;
   }
   .depart{
    font-size: 16px;
    color: black;
    padding-top: 16px;
    padding-bottom: 10px;
   }
   h2{
    color: black;
    font-size: 18px;
   }
   .name{
    place-self: center;
    padding-left: 20px;
    padding-top: 20px;
    }
    .box{
        display:flex;
    }
    small{
        color: #fafafacc;
    }
`

const CardStatus = props => {
    const { repair } = props
    console.log(repair);
    // const Detail = repair ? repair.repair.detail : '';
    const repairDate = repair ? repair.repair_notification_date : null;
    const repairDetail = repair ? repair.detail : null;
    const repairDepartment = repair ? repair.department.name : null;
    const repairName = repair ? repair.repairer : null;



    const repairDateStr = repairDate ? new Date().toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : ''
    console.log(repairDate);

    return (
        <StyledWrapper>
            <div>
                <IonCard className="card">
                    <IonCardContent >
                        <div className="title-card">
                            <h2>{repairDetail}</h2>
                            <h2 color="light" className="status">รอดำเนินการ</h2>
                        </div>
                        <div >
                            <p className="depart">แผนก:{repairDepartment}</p>
                            <div className="box">
                                <div>
                                    <p className="noti">แจ้งโดย</p>
                                    <IonAvatar>
                                        <img src={avatar} />
                                    </IonAvatar>
                                </div>
                                <div className="name">
                                    <p>{repairName}</p>
                                    <small>{repairDateStr}</small>
                                </div>
                            </div>
                        </div>
                    </IonCardContent>
                </IonCard>
            </div>
        </StyledWrapper>

    )
}

export default CardStatus
