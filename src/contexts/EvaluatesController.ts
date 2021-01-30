import { useState, useEffect } from 'react'
import firebase from '../firebase'
import TEvaluate from '../types/TEvaluate';
import TTopic from '../types/TTopic';

const col = firebase.firestore().collection('evaluates');

const EvaluatesController = () => {
    let [evaluateObj, setEvaluate] = useState<{ [key: string]: TEvaluate }>(null);
    const getEvaluate = () => {
        return col.onSnapshot((s) => {

            if (!evaluateObj) evaluateObj = {};

            s.docs.forEach((doc) => {
                const dataObj = doc.data();
                const data = {
                    ...dataObj,
                    id: doc.id,
                };
                evaluateObj[doc.id] = data as TEvaluate;
            })
            setEvaluate({ ...evaluateObj });
        });
    }

    const addEvaluate = (data) => {
        return col.doc().set({ ...data })
    }


    useEffect(() => {
        let unsub1 = getEvaluate();
        return () => {
            unsub1();
        }
    }, [])

    return {
        evaluateObj,
        evaluates: !evaluateObj ? null : Object.values(evaluateObj),
        addEvaluate,
    }
}

export default EvaluatesController