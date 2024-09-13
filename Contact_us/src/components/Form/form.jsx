import React from "react";
import styles from "./form.module.css"
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import { useState } from "react";
function form()
{
  const[name,setName]=useState("Gaurav")
  const[email,setMail]=useState("contact@gaurav.com")
  const[text,setText]=useState("Good Morning")
  let address;
  function onSubmit(event)
  {
      event.preventDefault();
      setName(event.target[0].value);
      setMail(event.target[1].value);    
      setText(event.target[2].value);    
  }
    return(
        <section className={styles.container}>
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
        <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols="30" rows="8"></textarea>
          </div>
          <div style={{
            display: "flex" ,
            justifyContent: "end"
          }
          }>
          <Button text="Submit"/>
          </div>
        </form>
        <div>
            {name+" "+email+" "+text+" "};
          </div>
        </div>
        
        <div className="styles.contact_img">
            <img src="/images/Service.svg" alt="Contact Image" />
        </div>
        
        </section>
    )
}

export default form;