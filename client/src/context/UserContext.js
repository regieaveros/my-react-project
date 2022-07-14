import React from "react";
import * as api from '../api/index';
import { toast } from 'react-toastify';

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {

    switch (action.type) {
      
        case "LOGIN_SUCCESS":
          return { ...state, isAuthenticated: true };
        case "SIGN_OUT_SUCCESS":
          return { ...state, isAuthenticated: false };
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
        
    }

}

function UserProvider({ children }) {
  
    var [state, dispatch] = React.useReducer(userReducer, {
        isAuthenticated: !!localStorage.getItem("profile"),
    });

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

function useUserState() {

    var context = React.useContext(UserStateContext);

    if (context === undefined) {
        throw new Error("useUserState must be used within a UserProvider");
    }

    return context;

}

function useUserDispatch() {

    var context = React.useContext(UserDispatchContext);

    if (context === undefined) {
        throw new Error("useUserDispatch must be used within a UserProvider");
    }

    return context;

}

export { UserProvider, useUserState, useUserDispatch, loginUser, createLoginUser, signOut, loadGoogleLogin, updateData };

// ###########################################################

async function loadGoogleLogin(dispatch, history) {

    toast.info('Login Success!');
    dispatch({ type: 'LOGIN_SUCCESS' });
    history.push('/app/dashboard');

}

async function loginUser(dispatch, email, password, history, setIsLoading,) {

    setIsLoading(true);

    const formData = { email, password };

    if (!!email && !!password) {

        const { data } = await api.signIn(formData);

        if(!!data) {

            toast.success('Login Success!');

            setTimeout(() => {

                localStorage.setItem('profile', JSON.stringify({ ...data }))
                setIsLoading(false)
                dispatch({ type: 'LOGIN_SUCCESS' })
                history.push('/app/dashboard')

            }, 2000);

        } else {

            toast.error('Invalid email & password!');
            setIsLoading(false);

        }

    } else {
        dispatch({ type: "LOGIN_FAILURE" });
        setIsLoading(false);
    }

}

async function createLoginUser(dispatch, name, email, password, confirmPassword, history, setIsLoading) {

    setIsLoading(true);
    const checked = false;

    const formData = { name, email, password, confirmPassword, checked };

    if (!!name && !!email && !!password && !!confirmPassword) {

        toast.success('Created Successfully!');
        const { data } = await api.signUp(formData);

        setTimeout(() => {
            localStorage.setItem('profile', JSON.stringify({ ...data }))
            setIsLoading(false)
            dispatch({ type: 'LOGIN_SUCCESS' })
            history.push('/app/dashboard')
        }, 2000);

    } else {
        dispatch({ type: "LOGIN_FAILURE" });
        setIsLoading(false);
    }

}

async function updateData(dispatch, history, id, name, email, password, confirmPassword, checked, setIsLoading) {

    setIsLoading(true);
    let formData;

      if(password === confirmPassword) {

            formData = { name, email, password, confirmPassword, checked };

            toast.success("Your Accouct Updated Successfully!");
            await api.updateUser(id, formData);

            setTimeout(() => {
                setIsLoading(false)
                dispatch({ type: "SIGN_OUT_SUCCESS" });
                history.push("/login");
                localStorage.removeItem('profile');
            }, 3000);

      } else {
            toast.error("Password Not Match!");
            setTimeout(() => {
                setIsLoading(false)
            }, 300);    
      }
}

function signOut(dispatch, history) {

    localStorage.removeItem('profile');
    dispatch({ type: "SIGN_OUT_SUCCESS" });
    history.push("/login");

}