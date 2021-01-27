import s from './Contacts.module.scss';
import sCon from "./../common/styles/container.module.css"


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sCon.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div>
                    <form className={s.form} action={"#!"}>
                        <input placeholder={"Name"}/>
                        <input placeholder={"E-mail"}/>
                        <textarea placeholder={"Your messages"}></textarea>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
