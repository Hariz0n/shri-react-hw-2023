"use client"
import React from 'react';
import {Card} from "@/shared/ui/Card/Card";
import classNames from "classnames";
import styles from './Filter.module.css';
import {FilterPlainText} from "@/features/Filter/ui/FilterPlainText/FilterPlainText";
import FilterGenre from "@/features/Filter/ui/FilterGenre/FilterGenre";
import {FilterCinema} from "@/features/Filter/ui/FilterCinema/FilterCinema";
import {useDispatch} from "react-redux";
import {filterActions} from "@/features/Filter/model/slice";

interface IProps {
  className: string
  children?: React.ReactNode
}

const Filter = (props: IProps) => {
  const dispatch = useDispatch()
  return (
    <Card className={classNames(props.className, styles.filter)}>
      <h5 className={styles.title}>Фильтр поиска</h5>
      <div className={styles.filters}>
        <FilterPlainText onChange={value => dispatch(filterActions.changeText(value))}/>
        <FilterGenre onChange={value => dispatch(filterActions.changeGenre(value))}/>
        <FilterCinema onChange={value => dispatch(filterActions.changeCinema(value))}/>
      </div>
    </Card>
  );
};

export default Filter;