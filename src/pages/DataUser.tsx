import { IonGrid, IonRow, IonCol, IonIcon, IonButton, IonCard, IonCardContent, IonImg } from '@ionic/react';
import { settings } from 'ionicons/icons';
import React, { useContext } from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import image from '../img/avatar.png';
import RadialProgress from '../components/RadialProgress';
import { useParams } from 'react-router';
import { AppContext } from '../contexts/AppProvider';
import { Link } from 'react-router-dom';

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
        font-size: 14px;
    }
    #image{
        border-radius: 66% !important;
        width: 67%;
        height: 100%;
        margin-left: 15px;
    }
    ion-icon {
        font-size: 30px;
    }
    h1{
        margin: 0px;
        padding-left: 15px;
        font-size: 20px;
    }
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
    console.log(user);

    return (
        <StyledWrapper>
            <Topbar title={'ข้อมูลผู้ใช้งาน'} />
            <IonRow className="contianer">
                <IonCol>
                    <IonImg src={image} id="image" /></IonCol>
                <IonCol>
                    <IonRow className="position">ผู้ดูแลระบบ</IonRow>
                    <IonRow className="name">สมชายทันเพื่อน</IonRow>
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
                <IonRow>
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
                                    <IonImg className="img" src={image} />
                                </IonCol>
                                <IonCol>
                                    <p>สมชาย  เชื่อมัน</p>
                                    <small>แจ้งโดย 10 นาทีที่แล้ว</small>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonRow>
            </IonGrid>
        </StyledWrapper >
    )
}

export default DataUser
