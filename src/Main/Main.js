import s from './main.module.css';
import sCon from "./../common/styles/container.module.css"
import avatar from "./../assets/image/avatar_example.jpg"


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sCon.container}>
            <div className={s.text}>
                <h6 className={s.h6}>Hi There!</h6>
                <h1 className={s.h1}><span className={s.h1_span}>I'M</span> GLEB GOROVOY
                </h1>
                <p className={s.p_about}>I'm a Belarusian front‑end developer.</p>
            </div>
            <div className={s.photo}> <img className={s.avatar} src={avatar}/> </div>
            </div>
        </div>
    );
}

export default Main;
