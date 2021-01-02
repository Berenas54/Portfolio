import s from './main.module.css';
import sCon from "./../common/styles/container.module.css"


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sCon.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Gleb Gorovoy
                </h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;
