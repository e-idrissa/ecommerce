"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { noHeaderFooterUrls } from '../../../constants'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({header}: {header: Header}) => {

  const pathname = usePathname()

  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50}/>
        </Link>

        <HeaderNav header={header}/>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
