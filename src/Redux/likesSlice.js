import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: "like",
    initialState: {
       likedItems: []
    },
    reducers: {
        addItemToLike: (state,action) => {
            state.likedItems.push(action.payload)},

        removeItemFromLike: (state,action) => {
            state.likedItems = state.likedItems.filter(
                likedItem => likedItem.id !== action.payload,
            )
        }
    }
})

export const getLikesItems = state => state.like.likedItems;
export const {addItemToLike, removeItemFromLike} = likesSlice.actions;
export default likesSlice.reducer;