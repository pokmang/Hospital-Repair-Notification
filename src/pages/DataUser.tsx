import { IonGrid, IonRow, IonCol, IonIcon, IonCard, IonCardContent, IonImg, IonContent, IonPage, IonItem } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React, { useContext } from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import RadialProgress from '../components/RadialProgress';
import { useParams } from 'react-router';
import { AppContext } from '../contexts/AppProvider';
import { Link } from 'react-router-dom';
import CardStatus from '../components/CardStatus';

const StyledWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    .dashbord{
        display:flex;
        background-color: #00CBFF;
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
    .position{
        opacity: 0.5;
    }
    .name{
        font-size: 13px;
    }
    #image{
        
        width: 67%;
        height: 100%;
        margin-left: 15px;
    }
  

   .status{
    display: flex;
    margin-left: 8px;
    margin-right: 8px;
   }
   h1{
    font-size: 25px;
    padding-left: 15px;
  }






  /* ion-img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: inherit;
    object-position: inherit;
    border-radius: 100%;
} */

`

const DataUser = () => {
    const { userController } = useContext(AppContext)
    const { userObj } = userController
    const params = useParams<{ id: string }>();
    const user = userObj ? userObj[params.id] : null;
    const name = user ? user.name : null;
    const avatar = user ? user.avatar : null;
    const Position = user ? user.position.name : null;

    const { repairsController } = useContext(AppContext)
    const { repairs } = repairsController

    return (
        <StyledWrapper>
            <IonPage>
                <IonContent>
                    <IonRow>
                        <Topbar title={'ข้อมูลผู้ใช้งาน'} />
                    </IonRow>
                    <IonRow className="contianer">
                        <IonCol>
                            <IonImg src={avatar} id="image" />
                        </IonCol>
                        <IonCol>
                            <IonRow className="position">{Position}</IonRow>
                            <IonRow className="name">{name}</IonRow>
                        </IonCol>
                        <IonCol className="icon">
                            <Link to={`/users/${params.id}/edit-profile`}>
                                <IonIcon icon={settings} />
                            </Link>
                        </IonCol>
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
                            <h1>งานที่ดำเนินการ</h1>
                        </IonRow>
                        {
                            repairs && repairs.filter(repair => repair.informer === name)
                                .sort((a, b) => b.noti_date.valueOf() - a.noti_date.valueOf())
                                .map((repair, index) => {
                                    return (
                                        <Link key={index} to={`/users/${user.id}/repairlist/${repair.id}`}>
                                            <IonItem>
                                                <CardStatus repair={repair} />
                                            </IonItem>
                                        </Link>
                                    )
                                })
                        }
                    </IonGrid>
                </IonContent>
            </IonPage>
        </StyledWrapper >
    )
}

export default DataUser
