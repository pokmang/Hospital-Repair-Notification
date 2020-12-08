import React from 'react';
import AuthController from './AuthController';
import UserController from './UserController';

type ContextType = {
    authController: ReturnType<typeof AuthController>,
    userController: ReturnType<typeof UserController>,
}

export const AppContext = React.createContext<ContextType>(null);

const AppProvider: React.FC<any> = (props) => {
    const authController = AuthController();
    const userController = UserController();

    const value = {
        authController,
        userController,
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;