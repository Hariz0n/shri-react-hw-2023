import {RootState} from "@/shared/store/store";

export const selectCartModule = (state: RootState) => state.cart
export const selectCartItem = (state: RootState, id: string) => selectCartModule(state)[id] ?? 0

export const selectCartCount = (state: RootState) => Object.values(selectCartModule(state))?.reduce((previousValue, currentValue) => previousValue + currentValue, 0) ?? 0