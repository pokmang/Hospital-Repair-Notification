import React from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { Checkbox, Row, Col, Button } from 'antd';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { Radio, Input } from 'antd';
import { useState } from 'react';

const StyledWrapper = styled.div`
    .list{
        display: flex;
        flex-direction: column;
    }
    h3{
        padding-top: 10px;
        padding-left: 10px;
    }
    .chlist{
        margin-left: 8px;
        display: flex;
        flex-direction: column;
    }
    .bnt{
        margin-top: 10px;
    }
    .rdgp{
        padding-left: 20px;
    }
`
const Evaluate = () => {
    const [one, setOne] = useState();
    const [two, setTwo] = useState();
    const [three, setThree] = useState();
    const [four, setFour] = useState();
    const [five, setFive] = useState('');
    console.log(one, two, three, four, five);


    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    return (
        <StyledWrapper>
            <IonPage>
                <IonContent>
                    <Topbar title={"ประเมินการซ่อม"} />
                    <Row>
                        <Col className="list">
                            <h3>1.ความรวดเร็วในการดำเนินการ</h3>
                            <div className="rdgp">
                                <Radio.Group onChange={e => setOne(e.target.value)}>
                                    <Radio style={radioStyle} value={5}>
                                        พึงพอใจมาก
                                    </Radio>
                                    <Radio style={radioStyle} value={4}>
                                        พึงพอใจ
                                    </Radio>
                                    <Radio style={radioStyle} value={3}>
                                        ปานกลาง
                                    </Radio>
                                    <Radio style={radioStyle} value={2}>
                                        แย่
                                    </Radio>
                                    <Radio style={radioStyle} value={1}>
                                        แย่มาก
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </Col >
                        <Col className="list">
                            <h3>2.ความชำนาญในการซ่อม</h3>
                            <div className="rdgp">
                                <Radio.Group onChange={e => setTwo(e.target.value)}>
                                    <Radio style={radioStyle} value={5}>
                                        พึงพอใจมาก
                                    </Radio>
                                    <Radio style={radioStyle} value={4}>
                                        พึงพอใจ
                                    </Radio>
                                    <Radio style={radioStyle} value={3}>
                                        ปานกลาง
                                    </Radio>
                                    <Radio style={radioStyle} value={2}>
                                        แย่
                                    </Radio>
                                    <Radio style={radioStyle} value={1}>
                                        แย่มาก
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </Col >
                        <Col className="list">
                            <h3>3.ความเรียบร้อยในการซ่อม</h3>
                            <div className="rdgp">
                                <Radio.Group onChange={e => setThree(e.target.value)}>
                                    <Radio style={radioStyle} value={5}>
                                        พึงพอใจมาก
                                    </Radio>
                                    <Radio style={radioStyle} value={4}>
                                        พึงพอใจ
                                    </Radio>
                                    <Radio style={radioStyle} value={3}>
                                        ปานกลาง
                                    </Radio>
                                    <Radio style={radioStyle} value={2}>
                                        แย่
                                    </Radio>
                                    <Radio style={radioStyle} value={1}>
                                        แย่มาก
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </Col >
                        <Col className="list">
                            <h3>4.ความสะดวกในการแจ้งซ่อม</h3>
                            <div className="rdgp">
                                <Radio.Group onChange={e => setFour(e.target.value)}>
                                    <Radio style={radioStyle} value={5}>
                                        พึงพอใจมาก
                                    </Radio>
                                    <Radio style={radioStyle} value={4}>
                                        พึงพอใจ
                                    </Radio>
                                    <Radio style={radioStyle} value={3}>
                                        ปานกลาง
                                    </Radio>
                                    <Radio style={radioStyle} value={2}>
                                        แย่
                                    </Radio>
                                    <Radio style={radioStyle} value={1}>
                                        แย่มาก
                                    </Radio>
                                </Radio.Group>
                            </div>
                        </Col >
                    </Row>
                    <IonButton color="primary" expand="block" className="bnt">ส่งการประเมิน</IonButton>
                </IonContent>
            </IonPage>
        </StyledWrapper>
    )
}

export default Evaluate
