import React from 'react'

export const ListItem = (props) => {
    
    return(
            <li>
                <a href={props.item.link}>{props.item.text}</a>
            </li>
    )
}