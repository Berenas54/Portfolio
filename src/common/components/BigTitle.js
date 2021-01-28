import s from  "../components/title.module.css"
import tit from "../styles/colorTitle.module.css";

function BigTitle(props) {
    return (
        <>
            <section className={s.title_section}>
                <h2 className={tit.end_title}><span className={tit.white_start}>{props.fWorld}</span>{props.sWorld}</h2>
                <span className={s.title_bg}>{props.bgTitle}</span>
            </section>
        </>)
}

export default BigTitle