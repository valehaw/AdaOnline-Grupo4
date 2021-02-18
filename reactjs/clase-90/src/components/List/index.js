import React from 'react'
import { ListItem } from './components'

export const List = (props) => {
    
    return(
        <ul>
            {props.items.map(item => {
                return <ListItem item = {item} />
            })}  
        </ul>
    )
}