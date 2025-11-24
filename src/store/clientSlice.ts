import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClientProfile {
    name: string,
    email: string,
    password: string,
    favorite: string,
    comments: string,
}

const initialState: ClientProfile = {
    name: '',
    email: '',
    password: '',
    favorite: '',
    comments: '',

};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers:{
        setClientProfile: (state, action: PayloadAction<ClientProfile>)=>{
            state.name = action.payload.name;
            state.email =action.payload.email;
            state.password = action.payload.password;
            state.favorite = action.payload.favorite;
            state.comments = action.payload.comments

        },
        clearClientProfile: () => initialState,
    }
})

export const {setClientProfile, clearClientProfile} = clientSlice.actions;
export default clientSlice.reducer