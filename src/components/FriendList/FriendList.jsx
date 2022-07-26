import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends = [] }) => {
    return (
        <ul className="friend-list">
            {friends.map((el) => {
                return <FriendListItem
                    key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}              
                />
            })}
        </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    key: PropTypes.number,
}

export default FriendList;