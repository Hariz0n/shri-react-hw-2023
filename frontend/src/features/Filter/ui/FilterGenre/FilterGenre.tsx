import React from 'react';
import {Select} from "@/shared/ui/Select/Select";
import {useGetMoviesQuery} from "@/entities/Movie/api/movieApi";
import {GENRE} from "@/shared/translations/Genre";
import InputSkeleton from "@/shared/ui/InputSkeleton/InputSkeleton";
import {useSelector} from "react-redux";
import {RootState} from "@/shared/store/store";
import {selectFilterGenre} from "@/features/Filter/model/selector";

interface IProps {
  onChange: (value: string) => void
}

const FilterGenre = (props: IProps) => {
  const {data: data, isLoading: isLoadingMovies, error: errorMovies} = useGetMoviesQuery()
  const filterGenre = useSelector((state: RootState) => selectFilterGenre(state))
  if (isLoadingMovies) {
    return <InputSkeleton/>
  }

  if (errorMovies || !data) {
    return <div>Not found</div>
  }
  return (
    <Select initialValue={{
      value: filterGenre,
      displayName: GENRE[filterGenre!]
    }} title="Жанр" onChange={value => props.onChange(value)} items={
      Array.from(new Set<string>(data.map(movie => movie.genre))).map(item => ({
        displayName: GENRE[item],
        value: item
      }))
    }/>
  );
};

export default FilterGenre;