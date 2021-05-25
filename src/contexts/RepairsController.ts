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
                    noti_date: dataObj.noti_date ? dataObj.noti_date.toDate() : null,
                    repair_date: dataObj.repair_date ? dataObj.repair_date.toDate() : null,
                    repaired_date: dataObj.repaired_date ? dataObj.repaired_date.toDate() : null,
                    cancel_date: dataObj.cancel_date ? dataObj.cancel_date.toDate() : null,
                    evaluate_date: dataObj.evaluate_date ? dataObj.evaluate_date.toDate() : null
                };
                repairObj[doc.id] = data as TRepair;

            })
            setRepairObj({ ...repairObj });
        });
    }

    const addRepair = (data) => {
        return col.doc().set({ ...data })
    }

    const updateRepair = (id, data) => {
        return (
            col.doc(id).update({ ...data })
        )
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
        addRepair,
        updateRepair,
    }
}

export default RepairsController