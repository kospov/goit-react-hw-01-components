
const FriendListItem = ({ avatar, name, id}) => {
    return (
        <li className="item" key={id}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

export default FriendListItem;