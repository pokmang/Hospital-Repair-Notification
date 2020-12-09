import React, { useContext, useState } from 'react'
import Styled from 'styled-components'
import { Drawer, Button } from 'antd'
import { IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react';
import { reorderThreeOutline ,time } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/AppProvider';

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
`

const Topbar = (props: { title: React.ReactNode }) => {
  const { authController } = useContext(AppContext);
  const history = useHistory();
  const [visible, setVisible] = useState(false);


  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleLogout = async () => {
    try {
        await authController.logout();
        history.replace('/login')
    } catch (e) {
        console.error(e);
    }
}
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
            <Link to="/users">รายชื่อผู้ใช้</Link>
          </IonRow>
          <IonRow>
            <Link to="/register">เพิ่มผู้ใช้</Link>
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
          
          <IonRow>
            <Link to="/request-repairing">แจ้งซ่อม</Link>
          </IonRow>
          <IonRow>
            <Link to="/repairlist">รายการแจ้งซ่อม</Link>
          </IonRow>
          <IonRow>
            <Link to="/evaluate">ประเมินแจ้งซ่อม</Link>
          </IonRow>



          <IonRow>
            <Button  key="logout" onClick={handleLogout}>Logout</Button>
          </IonRow>

        </IonGrid>
      </Drawer>
    </StyledWrapper>
  )
}

export default Topbar
