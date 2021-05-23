import { IonActionSheet, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import { share, trash } from 'ionicons/icons';
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    .icon{
        margin: 0 32px 0 0;
        font-size: 32px;
    }
    .card{
        cursor: pointer;
    }
`
const CardSuplies = (props) => {
    const { value } = props
    const [showActionSheet, setShowActionSheet] = useState(false);

    return (
        <StyledWrapper>
            <IonItem onClick={() => setShowActionSheet(true)} className="card">
                <IonThumbnail slot="end">
                    <img src={value.image} />
                </IonThumbnail>
                <IonLabel>
                    <h2>พัสดุ: {value.name}</h2>
                    <h3>ประเภท: {value.type}</h3>
                    <p>จำนวนทั้งหมด: {value.number}</p>
                </IonLabel>
            </IonItem>

            <IonActionSheet
                isOpen={showActionSheet}
                onDidDismiss={() => setShowActionSheet(false)}
                cssClass='my-custom-class'
                buttons={[{
                    text: 'ลบ',
                    role: 'destructive',
                    icon: trash,
                    handler: () => {
                        value.number--;
                    }
                }, {
                    text: 'เพิ่มจำนวน',
                    icon: share,
                    handler: () => {
                        value.number++;
                    }
                }, {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]}
            >
            </IonActionSheet>
        </StyledWrapper>
    )
}

export default CardSuplies
