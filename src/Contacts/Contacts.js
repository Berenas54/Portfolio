import s from './Contacts.module.scss';
import sCon from "./../common/styles/container.module.css"
import BigTitle from "../common/components/BigTitle";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sCon.container} ${s.contactsContainer}`}>
                <BigTitle bgTitle={"contact"} fWorld={"get in"} sWorld={" touch"}/>

                <div className={s.wrapper}>

                    <div className={s.contactsWrapper}>
                        <h3 className={s.h3_text}>Don't be shy !</h3>
                        <p className={s.p}>Feel free to get in touch with me. I am always open to
                            discussing
                            new projects, creative ideas or opportunities to be part of your visions.</p>
                        <p className={s.p}>
                            <span className={s.spanText}>mail me</span>Haravoy1998@mail.ru
                        </p>
                        <p className={s.p}>
                            <span className={s.spanText}>call me</span>+375298126734
                        </p>
                    </div>


                    <div>
                        <form className={s.contactsForm} method="post">
                            <div className={s.contactsForm}>
                                <div className={s.row}>
                                    <div className={s.wrapper_input}>
                                        <input className={s.input} type="text" name="name" placeholder="YOUR NAME"/>
                                    </div>
                                    <div className={s.wrapper_input}>
                                        <input className={s.input} type="email" name="email" placeholder="YOUR EMAIL"/>
                                    </div>
                                    <div className={s.wrapper_input}>
                                        <input className={s.input} type="text" name="subject"
                                               placeholder="YOUR SUBJECT"/>
                                    </div>
                                    <div className={s.wrapper_text}>
                                        <textarea className={s.textarea} name="message"
                                                  placeholder="YOUR MESSAGE"></textarea>
                                        <button type="submit" className={s.btn}>Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contacts;
