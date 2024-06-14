import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem ({ friend:{ avatar, name, isOnline } }) {
    const statusClasses = clsx(css.status, isOnline ? css.online : css.offline);
    return (
        <div className={css.container}>
            <img
        src={avatar}
        alt="User avatar"
        height="150"
        width="150"
      />
            <ul className={css.list}>
    <li className={css.name}>{name}</li>
    <li className={statusClasses}>{isOnline === true ? "Online" : "Offline"}</li>
    
</ul>
        </div>

    )
}