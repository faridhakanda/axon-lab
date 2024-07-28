
import React from 'react'
import Link from 'next/link'
const Desktop = () => {
    const list_of_link = [
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
        title: 'About us',
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
    <div className="bg-slate-100 text-slate-950 shadow-xl flex justify-around p-4">
        <div>
            <Link href="/">AxonLab</Link>
        </div>
        <div className="flex justify-around gap-8">
            {
                list_of_link.map((nav_list) => {
                    return (
                        <Link key={nav_list.id} href={nav_list.url}>{nav_list.title}</Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Desktop;