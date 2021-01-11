import React from 'react';
import AuthController from './AuthController';
import UserController from './UserController';
import RepairsController from './RepairsController';

type ContextType = {
    authController: ReturnType<typeof AuthController>,
    userController: ReturnType<typeof UserController>,
    repairsController: ReturnType<typeof RepairsController>,
}

export const AppContext = React.createContext<ContextType>(null);

const AppProvider: React.FC<any> = (props) => {
    const authController = AuthController();
    const userController = UserController();
    const repairsController = RepairsController();

    const value = {
        authController,
        userController,
        repairsController
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;