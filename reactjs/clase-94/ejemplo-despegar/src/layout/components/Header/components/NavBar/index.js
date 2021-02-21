import React from 'react'
import { Button } from '../../../../../components/Button'
import menu from './menu'

    
const NavBar = () => {
    return (
        <div>
            NavBar
            {menu.map(item => {
                    return <Button 
                                text={item.text} 
                                icon={item.icon} 
                                variant="vertical" 
                                className="btn-primary"
                            />;
                })
            }
           
        </div>
    )
}

export { NavBar }