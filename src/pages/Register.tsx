import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { IonContent, IonHeader, IonPage, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonAlert, IonButton } from '@ionic/react';
import { AppContext } from '../contexts/AppProvider'
import Topbar from '../components/Topbar';
import { useHistory } from 'react-router';
import { Button } from 'antd';

const StyledWrapper = styled.div`
    .title{
        padding:0 13px;
        margin:13px 0 0 0 ;
        text-align: center;
    }
    .button2{
        margin-top:20px;

    }

    .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

`
const Register = () => {
    const history = useHistory();
    const { authController, userController } = useContext(AppContext);
    const { register } = authController;
    const { positions, departments } = userController;
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [Confirmpassword, setConfirmpassword] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [showAlert1, setShowAlert1] = useState(false);

    const handleRegister = () => {
        setShowAlert1(true)
    }
    const confirmRegister = () => {
        setShowAlert1(false)
        register(email, password, { name, phone, email, position, department });
        history.push("/users")
    }
    const registerCheck = () => {
        let emailCheck = email.split("").some(e => e === "@")
        if (name === '' || phone === '' || position === '' || department === '') {
            return (
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => {
                        setShowAlert1(false)
                    }}
                    cssClass='my-custom-class'
                    header={'ล้มเหลว!'}
                    message={'กรุณาใส่ข้อมูลให้ครบถ้วน.'}
                    buttons={['ตกลง']}
                />
            )
        }
        else if (email === '' || password === '' || password.length < 6 || Confirmpassword !== password || emailCheck === false) {
            return (
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => {
                        setShowAlert1(false)
                    }}
                    cssClass='my-custom-class'
                    header={'ล้มเหลว!'}
                    message={'email หรือ รหัสผ่านไม่ถูกต้อง.'}
                    buttons={['ตกลง']}
                />
            )
        }
        else {
            return (
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={'ลงทะเบียน?'}
                    message={`โปรดกด "ยืนยัน" เพื่อลงทะเบียน ${name}.`}
                    buttons={[
                        {
                            text: 'ยกเลิก',
                            role: 'ยกเลิก',
                            cssClass: 'secondary',
                        },
                        {
                            text: 'ยืนยัน',
                            handler: confirmRegister
                        }
                    ]}
                />
            )
        }
    }
    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'เพิ่มผู้ใช้'} />
                </IonHeader>
                <IonContent>
                    <h1 className="title">ข้อมูลผู้ใช้</h1>
                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">ชื่อ - สกุล <span style={{ color: "gray" }}>*ตัวอย่าง: "นายชื่อ นามสกุล"</span></IonLabel>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel>ตำแหน่ง</IonLabel>
                            <IonSelect value={position} okText="ยืนยัน" cancelText="ยกเลิก" onIonChange={e => setPosition(e.detail.value)}>
                                {positions.map((value, index) => (<IonSelectOption key={index} value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel>แผนก</IonLabel>
                            <IonSelect value={department} okText="ยืนยัน" cancelText="ยกเลิก" onIonChange={e => setDepartment(e.detail.value)}>
                                {departments.map((value, index) => (<IonSelectOption key={index} value={value}>{value.name}</IonSelectOption>))}
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">เบอร์โทรศัพท์ <span style={{ color: "gray" }}>*ตัวอย่าง: "0123456789"</span></IonLabel>
                            <IonInput maxlength={10} value={phone} onIonChange={e => setPhone(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">อีเมล์ <span style={{ color: "gray" }}>*ตัวอย่าง: "test@email.com"</span></IonLabel>
                            <IonInput type="email" pattern="email" value={email} onIonChange={e => setEmail(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">รหัสผ่าน <span style={{ color: "gray" }}>*จำนวน 6 ตัวอักษรขึ้นไป</span></IonLabel>
                            <IonInput type="password" minlength={6} value={password} onIonChange={e => setPassword(e.detail.value)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">ยืนยันรหัสผ่าน <span style={{ color: "gray" }}>*จำนวน 6 ตัวอักษรขึ้นไป</span></IonLabel>
                            <IonInput type="password" minlength={6} value={Confirmpassword} onIonChange={e => setConfirmpassword(e.detail.value)}></IonInput>
                        </IonItem>
                    </IonList>
                    <div className="button2">
                        <IonButton onClick={handleRegister} type="submit" expand="block" >เพิ่มผู้ใช้งาน</IonButton >
                    </div>
                    {registerCheck()}
                </IonContent>
            </IonPage>
        </StyledWrapper >
    );
};
export default Register;