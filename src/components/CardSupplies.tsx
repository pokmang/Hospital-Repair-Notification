import { IonActionSheet, IonAlert, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
import { share, trash, checkbox } from 'ionicons/icons';
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
    const { value, onUpdate, onDeleted } = props
    const [showActionSheet, setShowActionSheet] = useState(false);
    const [usedFail, setusedFail] = useState(false);
    const [Deleted, setDeleted] = useState(false);

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
                    {
                        text: 'ใช้พัสดุ',
                        role: 'destructive',
                        icon: checkbox,
                        handler: () => {
                            if (value.number == 0)
                                setusedFail(true)
                            else {
                                value.number--;
                                onUpdate(value.id, value.number)
                            }
                        }
                    }, {
                        text: 'เพิ่มจำนวนพัสดุ',
                        icon: share,
                        handler: () => {
                            value.number++;
                            onUpdate(value.id, value.number);
                        }
                    }, {
                        text: 'ลบพัสดุ',
                        icon: trash,
                        handler: () => {
                            setDeleted(true);
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
                isOpen={usedFail}
                onDidDismiss={() => setusedFail(false)}
                cssClass='my-custom-class'
                header={'ไม่มีพัสดุในคลัง!'}
                message={'ไม่สามารถใช้ได้ เนื่องจากไม่มีพัสดุในคลัง'}
                buttons={['ตกลง']}
            />
            <IonAlert
                isOpen={Deleted}
                onDidDismiss={() => setDeleted(false)}
                cssClass='my-custom-class'
                header={'Confirm!'}
                message={'Message <strong>text</strong>!!!'}
                buttons={[
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary',
                    },
                    {
                        text: 'ตกลง',
                        handler: () => {
                            onDeleted(value.id)
                            window.location.reload(false);
                        }
                    }
                ]}
            />
        </StyledWrapper >
    )
}

export default CardSupplies
