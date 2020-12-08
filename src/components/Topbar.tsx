import React, { useState } from 'react'
import Styled from 'styled-components'
import { Drawer, Button } from 'antd'
import { IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react';
import { reorderThreeOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const StyledWrapper = Styled.div`
        border-bottom: solid;
          display: flex;
          align-items: center;
          justify-content: center;
  
    .menu{
      text-align-last: end;
      align-self: center;
    }
    .title{
      text-align: end;
      margin-right: -89px;
    }

    ion-icon {
  font-size: 60px;
  margin-top: 5px;
}
.drawer-body {

    padding: 0px 0px 0px 23px;

}
}
`

const Topbar = (props: { title: React.ReactNode }) => {


  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  return (
    <StyledWrapper>
      <IonGrid>
        <IonRow>

          <IonCol className="title"> <h1>{props.title}</h1></IonCol>
          <IonCol className="menu">
            <IonIcon icon={reorderThreeOutline} onClick={showDrawer}></IonIcon>
          </IonCol>

        </IonRow>
      </IonGrid>
      <Drawer
        className="drawer-body"
        title="เมนู"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <IonGrid>
          <IonRow>
            <Link to="/home">หน้าแรก</Link>
          </IonRow>
          <IonRow>
            <Link to="">เพิ่มผู้ใช้</Link>
          </IonRow>
          <IonRow>
            <Link to="/user/id">ข้อมูลผู้ใช้</Link>
          </IonRow>
          <IonRow>
            <Link to="">จัดการผู้ใช้</Link>
          </IonRow>
          <IonRow>
            <Link to="">แก้ไข้ข้อมูลผู้ใช้</Link>
          </IonRow>
          <IonRow>
            <Link to="">แก้ไขโปรไฟล์</Link>
          </IonRow>
          <IonRow>
            <Link to="">หัวข้อประเมิน</Link>
          </IonRow>
        </IonGrid>
      </Drawer>
    </StyledWrapper>
  )
}

export default Topbar
