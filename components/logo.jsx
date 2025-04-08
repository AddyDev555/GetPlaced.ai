import React from 'react'
import Image from 'next/image'

export default function LogoGrid({ LogoSrc }) {
    return (
        <Image
            src={LogoSrc}
            alt="Description of the image"
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
        />
    )
}
