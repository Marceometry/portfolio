import { ReactNode } from "react";
import css from '../css/components/textColor.module.css'

interface textColorProps {
    children: ReactNode
}

export function Green({ children }: textColorProps) {
    return <span className={css.green}> { children } </span>
}

export function Purple({ children }: textColorProps) {
    return <span className={css.purple}> { children } </span>
}