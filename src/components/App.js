import data from '../data';
import './App.css';
import FriendList from './friendList/FriendList';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={data.user.name}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <Statistics title="Upload stats" stats={data.staticalData} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </>
  );
}

export default App;
