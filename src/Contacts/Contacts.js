import s from './Contacts.module.css';
import sCon from "./../common/styles/container.module.css"


function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sCon.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <div>
                    <form action={"#!"}>
                        <div><input placeholder={"Name"}/></div>
                        <div><input placeholder={"E-mail"}/></div>
                        <div><textarea placeholder={"Your messages"}></textarea></div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
