import ChatList from "./chat-List/ChatList"
import "./list.css"
import Userinfo from "./user-Info/Userinfo"

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
    </div>
  )
}

export default List