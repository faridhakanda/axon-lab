'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHeader, setIsHeader] = useState(false);

    const close = () => {
        setIsHeader(!isHeader);
        setIsOpen(false);
    }
    const navigationlink = [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'Contact',
            url: '/contact'
        },
        {
            id: 3,
            title: 'AboutUs',
            url: '/about'
        },
        {
            id: 4,
            title: 'Product',
            url: '/product'
        },
        {
            id: 5,
            title: 'Service',
            url: '/service'
        }
    ];
  return (
    <div className="">
        <div className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden p-3 w-full bg-slate-100 text-slate-950 shadow-xl justify-between">
            <div className="pl-4">
                <Link onClick={close} href="/">AxonLab</Link>
            </div>
            <div className="pr-4" onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? <Image src="/menu.png" alt="hamburger" width="32" height="32" /> : <Image src="/cross.png" alt="cross" width="32" height="32" />}
            </div>
        </div>
        <div>
            {isOpen && (
                <div className={`bg-slate-100 text-slate-950 w-48 h-56 sm:visible md:visible lg:invisible xl:invisible 2xl:invisible space-y-2 p-4 float-right ${!isOpen ? "opacity-0" : "opacity-100"}`}>
                {
                    navigationlink.map((navlist) => {
                        return (
                            <Link onClick={() => setIsOpen(!isOpen)} className="block" key={navlist.id} href={navlist.url}>{navlist.title}</Link>
                        )
                    })
                }
            </div>
            )}
        </div>
        
    </div>
    
  )
}

export default Mobile;