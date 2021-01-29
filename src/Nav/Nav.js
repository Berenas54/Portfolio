import s from './nav.module.css';

function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.link} href="">Главная</a>
            <a className={s.link} href="">Скиллы</a>
            <a className={s.link} href="">Проекты</a>
            <a className={s.link} href="">Контакты</a>
        </div>
    );
}

export default Nav;
