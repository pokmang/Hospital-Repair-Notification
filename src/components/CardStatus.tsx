import { IonAvatar, IonCard, IonCardContent } from '@ionic/react';
import React from 'react'
import styled from 'styled-components';
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
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
   }
   .card.รอประเมิน {
    background: linear-gradient(to right, #1488cc, #2b32b2);
   }
   .card.รอการตอบรับ {
    background: linear-gradient(to right, #ede574, #e1f5c4);
   }
   .card.กำลังดำเนินการ {
    background: linear-gradient(to right, #2193b0, #6dd5ed);
   }
   .card.ยกเลิกแล้ว {
    background: linear-gradient(to right, #d31027, #ea384d);
   }
   .card.เรียบร้อย {
    background: linear-gradient(to right, #1dc58a, #93f9b9);
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
