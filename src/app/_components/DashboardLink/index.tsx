'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import classes from './index.module.scss'
import Image from 'next/image'

export const DashboardLink: React.FC<{
  className?: string
}> = props => {
  const { className } = props

  return (
    <Link className={[classes.dashboardLink, className].filter(Boolean).join(' ')} href="/admin">
      <Fragment>
        <Image
          src='assets/icons/dashboard.svg'
          alt='dashboard'
          width={28}
          height={28}
        />
      </Fragment>
    </Link>
  )
}
