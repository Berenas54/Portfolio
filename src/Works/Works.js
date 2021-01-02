import s from './works.module.css';
import sCon from './../common/styles/container.module.css'
import Work from "./Work/Work";


function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sCon.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.works}>
                    <Work title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum exercitationem labore laborum maiores maxime minima totam voluptates? Accusantium delectus explicabo facere ipsam minima, mollitia perferendis recusandae sed sit, voluptatem voluptatibus?"}/>
                    <Work title={"To Do List"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque excepturi iusto labore magnam magni natus nobis obcaecati, placeat saepe tempore veniam veritatis. Explicabo neque, praesentium. Itaque laborum repellendus sunt."}/>
                </div>

            </div>
        </div>
    );
}

export default Works;
