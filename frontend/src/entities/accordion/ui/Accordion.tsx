"use client"
import React, {useContext, useState} from 'react';
import {Card} from "@/shared/ui/Card/Card";
import styles from './Accordion.module.css';
import Icon from "@/shared/ui/Icon/Icon";
import classNames from "classnames";

type accordionContext = {
  activeGroup?: string,
  setActiveGroup: React.Dispatch<string | undefined>
}
// @ts-ignore
export const AccordionContext = React.createContext<accordionContext>()

interface MenuProps {
  children: React.ReactNode
}

interface GroupProps {
  children: React.ReactNode
  title: string,
  id: string
}

interface ItemProps {
  children: React.ReactNode
}


export const Accordion = (props: MenuProps) => {
  const [activeGroup, setActiveGroup] = useState<string>()
  return (
    <AccordionContext.Provider
      value={{activeGroup, setActiveGroup}}>{props.children}</AccordionContext.Provider>
  );
};

Accordion.Group = function MenuGroup(props: GroupProps) {
  const {activeGroup, setActiveGroup} = useContext(AccordionContext)
  return (
    <Card className={styles.card}>
      <div className={classNames(styles.content, activeGroup === props.id ? styles.active : null)}>
        <button className={styles.header} onClick={() => activeGroup !== props.id ? setActiveGroup(props.id) : setActiveGroup(undefined)}>{props.title}</button>
        <p className={classNames(styles.text, activeGroup === props.id ? styles.active : null)}>{props.children}</p>
      </div>
      <Icon type="arrow" size="large" className={classNames(styles.icon, activeGroup === props.id ? styles.active : null)}/>
    </Card>
  )
}

Accordion.Item = function MenuGroup(props: ItemProps) {
  return (
      <>{props.children}</>
  )
}


