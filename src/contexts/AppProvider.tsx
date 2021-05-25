import React from 'react';
import AuthController from './AuthController';
import UserController from './UserController';
import RepairsController from './RepairsController';
import TopicsController from './TopicsController';
import EvaluatesController from './EvaluatesController';
import SuppliesController from './SuppliesController';

type ContextType = {
    authController: ReturnType<typeof AuthController>,
    userController: ReturnType<typeof UserController>,
    repairsController: ReturnType<typeof RepairsController>,
    topicsController: ReturnType<typeof TopicsController>,
    evaluatesController: ReturnType<typeof EvaluatesController>,
    suppliesController: ReturnType<typeof SuppliesController>
}

export const AppContext = React.createContext<ContextType>(null);

const AppProvider: React.FC<any> = (props) => {
    const authController = AuthController();
    const userController = UserController();
    const repairsController = RepairsController();
    const topicsController = TopicsController();
    const evaluatesController = EvaluatesController();
    const suppliesController = SuppliesController();

    const value = {
        authController,
        userController,
        repairsController,
        topicsController,
        evaluatesController,
        suppliesController
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;