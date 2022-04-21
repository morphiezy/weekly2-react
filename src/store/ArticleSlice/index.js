import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    loading:"idle"
};

const fetchArticle = createAsyncThunk(
    'article/GET',
    async (URL, {getState}) => {
        const { data,loading } = getState();

        if(loading !== "pending" || data.length > 0) return false

        const response = await fetch(URL);
        const article = response.json()
        return article;
    }
)

const ArticleSlice = createSlice({
    name:"article",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchArticle.pending, (state) => {
            state.loading = "pending"
        })
        .addCase(fetchArticle.fulfilled, (state,{payload}) => {         
            if(state.loading === "pending"){
                state.data.push(...payload)
                state.loading = "idle"
            }
        })
        .addCase(fetchArticle.rejected, (state) => {
            state.loading = "idle";
        })
    }
})


export {fetchArticle}
export default ArticleSlice.reducer