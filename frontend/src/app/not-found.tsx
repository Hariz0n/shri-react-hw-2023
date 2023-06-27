import React from "react";
import { Info } from "@/widgets/Info/ui/Info";
import Container from "@/shared/ui/Container/Container";

const NotFound = () => {
	return (
		<Container>
			<Info>
				<h2>Страница не найдена</h2>
				<p>Вернитесь на главную страницу</p>
			</Info>
		</Container>
	);
};

export default NotFound;
