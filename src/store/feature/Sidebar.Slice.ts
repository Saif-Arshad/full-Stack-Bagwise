import { createSlice } from '@reduxjs/toolkit';

interface SidebarToggleState {
  isOpen: boolean;
}

const initialState: SidebarToggleState = {
  isOpen: true,
};

const sidebarToggleSlice = createSlice({
  name: 'sidebarToggle',
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;