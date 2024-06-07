// import React from 'react'

// const About = () => {
//   return (
//     <div className="top-10 pt-16 text-center bg-indigo-300 pb-2">
//         <div className="bg-sky-300 w-48 h-fit rounded justify-center text-center mx-auto p-2">
//             <h1>This is page for about part in my web application!</h1>
//         </div>
        
//     </div>
//   )
// }

// export default About
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <div className="text-center pb-2 pt-16 ">
        <Head>
            <title>About page for web application!</title>
        </Head>
        <div
            style={{
                fontSize: 128,
                color: 'red'
            }}
        >
            <h1>Farid About</h1>
        </div>
    </div>
  )
}

export default About