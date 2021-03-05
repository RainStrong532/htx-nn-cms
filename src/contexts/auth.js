import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

import { loginApi } from '../services/api';
import LoadingScreen from '../views/components/LoadingScreen';



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token');
            console.log("Token: ", token);
            if (token) {
                // try {
                    // let user = await getMyInfo();
                    // if (user.id) {
                    //     setUser(user);
                    // }
                    if (token) {
                        setUser(true);
                    }
                // } catch (err) {

                // }
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {
        try {
            const data = await loginApi(username, password);
            console.log("data:", data);
            if (data.token) {
                Cookies.set('token', data.token, { expires: 60 })
                setUser(true);

                return false;
            }
            return false;
        } catch (err) {
            console.log("err: ", err);
            return false
        }
    }

    const logout = () => {
        Cookies.remove('token')
        // setUser(null)
        setUser(false);
        // delete api.defaults.headers.Authorization
    }


    return (
        <AuthContext.Provider value={{ user: user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({ children }) => {
    const router = useRouter();
    const gotoLogin = () => {
        router.push('/login');
    }
    const gotoHome = () => {
        router.push('/');
    }
    const { user, loading } = useAuth();
    const [windowReady, setWindowReady] = useState(false);
    useEffect(() => {
        setWindowReady(true);
    }, [windowReady])
    if (!windowReady || loading) {
        return (
            <div className="loadingContainer">
                <LoadingScreen />
            </div>
        );
    } else {
        if ((!user && (window.location.pathname !== '/login'))) {
            gotoLogin();
        } else if ((window.location.pathname === '/login') && user) {
            gotoHome();
        } else {
            console.log("has token");
            return children;
        }
    }
    return (
        <div className="loadingContainer">
            <LoadingScreen />
        </div>
    );
};
