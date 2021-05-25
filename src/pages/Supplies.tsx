import { IonButton, IonCol, IonContent, IonGrid, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import CardSupplies from '../components/CardSupplies'
import Topbar from '../components/Topbar'
import { Input, InputNumber, Modal, Select } from 'antd';
import { AppContext } from '../contexts/AppProvider'
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

const Supplies = () => {
    const { suppliesController } = useContext(AppContext)
    const { createdSupply, supplies, updateSupply } = suppliesController;
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
        const list = !supplies ? [] : supplies.reduce((prev, cur) => { // prev = {}
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

    useEffect(() => {
        switch (type) {
            case "ซีพียู":
                setImage("https://cdn2.iconfinder.com/data/icons/technology-and-devices-cartoon/512/sim4348-512.png")
                break;
            case "จอมอนิเตอร์":
                setImage("https://c1.klipartz.com/pngpicture/404/164/sticker-png-acer-v6-computer-monitor-computer-monitors-1920-x-1080-215-in-liquidcrystal-display-ips-panel-led-display-backlight.png")
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
            case "หมึกปริ้นเตอร์":
                setImage("https://png.pngtree.com/png-clipart/20191121/original/pngtree-printer-ink-icon-flat-style-png-image_5146311.jpg")
                break;
            default:
                setImage("https://static.turbosquid.com/Preview/001276/701/FV/_600.jpg")
                break;
        }
    }, [type])

    const handleOk = () => {
        createdSupply({
            image,
            name,
            type,
            number
        })
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const selectType = (value) => {
        setType(value)
    }
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
                                                            <CardSupplies key={index} value={value} onUpdate={(id, numb) => updateSupply(id, { number: numb })} />
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
                    <Select placeholder="เลือกประเภทพัสดุ" onChange={selectType}>
                        <Option value="เครื่องคอมพิวเตอร์">เครื่องคอมพิวเตอร์</Option>
                        <Option value="ซีพียู">ซีพียู</Option>
                        <Option value="จอมอนิเตอร์">จอมอนิเตอร์</Option>
                        <Option value="แป้นพิมพ์">แป้นพิมพ์</Option>
                        <Option value="เมาส์">เมาส์</Option>
                        <Option value="เราเตอร์">เราเตอร์</Option>
                        <Option value="เครื่องปริ้นเตอร์">เครื่องปริ้นเตอร์</Option>
                        <Option value="หมึกปริ้นเตอร์">หมึกปริ้นเตอร์</Option>
                    </Select>
                    <p style={{ margin: "6px 0 0 0" }}>จำนวนพัสดุ: </p>
                    <InputNumber min={0} max={10000} defaultValue={0} onChange={onChangeNumber} placeholder="จำนวนพัสดุ" />
                </Modal>
            </IonPage>
        </StyledWrapper >
    )
}

export default Supplies

