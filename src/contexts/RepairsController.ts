import { useState, useEffect } from 'react'
import firebase from '../firebase'
import TRepair from '../types/TRepair';

const col = firebase.firestore().collection('repairs');

const RepairsController = () => {
    let [repairObj, setRepairObj] = useState<{ [key: string]: TRepair }>(null);

    const getRepair = () => {
        return col.onSnapshot((s) => {

            if (!repairObj) repairObj = {};

            s.docs.forEach((doc) => {
                const dataObj = doc.data();
                const data = {
                    ...dataObj,
                    id: doc.id,
                    repair_notification_date: dataObj.repair_notification_date ? dataObj.repair_notification_date.toDate() : null
                };
                repairObj[doc.id] = data as TRepair;

            })
            setRepairObj({ ...repairObj });
        });
    }

    const addRepair = (data) => {
        return col.doc().set({ ...data })
    }

    useEffect(() => {
        let unsub1 = getRepair();

        return () => {
            unsub1();
        }
    }, [])

    return {
        repairObj,
        repairs: !repairObj ? null : Object.values(repairObj),
        addRepair
    }
}

export default RepairsController