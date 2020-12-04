import React from 'react';
import AuthController from './AuthController';

type ContextType = {
    authController: ReturnType<typeof AuthController>,
}

export const AppContext = React.createContext<ContextType>(null);

const AppProvider: React.FC<any> = (props) => {
    const authController = AuthController();

    const value = {
        authController,
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;