import s from './work.module.css';


function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.picture}>
                <button>Look</button>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Work;
