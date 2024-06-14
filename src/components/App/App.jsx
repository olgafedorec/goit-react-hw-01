import userData from "../../userData.json";
import friendsData from "../../friendsData.json";
import transactionData from "../../transactionData.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import css from "./App.module.css";

export default function App() {
    return (
      <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    <FriendList friends={friendsData}/>
    <TransactionHistory transactions={transactionData}/>
    </div>
    );
  }