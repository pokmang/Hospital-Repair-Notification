import { IonButton, IonCol, IonContent, IonGrid, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import CardSuplies from '../components/CardSuplies'
import Topbar from '../components/Topbar'
import { Input, InputNumber, Modal, Select } from 'antd';
const StyledWrapper = styled.div`
    .search{
        padding: 15px 12px;
    }
    .btnAdd{
        width: 100%;
        font-weight: bold;
    }
    .addSub{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const suplies = [
    {
        image: "https://static.turbosquid.com/Preview/001276/701/FV/_600.jpg",
        name: "Asus โน็ตบุค",
        type: "เครื่องคอมพิวเตอร์",
        number: 5
    },
    {
        image: "https://img1.cgtrader.com/items/2631729/ef5e12127e/cartoon-wifi-router-v3-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg",
        name: "Acer เคส",
        type: "เราเตอร์",
        number: 5
    },
    {
        image: "https://img2.thaipng.com/20180212/pww/kisspng-computer-keyboard-computer-mouse-clip-art-gray-keyboard-5a81c6b6066b81.9436095515184544540263.jpg",
        name: "Asus แป้นพิมพ์",
        type: "แป้นพิมพ์",
        number: 5
    },
    {
        image: "https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-computer-monitor-icon-in-cartoon-style-png-image_1802084.jpg",
        name: "Acer จอมอนิเตอร์",
        type: "จอมอนิเตอร์",
        number: 5
    },
    {
        image: "https://cdn2.iconfinder.com/data/icons/technology-and-devices-cartoon/512/sim4348-512.png",
        name: "Acer จอมอนิเตอร์",
        type: "ซีพียู",
        number: 5
    },
    {
        image: "https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-wireless-computer-mouse-cartoon-image_1214685.jpg",
        name: "Acer จอมอนิเตอร์",
        type: "เมาส์",
        number: 5
    },
    {
        image: "https://image.freepik.com/free-vector/cartoon-printer_60352-2784.jpg",
        name: "Acer จอมอนิเตอร์",
        type: "เครื่องปริ้นเตอร์",
        number: 5
    },
    {
        image: "https://s.clipartkey.com/mpngs/s/134-1340167_printer-ink-cartridge-png.png",
        name: "Acer จอมอนิเตอร์",
        type: "หมึก",
        number: 5
    }
]

const Supplies = () => {
    const { Option } = Select;
    const [search, setSearch] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [number, setNumber] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const btnCreateSupply = () => {
        setIsModalVisible(true);
    }

    const TypeList = () => {
        const list = suplies.reduce((prev, cur) => { // prev = {}
            const Type = cur.type // Type = เครื่องคอมพิวเตอร์
            if (cur.type.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                if (!prev[Type]) { // !prev["เครื่องคอมพิวเตอร์"]
                    prev[Type] = [] // prev["เครื่องคอมพิวเตอร์"] = []
                }
                prev[Type].push(cur); // prev["เครื่องคอมพิวเตอร์"].push(cur)
            }
            return prev;
        }, {})
        return Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
        // ตัวอย่าง {"A":{1,2}, "B":[3,4]} เป็น [["A",{1,2}],["B",[3,4]]]
    }

    let dataList = [];
    dataList = TypeList();

    const handleOk = () => {
        setIsModalVisible(false);
        switch (type) {
            case "ซีพียู":
                setImage("https://cdn2.iconfinder.com/data/icons/technology-and-devices-cartoon/512/sim4348-512.png")
                break;
            case "จอมอนิเตอร์":
                setImage("https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-computer-monitor-icon-in-cartoon-style-png-image_1802084.jpg")
                break;
            case "แป้นพิมพ์":
                setImage("https://img2.thaipng.com/20180212/pww/kisspng-computer-keyboard-computer-mouse-clip-art-gray-keyboard-5a81c6b6066b81.9436095515184544540263.jpg")
                break;
            case "เมาส์":
                setImage("https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-wireless-computer-mouse-cartoon-image_1214685.jpg")
                break;
            case "เราเตอร์":
                setImage("https://img1.cgtrader.com/items/2631729/ef5e12127e/cartoon-wifi-router-v3-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg")
                break;
            case "เครื่องปริ้นเตอร์":
                setImage("https://image.freepik.com/free-vector/cartoon-printer_60352-2784.jpg")
                break;
            case "หมึก":
                setImage("https://s.clipartkey.com/mpngs/s/134-1340167_printer-ink-cartridge-png.png")
                break;
            default:
                setImage("https://static.turbosquid.com/Preview/001276/701/FV/_600.jpg")
                break;
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangeNumber = value => {
        setNumber(value);
    }
    return (
        <StyledWrapper>
            <IonPage>
                <Topbar title={'รายการพัสดุ'} />
                <IonToolbar className="toolbar">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="8">
                                <IonSearchbar
                                    className="search"
                                    placeholder='ค้นหาประเภทพัสดุ'
                                    value={search}
                                    onIonChange={e => setSearch(e.detail.value)}
                                />
                            </IonCol>
                            <IonCol size="4" className="addSub">
                                <IonButton className="btnAdd" expand="block" color="warning" onClick={btnCreateSupply}>เพิ่มพัสดุใหม่</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
                <IonContent>
                    <IonList>
                        <IonItemGroup >
                            {
                                dataList.filter((value) => value[1].length > 0)
                                    .map((value, index) => {
                                        return (
                                            <div key={index}>
                                                <IonItemDivider >
                                                    <IonLabel>{value[0]}</IonLabel>
                                                </IonItemDivider>
                                                {
                                                    value[1].filter(value => value.type.toLowerCase().indexOf(search.toLowerCase()) >= 0)
                                                        .map((value, index) => (
                                                            <CardSuplies key={index} value={value} />
                                                        ))
                                                }
                                            </div>
                                        )
                                    })
                            }
                        </IonItemGroup>
                    </IonList>
                </IonContent>
                <Modal title="เพิ่มพัสดุใหม่" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p style={{ margin: "6px 0 0 0" }}>ชื่อพัสดุ: </p>
                    <Input placeholder="ชื่อพัสดุ" onChange={e => setName(e.target.value)} />
                    <p style={{ margin: "6px 0 0 0" }}>ประเภทพัสดุ: </p>
                    <Select defaultValue="เครื่องคอมพิวเตอร์" onChange={value => setType(value)}>
                        <Option value="เครื่องคอมพิวเตอร์">เครื่องคอมพิวเตอร์</Option>
                        <Option value="ซีพียู">ซีพียู</Option>
                        <Option value="จอมอนิเตอร์">จอมอนิเตอร์</Option>
                        <Option value="แป้นพิมพ์">แป้นพิมพ์</Option>
                        <Option value="เมาส์">เมาส์</Option>
                        <Option value="เราเตอร์">เราเตอร์</Option>
                        <Option value="เครื่องปริ้นเตอร์">เครื่องปริ้นเตอร์</Option>
                        <Option value="หมึก">หมึก</Option>
                    </Select>
                    <p style={{ margin: "6px 0 0 0" }}>จำนวนพัสดุ: </p>
                    <InputNumber min={1} max={10000} defaultValue={1} onChange={onChangeNumber} placeholder="จำนวนพัสดุ" />
                </Modal>
            </IonPage>
        </StyledWrapper >
    )
}

export default Supplies

