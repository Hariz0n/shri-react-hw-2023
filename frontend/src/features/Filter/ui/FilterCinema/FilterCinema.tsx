import React from 'react';
import {Select} from "@/shared/ui/Select/Select";
import {useGetCinemasQuery} from "@/entities/Cinema/api/cinemaApi";
import InputSkeleton from "@/shared/ui/InputSkeleton/InputSkeleton";
import {useSelector} from "react-redux";
import {selectFilterCinema} from "@/features/Filter/model/selector";
import {RootState} from "@/shared/store/store";

interface IProps {
  onChange: (value: string) => void
}

export const FilterCinema = (props: IProps) => {
  const {data: cinemas, isLoading: isLoadingCinemas, error: errorCinemas} = useGetCinemasQuery()
  const filterCinema = useSelector((state: RootState) => selectFilterCinema(state))
  if (isLoadingCinemas) {
    return <InputSkeleton/>
  }

  if (errorCinemas || !cinemas) {
    return <div>Not found</div>
  }

  return (
    <Select initialValue={{
      value: filterCinema, displayName: cinemas.find(c => c.id === filterCinema)?.name
    }} items={cinemas.map(cinema => ({
      value: cinema.id,
      displayName: cinema.name
    }))} onChange={props.onChange} title="Кинотеатр" />
  );
};
