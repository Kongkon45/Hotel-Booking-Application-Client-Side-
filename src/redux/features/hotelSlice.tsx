import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
    name : "hotels",
    initialState : {
        hotels : []
    },
    reducers : {
        addBooking : (state : any, action : any)=>{
            const room = state.hotels.find((hotel:any) => hotel.id === action.payload.id);
            if(room){
                room.quantity ++
            }
            else {
                state.hotels.push({...action.payload, quantity : 1})
            }
        },
        removeBooking : (state : any, action : any)=>{
            state.hotels = state.hotels.filter((hotel : any)=>hotel.id !== action.payload.id)
        }
    }

})

export const {addBooking, removeBooking} = hotelSlice.actions;
export default hotelSlice.reducer;