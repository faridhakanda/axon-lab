import React from 'react'
import Mobile from './mobile'
import Desktop from './desktop'

const Header = () => {
  return (
    <div className="block">
        <div className="sm:hidden md:hidden lg:visible xl:visible 2xl:visible">
            <Desktop />
        </div>
        <div className="sm:visible md:visible lg:hidden xl:hidden 2xl:hidden">
            <Mobile />
        </div>
    </div>
  )
}

export default Header