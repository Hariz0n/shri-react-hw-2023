import React, { useEffect, useState } from "react";
import { Input } from "@/shared/ui/Input/Input";
import { useGetMoviesQuery } from "@/entities/Movie/api/movieApi";
import InputSkeleton from "@/shared/ui/InputSkeleton/InputSkeleton";
interface IProps {
	onChange: (value: string) => void;
	isLoading?: boolean;
}

export const FilterPlainText = (props: IProps) => {
	const { isFetching } = useGetMoviesQuery();
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		const timeout = setTimeout(() => {
			props.onChange(inputValue);
		}, 500);
		return () => clearTimeout(timeout);
	}, [inputValue, props]);
	if (isFetching) {
		return <InputSkeleton />;
	}
	return (
		<Input
			id="name"
			title="Название"
			name="name"
			placeholder="Введите название"
			onChange={(value) => setInputValue(value)}
		/>
	);
};
