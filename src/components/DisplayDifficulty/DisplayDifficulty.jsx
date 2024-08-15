import styleModule from './style.module.css';

function DisplayDifficulty(props) {
    return (
        <div className={styleModule.container}>
            Difficulty Set to : {props.difficulty}
        </div>
    )
}

export default DisplayDifficulty
