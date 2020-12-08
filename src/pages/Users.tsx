import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonSearchbar } from '@ionic/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import { AppContext } from "../contexts/AppProvider";

const StyledWrapper = styled.div`

`
const Users = () => {
    const [searchUser, setSearchUser] = useState('');
    const { userController } = useContext(AppContext)
    const { users } = userController

    return (
        <IonPage>
            <Topbar title={'รายชื่อผู้ใช้'}/>
            <IonSearchbar value={searchUser} onIonChange={e => setSearchUser(e.detail.value!)}></IonSearchbar>
            <IonContent>
                <StyledWrapper>
                    {users &&
                        users.map((user, index) => {
                            return (
                                <IonCard key={index}>
                                    <Link to={`/users/${user.id}`}>
                                        <IonCardHeader>
                                            <IonCardTitle>{user.name}</IonCardTitle>
                                            <IonCardSubtitle>{user.department.name}</IonCardSubtitle>
                                        </IonCardHeader>
                                    </Link>
                                </IonCard>
                            )
                        })}
                </StyledWrapper>
            </IonContent>
        </IonPage>

    )
}

export default Users
