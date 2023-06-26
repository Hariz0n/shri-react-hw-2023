"use client";
import { createPortal } from "react-dom";
import React from "react";

interface IProps {
	children: React.ReactNode;
}

const ReactPortal = ({ children }: IProps) => {
	return createPortal(children, document.body);
};

export default ReactPortal;
