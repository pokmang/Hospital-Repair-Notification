import { IonPage, IonHeader, IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonAlert } from '@ionic/react';
import { Button, Form, Input, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { AppContext } from '../contexts/AppProvider';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`

    .title{
        padding-left: 25px;
    }
    .button2{
        margin-top: 33px;
    }
    .ant-form-item-label > label::after{
        content: '';
    }
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
        content: '';
    }
`
const ToppicEvaluate = () => {
    const history = useHistory();
    const { topicsController } = useContext(AppContext);
    const { topicObj, deleteTopic, updateTopic } = topicsController;
    const topics = topicObj ? topicObj["R3HTlxTB9CYxSeYnpmMK"].item : null;
    const [showAlert1, setShowAlert1] = useState(false);

    const deleteItem = (data) => {
        deleteTopic(data)
    }

    const onFinish = (values) => {
        const newTopic = values["addTopic"].map(v => v.item)
        const topic = [...topics, ...newTopic]
        updateTopic({ item: topic })
        // history.push('/toppicEvaluate');
    };

    return (
        <StyledWrapper>
            <IonPage>
                <IonHeader>
                    <Topbar title={'หัวข้อประเมิน'} />
                </IonHeader>
                <IonContent>
                    <h1 className="title">หัวข้อประเมิน</h1>
                    <IonList style={{ padding: "10px" }}>
                        {
                            topics && topics.map((topic, index) => {
                                return (
                                    <Form.Item key={index} label={<h5>{index + 1}. </h5>} >
                                        <div style={{ display: 'flex', marginBottom: 8, alignItems: "baseline" }}>
                                            <h5>{topic}</h5>
                                            <MinusCircleOutlined onClick={() => setShowAlert1(true)} style={{ margin: "0 8px" }} />
                                        </div>
                                        <IonAlert
                                            isOpen={showAlert1}
                                            onDidDismiss={() => setShowAlert1(false)}
                                            cssClass='my-custom-class'
                                            header={'ลบ!'}
                                            message={'กด "ยืนยัน" เพื่อลบหัวข้อนี้.'}
                                            buttons={[
                                                {
                                                    text: 'ยกเลิก',
                                                    role: 'ยกเลิก',
                                                    cssClass: 'secondary',
                                                },
                                                {
                                                    text: 'ยืนยัน',
                                                    handler: () => { deleteItem(topic) }
                                                }
                                            ]}
                                        />
                                    </Form.Item>
                                )
                            })
                        }
                        {
                            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" >
                                <Form.List name="addTopic">
                                    {(fields, { add, remove }) => (
                                        <>
                                            {fields.map((field, index) => (
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'item']}
                                                    fieldKey={[field.fieldKey, 'item']}
                                                    rules={[{ required: true, message: 'ไม่พบข้อมูล! โปรดใส่ข้อมูล' }]}
                                                    key={index}
                                                    label={<h5>{topics && topics.length + index + 1}. </h5>}
                                                >
                                                    <div style={{ display: 'flex', marginBottom: 8, alignItems: "baseline" }}>
                                                        <Input />
                                                        <MinusCircleOutlined onClick={() => remove(field.name)} style={{ margin: "0 8px" }} />
                                                    </div>

                                                </Form.Item>
                                            ))}
                                            <Form.Item>
                                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                    Add field
                                            </Button>
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block style={{ borderRadius: "10px" }}>
                                        ยืนยัน
                                    </Button>
                                </Form.Item>
                            </Form>
                        }
                    </IonList>
                </IonContent>
            </IonPage>
        </StyledWrapper >
    );
};
export default ToppicEvaluate
