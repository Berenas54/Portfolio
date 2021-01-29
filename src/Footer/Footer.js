import s from './footer.module.css';
import sCon from "./../common/styles/container.module.css"


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sCon.container} ${s.footerContainer}`}>
                {/*<div>*/}
                {/*    <ul className={s.ulContainer}>*/}
                {/*        <li><a href={"#!"}>Facebook</a></li>*/}
                {/*        <li><a href={"#!"}>LinkedIn</a></li>*/}
                {/*        <li><a href={"#!"}>GitHub</a></li>*/}
                {/*        <li><a href={"#!"}>Telegram</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <p className={s.rights}>All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
