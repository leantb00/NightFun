import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux/reducers/login'
export default configureStore({
    reducer: {
        login:loginReducer,
    },
})