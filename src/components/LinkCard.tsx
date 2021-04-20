import React from "react";
import Link from "next/link";
import css from "../css/components/linkCard.module.css"

export default function LinkCard(props) {
    return (
        <Link href={props.link}>
        <a className={css.linkCard} target={props.external == 'true' ? '_blank': ''}
           rel={props.external == 'true' ? 'external noopener noreferrer nofollow' : ''}>

            <div>
                <img src={`/icons/${props.img}.svg`} alt=""/>

                <span>{props.children}</span>
            </div>

            <img src="/icons/arrow-right.svg" alt="->"/>
        </a>
        </Link>
    )
}