import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Drawer } from 'antd'
import { IonAvatar, IonButton, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow } from '@ionic/react';
import { homeOutline, list, newspaper, newspaperOutline, personAddOutline, personOutline, reorderThreeOutline, settings } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/AppProvider';


const StyledWrapper = styled.div`
  background-color: #86E3CE;
  .home{
    font-size: 30px;
  } 
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
  .drawer{
    color: #1890ff;
  }
  .name{
    color: #f5f0f0;
  }
  .item{
    
  }
  .menutop{
    --color: #09f709;
  }
  #card{
    --background: #3395f0;
  }
  .text{
    color:#5af700 !important;
  }
  .drw{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 80px);
  }
  .gg{
    background-color: #18e4cf;
  }
  h1{
    font-size: 25px;
    padding-left: 15px;
  }
  .tt{
    display: flex;
    width: 100vw;
    justify-content: space-between;
    height: 69px;
    
  }

`

const Topbar = (props: { title: React.ReactNode }) => {
  const { authController } = useContext(AppContext);
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const { user } = authController
  const imguser = user ? user.avatar : '';
  const name = user ? user.name : '';
  const position = user ? user.position.name : '';
  const uid = user ? user.uid : '0;'

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
      <div className="tt">
        <h1 >{props.title}</h1>
          <IonIcon icon={reorderThreeOutline} onClick={showDrawer} />
      </div>
            
  

      {/* side */}
      <Drawer
        bodyStyle={{ backgroundColor: "#3395f0", padding: "0", }}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <div className="drw" style={{ "height": "100vh", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
          <div>
            <IonItem style={{ "--background": "#13e070", "height": "10vh", }}>
              <IonAvatar slot="start">
                <img alt="user" src={imguser} />
              </IonAvatar>
              <IonLabel>
                <h3 style={{ color: "#000000" }}>{name}</h3>
                <p style={{ color: "#020202" }}>{position}</p>
              </IonLabel>
              <Link to={`/users/${uid}/edit-profile`}>
                <IonIcon icon={settings} />
              </Link>
            </IonItem>
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={homeOutline} />
              <IonLabel>
                <Link to={`/home/${uid}`} style={{ color: "#fafafa", "paddingLeft": "10px" }}> หน้าแรก</Link>
              </IonLabel>
            </IonItem>
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={personOutline} />
              <IonLabel>
                <Link to="/users" style={{ color: "#fafafa", "paddingLeft": "10px" }}>รายชื่อผู้ใช้</Link>
              </IonLabel>
            </IonItem>
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={personAddOutline} />
              <IonLabel>
                <Link to="/register" style={{ color: "#fafafa", "paddingLeft": "10px" }}>เพิ่มผู้ใช้</Link>
              </IonLabel>
            </IonItem>
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={newspaper} />
              <IonLabel>
                <Link to={`/users/${uid}/request-repairing`} style={{ color: "#fafafa", "paddingLeft": "10px" }}>แจ้งซ่อม</Link>
              </IonLabel>
            </IonItem>
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={list} />
              <IonLabel>
                <Link to="/repairlist" style={{ color: "#fafafa", "paddingLeft": "10px" }}>รายการแจ้งซ่อม</Link>
              </IonLabel>
            </IonItem>        
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={newspaperOutline} />
              <IonLabel>
                <Link to="/toppicevaluate" style={{ color: "#fafafa", "paddingLeft": "10px" }}>หัวข้อประเมิน</Link>
              </IonLabel>
            </IonItem>
            <IonItem style={{ "--background": "#3395f0", "marginBottom": "10px" }}>
              <IonIcon icon={newspaper} />
              <IonLabel>
                <Link to="/evaluate" style={{ color: "#fafafa", "paddingLeft": "10px" }} >ประเมินแจ้งซ่อม</Link>
              </IonLabel>
            </IonItem>

          </div>
          <div>
            <IonButton expand="block" className="button" onClick={handleLogout} style={{ "--background": "#14ecec" }}>ออกจากระบบ</IonButton>
          </div>
        </div>
      </Drawer>
    </StyledWrapper >
  )
}

export default Topbar
