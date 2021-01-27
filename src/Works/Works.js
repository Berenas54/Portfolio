import s from './works.module.css';
import sCon from './../common/styles/container.module.css'
import Work from './Work/Work';
import tit from './../common/styles/colorTitle.module.css'
import socialIcon from './../assets/image/SocialIcon.jpg'
import ToDoListIcon from './../assets/image/11 Genius Ways to Turn Your Clutter Into Cash.jpg'


function Works() {

    return (
        <div className={s.worksBlock}>
            <div className={`${sCon.container} ${s.worksContainer}`}>
                <section className={s.title_section}>
                    <h2 className={tit.end_title}><span className={tit.white_start}>my</span> portfolio </h2>
                    <span className={s.title_bg}>works</span>
                </section>

                <div className={s.works}>
                    <Work title={"Social Network"} img={socialIcon}
                          description={"Lorem ipsum dolor sit amet, consectetur adipi Accusantium delectus explicabo facere ipsam minima, mollitia perferendis recusandae sed sit, voluptatem voluptatibus?"}/>
                    <Work title={"To Do List"} img={ToDoListIcon}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque excepturi iusto labore magnam magni natus nobis obcaecati, placeat saepe tempore veniam veritatis. Explicabo neque, praesentium. Itaque laborum repellendus sunt."}/>
                </div>

            </div>
        </div>
    );
}

export default Works;
