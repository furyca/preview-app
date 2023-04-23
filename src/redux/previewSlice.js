import { createSlice } from "@reduxjs/toolkit";

export const previewSlice = createSlice({
    name: 'preview',
    initialState:{
        text: '',
        isShowingHelp: false,
        textCurrent: '',
    },
    reducers: {
        updatePreview: (state, action) => {
            state.text = action.payload
            state.textCurrent = action.payload
        },
        typeHelp: (state, action) => {
            if (!state.isShowingHelp) {
                state.textCurrent = action.payload
                state.isShowingHelp = true
                console.log(state.isShowingHelp);
              }
            else {
                state.textCurrent = state.text
                state.isShowingHelp = false
                console.log(state.isShowingHelp);
            }
        }
    },
})

export const {updatePreview, typeHelp} = previewSlice.actions;
export default previewSlice.reducer;