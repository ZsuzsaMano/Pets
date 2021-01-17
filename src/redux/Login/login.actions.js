import { LOGIN, LOGOUT } from './counter.types';


    export const login = () => {

        return {

            type: LOGIN,

        };

    };

    export const logout = () => {

        return {

           type: LOGOUT,

        };

    };
