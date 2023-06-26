"use client";
import React from "react";
import Container from "@/shared/ui/Container/Container";
import { Accordion } from "@/entities/accordion/ui/Accordion";
import styles from "./page.module.css";
import { Info } from "@/widgets/Info/ui/Info";

const FAQ = () => {
	return (
		<Container className={styles.container}>
			<Info>
				<h2>Вопросы-ответы</h2>
			</Info>
			<div className={styles.list}>
				<Accordion>
					<Accordion.Group title="Что такое Билетопоиск?" id="main">
						<Accordion.Item>
							Мы — крупнейший сервис о кино в рунете. На нем вы сможете
							посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги
							популярных видео и интересные факты, поставить фильмам оценки,
							написать рецензии и дополнить описание фильмов.
						</Accordion.Item>
					</Accordion.Group>
				</Accordion>
				<Accordion>
					<Accordion.Group
						title="Какой компании принадлежит Билетопоиск?"
						id="main"
					>
						<Accordion.Item>
							Мы — крупнейший сервис о кино в рунете. На нем вы сможете
							посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги
							популярных видео и интересные факты, поставить фильмам оценки,
							написать рецензии и дополнить описание фильмов.
						</Accordion.Item>
					</Accordion.Group>
				</Accordion>
				<Accordion>
					<Accordion.Group title="Как купить билет на Билетопоиск?" id="main">
						<Accordion.Item>
							Мы — крупнейший сервис о кино в рунете. На нем вы сможете
							посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги
							популярных видео и интересные факты, поставить фильмам оценки,
							написать рецензии и дополнить описание фильмов.
						</Accordion.Item>
					</Accordion.Group>
				</Accordion>
				<Accordion>
					<Accordion.Group title="Как оставить отзыв на Билетопоиск?" id="main">
						<Accordion.Item>
							Мы — крупнейший сервис о кино в рунете. На нем вы сможете
							посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги
							популярных видео и интересные факты, поставить фильмам оценки,
							написать рецензии и дополнить описание фильмов.
						</Accordion.Item>
					</Accordion.Group>
				</Accordion>
			</div>
		</Container>
	);
};

export default FAQ;
