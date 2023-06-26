"use client"
import {createPortal} from "react-dom";
import React, {useEffect, useLayoutEffect} from "react";

interface IProps {
  children: React.ReactNode,
}

const ReactPortal = ({children}: IProps) => {
  return createPortal(children, document.body)
}

export default ReactPortal