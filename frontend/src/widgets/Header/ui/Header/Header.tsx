"use client"
import React from 'react';
import Container from "@/shared/ui/Container/Container";
import styles from './Header.module.css'
import {HeaderLogo} from "@/widgets/Header/ui/HeaderLogo/HeaderLogo";
import HeaderCart from "@/features/Cart/HeaderCart/ui/HeaderCart";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <HeaderLogo/>
          <HeaderCart/>
        </div>
      </Container>
    </header>
  );
};