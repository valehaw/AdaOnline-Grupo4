// import React from 'react'

// import "./Button.css"

// const Button = ({children, text, adrian, className, type }) => {

//     return (
//         <button type={type} className={`button ${className}`} data-ref={adrian}>
//             {children}
//         </button>
//     )

// }

// export { Button }

import React from 'react'
import "./Button.css"

const Button = ({children, adrian, className, type }) => {

    return (
        <button type={type} className={`button ${className}`} data-ref={adrian}>
            {children}
        </button>
    )

}

export { Button }