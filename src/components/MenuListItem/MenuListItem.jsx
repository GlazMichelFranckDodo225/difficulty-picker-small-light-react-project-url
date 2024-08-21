import { useState } from 'react';
import styleModule from './style.module.css';

export function MenuListItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    // console.log(isHovered);
    

    return (
        <div
            className={styleModule.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? "#a5e9ff" : "#eff0ef"
            }}
        >
            Set To : {props.difficulty}
        </div>
    )
}
