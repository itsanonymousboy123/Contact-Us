import React from "react";
import {MdMessage} from "react-icons/md"
import styles from "./Button.module.css";
function button(props)
{
    return (
        {...props},
        <button className={ props.isOutline ? styles.outline_btn: styles.primary_btn}>{props.icon} {props.text}</button>
    )
}

export default button;