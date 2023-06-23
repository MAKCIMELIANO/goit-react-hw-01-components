import { Profile } from '../Profile/Profile';
import user from '../../data/user.json';
import stats from '../../data/data.json';
import friends from '../../data/friends.json';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="upload stats" stats={stats} />
      <FriendList friends={friends} />
    </div>
  );
};
