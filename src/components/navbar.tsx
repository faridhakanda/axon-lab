import React from 'react'
import Mobile from './mobile'
import Desktop from './desktop'

const Header = () => {
  return (
    <div className="block sm:-mt-6 md:-mt-6">
        <div className="sm:invisible md:invisible lg:visible xl:visible 2xl:visible">
            <Desktop />
        </div>
        <div className="sm:-mt-8 md:-mt-8">
            <Mobile />
        </div>
    </div>
  )
}

export default Header