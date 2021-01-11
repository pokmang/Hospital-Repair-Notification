import { useState, useEffect } from 'react'
import firebase from '../firebase'

const col = firebase.firestore().collection('repairs');

const RepairsController = () => {
    let [repairObj, setRepairObj] = useState(null);

    const getRepair = () => {
        return col.onSnapshot((s) => {

            if (!repairObj) repairObj = {};

            s.docs.forEach((doc) => {
                const dataObj = doc.data();
                const data = { ...dataObj, id: doc.id };
                repairObj[doc.id] = data;
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

