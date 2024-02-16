import React from 'react'


const Navbar = () => {
    const allLinks = [
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'AboutMe',
            url: '/about'
        },
        {
            id: 3,
            title: 'Contact',
            url: '/contact'
        }
    ];
  return (
    <div className="flex justify-around bg-slate-300 p-3 text-slate-950">
        <div>
            <h1>AxonLab</h1>
        </div>
        <div className="flex gap-3">
            {
                allLinks.map((alllink) => {
                    return (
                        <h1 key={alllink.id}>{alllink.title}</h1>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Navbar