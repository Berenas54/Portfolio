import s from './work.module.css';


function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.picture}>
                <button>Look</button>
            </div>
            <div className={s.block_text}>
            <h3 className={s.title}> <a className={s.link} href="#!">{props.title}</a> </h3>
            <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;
