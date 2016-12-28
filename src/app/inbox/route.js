/*
* @Author: lushijie
* @Date:   2016-09-28 17:36:51
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-28 19:19:02
*/
// 如果动态加载，不能再手动import，否则动态加载失败！
// import Inbox from 'app/inbox';
// import InboxHome from 'app/inbox/home';

export default [
  {
    //绝对路径：/messages/id为绝对路径 最终url是 ip:5050/messages/id
    path: '/messages/:id',
    //component: Message,
    getComponent: (nextState, cb) => {
      require.ensure([], () => {
        cb(null, require('app/inbox/message').default)
      }, 'inbox_message');
    },
    onEnter: function (nextState, replaceState) {
      console.log('Come from Message Redirect');
    }
  },
  {
    //相对路径：messages/id为相对路径 最终url是 ip:5050/inbox/messages/id
    //路由匹配规则
    //messages/:id 匹配 messages/123
    //messages(/:id) 匹配 messages 和 messages/123
    path: 'messages/:id',

    onEnter: function (nextState, replaceState) {
      //onEnter hook会从最外层的父路由开始直到最下层子路由结束
      console.log('Message onEnter');
      //将相对路径重定向到绝对路径
      replaceState(null, '/messages/' + nextState.params.id);
    },
    onLeave: function() {
      //onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束
    }
  }
]

