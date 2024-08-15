import styleModule from './style.module.css';

function DisplayDifficulty(props) {
    return (
        <div className={styleModule.container}>
            {
                props.difficulty ? 
                `Difficulty Set to : ${props.difficulty}` : "No Difficulty Set"
            }
        </div>
    )
}

export default DisplayDifficulty
