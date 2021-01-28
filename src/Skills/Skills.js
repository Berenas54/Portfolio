import s from './skills.module.css';
import sCon from './../common/styles/container.module.css'
import Skill from "./Skill/Skill";
import BigTitle from "../common/components/BigTitle";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sCon.container} ${s.skillsContainer}`}>
                <BigTitle bgTitle={"resume"} fWorld={"my "} sWorld={"skills"}/>
                <div className={s.skills}>
                    <Skill title={"JS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aspernatur assumenda cum dolorem doloribus eaque, inventore ipsam laborum libero magnam neque obcaecati quam ratione similique sint vero! Illo, iste?"}/>
                    <Skill title={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aspernatur assumenda cum dolorem doloribus eaque, inventore ipsam laborum libero magnam neque obcaecati quam ratione similique sint vero! Illo, iste?"}/>
                    <Skill title={"HTML"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aspernatur assumenda cum dolorem doloribus eaque, inventore ipsam laborum libero magnam neque obcaecati quam ratione similique sint vero! Illo, iste?"}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
