import { IonAvatar, IonCard, IonCardContent } from '@ionic/react';
import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.png';
const StyledWrapper = styled.div`
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
    
    margin-left: 19px;
    margin-right: 19px;
    border-radius: 29px;
   }

   .card.รอประเมิน {
    background:linear-gradient(135deg, #13f1fc 0%,#0470dc 100%);
    
   }

   .card.รอการตอบรับ {
    background:linear-gradient(135deg, #19ff33 0%,#47a9e4 100%);
   }
   .card.กำลังดำเนินการ {
    background:linear-gradient(135deg, #f3aed8 0%,#47a9e4 50%);
   }
   .card.ยกเลิกแล้ว {
    background:linear-gradient(135deg, #eeb4ae 0%,#f63d3d 100%);
   }
   .card.เสร็จสิ้น {
    background:linear-gradient(135deg, #13f1fc 0%,#078ce3 100%);
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
    // const Detail = repair ? repair.repair.detail : '';
    const repairDate = repair ? repair.noti_date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }) : null;
    const repairDevice = repair ? repair.device : null;
    const repairDepartment = repair ? repair.department.name : null;
    const repairName = repair ? repair.informer : null;
    const repairStatus = repair ? repair.status : null;
    const userAvatar = repair ? repair.avatar : null;

    return (
        <StyledWrapper>
            <IonCard className={`card ${repairStatus}`}>
                <IonCardContent >
                    <div className="title-card">
                        <h2>อุปกรณ์:{repairDevice}</h2>
                        <h2 color="light" className="status">{repairStatus}</h2>
                    </div>
                    <div >
                        <p className="depart">แผนก:{repairDepartment}</p>
                        <div className="box">
                            <div>
                                <p className="noti">แจ้งโดย</p>
                                <IonAvatar>
                                    <img src={userAvatar} />
                                </IonAvatar>
                            </div>
                            <div className="name">
                                <p>{repairName}</p>
                                <small>{repairDate}</small>
                            </div>
                        </div>
                    </div>
                </IonCardContent>
            </IonCard>
        </StyledWrapper>

    )
}

export default CardStatus
