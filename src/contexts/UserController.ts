import { useState, useEffect } from "react";
import firebase from "../firebase";
import TUser from "../types/TUser";

const col = firebase.firestore().collection('users');
const UserController = () => {
    let [userObj, setUserObj] = useState<{ [key: string]: TUser }>(null);

    const [departments, setDepartments] = useState([]);
    const [positions, setPositions] = useState([]);

    const getUsers = () => {
        return col.onSnapshot((s) => {

            if (!userObj) userObj = {};

            s.docs.forEach((doc) => {
                const dataObj = doc.data();
                const data = { ...dataObj, id: doc.id } as TUser;
                userObj[doc.id] = data;
            })

            setUserObj({ ...userObj });
        });
    }

    const getDepartments = () => {
        return firebase.firestore().collection('departments').onSnapshot((s) => {
            const data = s.docs.map((doc) => {
                return { ...doc.data() }
            });
            setDepartments(data)
        })
    }

    const getPositions = () => {
        return firebase.firestore().collection('positions').onSnapshot((s) => {
            const data = s.docs.map((doc) => {
                return { ...doc.data() }
            });
            setPositions(data)
        })
    }

    useEffect(() => {
        let unsub1 = getUsers();
        let unsub2 = getDepartments();
        let unsub3 = getPositions();
        return () => {
            unsub1();
            unsub2();
            unsub3();
        }
    }, [])

    const updateUser = (id, data) => {
        return col.doc(id).update({ ...data })
    }

    return {
        userObj,
        users: !userObj ? null : Object.values(userObj),
        departments,
        positions,
        updateUser,
    }
}

export default UserController;