import { createSlice } from '@reduxjs/toolkit';

interface LoadingProps {
	open: boolean;
}

const initialState: LoadingProps = {
	open: false,
};

const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		showLoading: () => {
			return {
				open: true,
			};
		},
		hideLoading: () => {
			return {
				open: false,
			};
		},
	},
});
export const { showLoading, hideLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
