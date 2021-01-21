import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { Row, Col } from 'antd';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import { Radio } from 'antd';
import { useState } from 'react';
import { AppContext } from '../contexts/AppProvider';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

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
    const params = useParams<{ id: string }>();
    const history = useHistory()
    const { evaluatesController, topicsController, repairsController } = useContext(AppContext);
    const { topics } = topicsController
    const { addEvaluate } = evaluatesController
    const { repairObj, updateRepair } = repairsController;
    const repair = repairObj ? repairObj[params.id] : null;

    const [evaluated, setEavaluated] = useState([]);
    const [keep, setKeep] = useState({
        topic: '',
        score: 0
    });

    const Confirm = () => {
        addEvaluate({
            repairId: params.id,
            evaluated
        })
        updateRepair(
            params.id,
            {
                status: "เรียบร้อย",
                evaluate_date: new Date,
            }
        )
        history.push(`/repairlist/${params.id}`)
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    useEffect(() => {
        if (keep.topic !== '' && keep.score !== 0) {
            if (!evaluated.find(e => e.topic === keep.topic)) {
                setEavaluated([keep, ...evaluated])
            }
            if (evaluated.find(e => e.topic === keep.topic)) {
                evaluated[evaluated.findIndex(e => e.topic === keep.topic)].score = keep.score
            }
        }
    }, [keep])

    return (
        <StyledWrapper>
            <IonPage>
                <IonContent>
                    <Topbar title={"ประเมินการซ่อม"} />
                    <Row>
                        {
                            topics && topics.item.map((topic, index) => {

                                return (
                                    <Col className="list" key={index}>
                                        <h3>{index + 1}.{topic}</h3>
                                        <div className="rdgp">
                                            <Radio.Group onChange={e =>
                                                setKeep({
                                                    topic,
                                                    score: e.target.value
                                                })}>
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
                                )
                            })
                        }
                    </Row>
                    <IonButton color="primary" expand="block" className="bnt" onClick={Confirm}>ส่งการประเมิน</IonButton>
                </IonContent>
            </IonPage>
        </StyledWrapper >
    )
}

export default Evaluate
