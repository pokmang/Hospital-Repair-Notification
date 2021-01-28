import React from 'react';
import AuthController from './AuthController';
import UserController from './UserController';
import RepairsController from './RepairsController';
import TopicsController from './TopicsController';
import EvaluatesController from './EvaluatesController';

type ContextType = {
    authController: ReturnType<typeof AuthController>,
    userController: ReturnType<typeof UserController>,
    repairsController: ReturnType<typeof RepairsController>,
    topicsController: ReturnType<typeof TopicsController>,
    evaluatesController: ReturnType<typeof EvaluatesController>,
}

export const AppContext = React.createContext<ContextType>(null);

const AppProvider: React.FC<any> = (props) => {
    const authController = AuthController();
    const userController = UserController();
    const repairsController = RepairsController();
    const topicsController = TopicsController();
    const evaluatesController = EvaluatesController();

    const value = {
        authController,
        userController,
        repairsController,
        topicsController,
        evaluatesController,
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;