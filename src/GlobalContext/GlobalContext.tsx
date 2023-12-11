import { createContext, useReducer } from 'react';

const GlobalContext = createContext();

const initialState = {
    isLogin: false,
    isAdmin: false,
    apiBaseUrl: 'https://fasti-production.up.railway.app/api/',
    userInfo: {},
    isSidebarOpen: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'isAdmin':
            return { ...state, isAdmin: action.payload };
        case 'isLogin':
            return { ...state, isLogin: action.payload };
        case 'UserInfo':
            return { ...state, userInfo: action.payload };
        case 'IsSidebarOpen':
            return { ...state, isSidebarOpen: action.payload };
        default:
            return state;
    }
};

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const isAdminHandler = (data) => {
        dispatch({
            type: 'isAdmin',
            payload: data,
        });
    };

    const isLoginHandler = (data) => {
        dispatch({
            type: 'isLogin',
            payload: data,
        });
    };

    const UserInfoHandler = (data) => {
        dispatch({
            type: 'UserInfo',
            payload: data,
        });
    };

    const IsSidebarOpenHandler = (data) => {
        dispatch({
            type: 'IsSidebarOpen',
            payload: data,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                isLogin: state.isLogin,
                isAdmin: state.isAdmin,
                apiBaseUrl: state.apiBaseUrl,
                isLoginHandler,
                isAdminHandler,
                userInfo: state.userInfo,
                UserInfoHandler,
                isSidebarOpen: state.isSidebarOpen,
                IsSidebarOpenHandler,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalContextProvider };
