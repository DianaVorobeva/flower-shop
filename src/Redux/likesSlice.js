import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: "like",
    initialState: {
       likedItems: []
    },
    reducers: {
        addItemToLike: (state,action) => {
            state.likedItems.push({
                productId: action.payload.item.id
            })
        },

        removeItemFromLike: (state,action) => {
    
            state.likedItems = state.likedItems.filter(
                likeItem => likeItem.id !== action.payload.likeItemId,

            )
        }
    }
})

export const getLikesItems = state => state.like.likedItems;
export const {addItemToLike, removeItemFromLike} = likesSlice.actions;
export default likesSlice.reducer;