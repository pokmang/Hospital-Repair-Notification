import { IonAvatar, IonContent, IonItem, IonLabel, IonPage, IonSearchbar } from '@ionic/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import { AppContext } from "../contexts/AppProvider";

const StyledWrapper = styled.div`

   
    /* .testCss{
        --background:red;
    }
    .testColor{
        color:blue !important;
    } */
`
const Users = () => {
    const [searchUser, setSearchUser] = useState('');
    const { userController } = useContext(AppContext)
    const { users } = userController

    return (
        <IonPage >
            <Topbar title={'รายชื่อผู้ใช้'} />
            <IonSearchbar value={searchUser} onIonChange={e => setSearchUser(e.detail.value!)}></IonSearchbar>
            <IonContent >
                <StyledWrapper >
                    {users &&
                        users.map((user, index) => {
                            return (
                                <Link key={index} to={`/users/${user.id}`}>
                                    <IonItem className="testCss">
                                        <IonAvatar slot="start">
                                            <img src={user.avatar}></img>
                                        </IonAvatar >
                                        <IonLabel >
                                            <h3 className="testColor">{user.name}</h3>
                                            <p>{user.department.name}</p>
                                        </IonLabel>
                                    </IonItem>
                                </Link>
                            )
                        })}
                </StyledWrapper>
            </IonContent>
        </IonPage >
    )
}

export default Users
