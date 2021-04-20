import { ReactNode } from "react";
import css from '../css/components/textColor.module.css'

export function Green(children: ReactNode) {
    return <span className={css.green}> { children } </span>
}

export function Purple(children: ReactNode) {
    return <span className={css.purple}> { children } </span>
}