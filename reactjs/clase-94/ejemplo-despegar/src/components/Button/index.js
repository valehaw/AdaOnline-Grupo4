import React from 'react'

import "./button.css"

const Button = ({icon, text, variant, className}) => {
    return (
        <button className={`btn btn-${variant} ${className}`}> 
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </button>
    )
} 

export { Button }