import s from './FriendListItem.module.css'
const FriendListItem = ({ avatar, name, id}) => {
    return (
        <li className={s.item} key={id}>
            <span className={s.status}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;