import React, { useEffect } from "react"
import styles from "@/styles/Loading.module.css";
import { useLayoutEffect, useRef } from 'react';
import { gsap, Power4, Linear, Power2, Expo } from "gsap";
import Image from "next/image";


export default function Loading() {

    return (

        <div className={styles.fullpage}>
            
                <img src="/images/assets/loader.gif" width={250}/>

        </div>
    )
}