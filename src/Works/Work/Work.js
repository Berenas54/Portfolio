import s from './work.module.css';


function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.picture}> <img className={s.image} src={props.img} alt="Social Network" />           </div>
            <div className={s.block_text}>
            <h3 className={s.title}> <a className={s.link} href="#!">{props.title}</a> </h3>
            <span className={s.description}>{props.description}</span>
                <div><button className={s.btn}>Open</button></div>
            </div>

        </div>
    );
}

export default Work;
