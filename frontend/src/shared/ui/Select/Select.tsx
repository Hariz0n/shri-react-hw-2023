"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Select.module.css";
import localFont from "next/font/local";
import classNames from "classnames";
import Icon from "@/shared/ui/Icon/Icon";
import ReactPortal from "@/entities/Portal/ui/ReactPortal";

interface ISelectProps {
	title: string;
	onChange: (value: string) => void;
	items: IItemProps[];
	initialValue?: select;
}

interface IItemProps {
	value: string;
	displayName: string;
}

interface IItemPropsWithEvent {
	displayName: string;
	onChange: React.MouseEventHandler;
}

const SFPro = localFont({
	src: "./sf-pro-display_regular.woff2",
	weight: "400",
	style: "normal",
});

type select = {
	displayName?: string;
	value?: string;
};

export const Select = (props: ISelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [select, setSelect] = useState<select>(props.initialValue ?? {});
	const selectBox = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const listener = () => {
			setIsOpen(false);
		};
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, []);

	const handleClickSelect = (data?: select) => {
		setSelect(data || {});
		props.onChange(data?.value!);
		setIsOpen(false);
	};

	return (
		<div
			className={classNames(styles.selectWrapper, SFPro.className)}
			ref={selectBox}
		>
			<span className={styles.title}>{props.title}</span>
			<div
				className={classNames(styles.select, isOpen ? styles.active : null)}
				onClick={() => setIsOpen((prevState) => !prevState)}
			>
				{select.displayName ?? (
					<span>Выбирете {props.title.toLowerCase()}</span>
				)}
				<Icon
					type="arrow"
					size="normal"
					className={classNames(styles.icon, isOpen ? styles.active : null)}
				/>
			</div>
			<ReactPortal>
				{selectBox.current && (
					<ul
						className={classNames(styles.list, isOpen && styles.active)}
						style={{
							width: selectBox.current.offsetWidth,
							zIndex: 1000,
							left: selectBox.current.getBoundingClientRect().left,
							top: selectBox.current.getBoundingClientRect().bottom + 4,
						}}
					>
						<Select.Item
							displayName="Не выбрано"
							onChange={() => {
								handleClickSelect();
							}}
						/>
						{props.items.map((item) => {
							return (
								<Select.Item
									key={item.value}
									displayName={item.displayName}
									onChange={() => {
										handleClickSelect({
											value: item.value,
											displayName: item.displayName,
										});
									}}
								/>
							);
						})}
					</ul>
				)}
			</ReactPortal>
		</div>
	);
};

Select.Item = function SelectItem(props: IItemPropsWithEvent) {
	return (
		<li className={styles.listItem} onClick={props.onChange}>
			{props.displayName}
		</li>
	);
};
