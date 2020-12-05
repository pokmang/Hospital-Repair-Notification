import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

const Topbar: React.FC<any> = () => {
    return (
        <>
            <h1>bbbbbbbbbbbbbbbbbb</h1>
            <IonMenu side="start" menuId="first" disabled={false}>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Start Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>

            <IonMenu side="start" menuId="custom" className="my-custom-menu">
                <IonHeader>
                    <IonToolbar color="tertiary">
                        <IonTitle>Custom Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>

            <IonMenu side="end" type="push">
                <IonHeader>
                    <IonToolbar color="danger">
                        <IonTitle>End Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Itesm</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonRouterOutlet></IonRouterOutlet>
        </>
    );
}

export default Topbar;