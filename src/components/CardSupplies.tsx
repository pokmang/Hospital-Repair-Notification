import { IonActionSheet, IonAlert, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
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
const CardSupplies = (props) => {
    const { value, onUpdate } = props
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [deletedFail, setDeletedFail] = useState(false);

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
                buttons={[
                    value.number == 0 ? {
                        text: 'ใช้พัสดุ',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                            setDeletedFail(true);
                        }
                    } : {
                        text: 'ใช้พัสดุ',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                            value.number--;
                            onUpdate(value.id, value.number);
                        }
                    }, {
                        text: 'เพิ่มจำนวนพัสดุ',
                        icon: share,
                        handler: () => {
                            value.number++;
                            onUpdate(value.id, value.number);
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
            <IonAlert
                isOpen={deletedFail}
                onDidDismiss={() => setDeletedFail(false)}
                cssClass='my-custom-class'
                header={'ไม่มีพัสดุในคลัง!'}
                message={'ไม่สามารถใช้ได้ เนื่องจากไม่มีพัสดุในคลัง'}
                buttons={['OK']}
            />
        </StyledWrapper>
    )
}

export default CardSupplies
