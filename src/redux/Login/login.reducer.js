import { LOGIN, LOGOUT } from './counter.types';


    const INITIAL_STATE = {

        isLoggedIn: false,
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case LOGIN:

               return {

                 ...state, isLoggedIn: true,

               };

            case LOGOUT:

               return {
                  ...state, isLoggedIn: true,

               };

             default: return state;

        }

    };

    export default reducer;
