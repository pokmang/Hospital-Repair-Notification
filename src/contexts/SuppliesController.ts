import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import TSupplies from '../types/Tsupplies';

const col = firebase.firestore().collection('supplies')

const SuppliesController = () => {
    let [supplyObj, setSupplyObj] = useState<{ [key: string]: TSupplies }>(null)
    const getSupplies = () => {
        return col.onSnapshot((s) => {
            if (!supplyObj) supplyObj = {};

            s.docs.forEach((doc) => {
                const dataObj = doc.data();
                const data = {
                    ...dataObj,
                    id: doc.id,
                };
                supplyObj[doc.id] = data as TSupplies;
            })
            setSupplyObj({ ...supplyObj });
        })
    }

    useEffect(() => {
        let unsub1 = getSupplies();
        return () => {
            unsub1();
        }
    }, [])

    const createdSupply = (data) => {
        return col.doc().set({ ...data })
    }

    const updateSupply = (id, data) => {
        return col.doc(id).update({ ...data })
    }
    return {
        supplyObj,
        supplies: !supplyObj ? null : Object.values(supplyObj),
        createdSupply,
        updateSupply
    }
}

export default SuppliesController
