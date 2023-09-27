'use client'


import Image from 'next/image'
import styles from './page.module.css'

import LocomotiveScroll from 'locomotive-scroll'

import Landing from '@/Components/Landing'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <div className={styles.main}>
      <Landing />
      <div className={styles.page2}></div>
    </div>

  )
}
