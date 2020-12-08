import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonSearchbar } from '@ionic/react'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from "../contexts/AppProvider";

const StyledWrapper = styled.div`

`
const Users = () => {
    const [searchUser, setSearchUser] = useState('');
    const { userController } = useContext(AppContext)
    const { users } = userController

    console.log(users);

    return (
        <IonPage>
            <IonSearchbar value={searchUser} onIonChange={e => setSearchUser(e.detail.value!)}></IonSearchbar>
            <IonContent>
                <StyledWrapper>
                    {!users ? 'No user' :
                        users.map(user => {
                            return (
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{user.name}</IonCardTitle>
                                        <IonCardSubtitle>{user.department}</IonCardSubtitle>
                                    </IonCardHeader>
                                </IonCard>
                            )
                        })}
                </StyledWrapper>
            </IonContent>
        </IonPage>

    )
}

export default Users
