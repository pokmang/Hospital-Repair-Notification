import { useState, useEffect } from "react";
import firebase from "../firebase";

const col = firebase.firestore().collection('users');
const UserController = () => {
    const [users, setUsers] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [positions, setPositions] = useState([]);

    const getUsers = () => {
        return col.onSnapshot((s) => {
            const data = s.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            });
            setUsers(data)
        });
    }

    const getDepartments = () => {
        return firebase.firestore().collection('departments').onSnapshot((s) => {
            const data = s.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            });
            setDepartments(data)
        })
    }

    const getPositions = () => {
        return firebase.firestore().collection('positions').onSnapshot((s) => {
            const data = s.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
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

    return {
        users,
        departments,
        positions
    }
}

export default UserController;