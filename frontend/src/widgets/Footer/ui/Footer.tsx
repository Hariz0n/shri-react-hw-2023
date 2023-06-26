import React from 'react';
import styles from './Footer.module.css'
import Container from "@/shared/ui/Container/Container";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <Link href='/faq' className={styles.link}>Вопросы-ответы</Link>
        <Link href='/about' className={styles.link}>О нас</Link>
      </Container>
    </footer>
  );
};
