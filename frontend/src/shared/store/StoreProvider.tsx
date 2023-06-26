"use client"

import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/shared/store/store";

interface IProps {
  children: React.ReactNode
}

export const StoreProvider = ({children}: IProps) => {
  return (
    <Provider store={store}>{children}</Provider>
  );
};
