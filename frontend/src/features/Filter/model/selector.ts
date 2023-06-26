import {RootState} from "@/shared/store/store";
import {selectCartModule} from "@/entities/Cart/model/selector";
import {Movie} from "@/entities/Movie/api/types";

export const selectFilterModule = (state: RootState) => state.cartFilter
export const selectFilterText = (state: RootState) => selectFilterModule(state).text
export const selectFilterCinema = (state: RootState) => selectFilterModule(state).cinema
export const selectFilterGenre = (state: RootState) => selectFilterModule(state).genre
