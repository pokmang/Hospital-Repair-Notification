import { useState, useEffect } from "react";
import firebase from "../firebase";

const col = firebase.firestore().collection('users');
const UserController = () => {
    const [users, setUsers] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [positions, setPositions] = useState([]);

    const getUsers = () => {
        col.onSnapshot((querySnapshot) => {
            const x = []
            querySnapshot.forEach((doc) => {
                x.push({ ...doc.data() })
            });
            setUsers(x)
        })
    }

    const getDepartments = () => {
        firebase.firestore().collection('departments').onSnapshot((querySnapshot) => {
            const x = []
            querySnapshot.forEach((doc) => {
                x.push({ ...doc.data() })
            });
            setDepartments(x)
        })
    }

    const getPositions = () => {
        firebase.firestore().collection('positions').onSnapshot((querySnapshot) => {
            const x = []
            querySnapshot.forEach((doc) => {
                x.push({ ...doc.data() })
            });
            setPositions(x)
        })
    }

    useEffect(() => {
        getUsers()
        getDepartments()
        getPositions()
    }, [])

    return {
        users,
        departments,
        positions
    }
}

export default UserController;