import { createSlice } from "@reduxjs/toolkit";
const retrieveDataFromLocalStorage = () => {
  const hotelsFromLocalStorageString = localStorage.getItem("hotels");
  if (hotelsFromLocalStorageString) {
    return JSON.parse(hotelsFromLocalStorageString);
  }
  return [];
};
const hotelSlice = createSlice({
  name: "hotels",
  initialState: {
    hotels: retrieveDataFromLocalStorage(),
  },
  reducers: {
    addBooking: (state: any, action: any) => {
      const room = state.hotels.find(
        (hotel: any) => hotel.id === action.payload.id
      );
      if (room) {
        room.quantity++;
      } else {
        state.hotels.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("hotels", JSON.stringify(state.hotels));
    },
    removeBooking: (state: any, action: any) => {
      state.hotels = state.hotels.filter(
        (hotel: any) => hotel.id !== action.payload.id
      );
      localStorage.setItem("hotels", JSON.stringify(state.hotels));
    },
    clearBookings: (state) => {
        state.hotels = [];
        localStorage.removeItem("hotels");
      },
  },
});

export const { addBooking, removeBooking,clearBookings } = hotelSlice.actions;
export default hotelSlice.reducer;
