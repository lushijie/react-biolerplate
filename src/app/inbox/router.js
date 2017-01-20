/*
* @Author: lushijie
* @Date:   2016-09-28 17:36:51
* @Last Modified by:   lushijie
* @Last Modified time: 2017-01-20 15:19:15
*/
export default [
  {
    //绝对路径：/messages/id为绝对路径 最终url是 ip:5050/messages/id
    path: '/messages/:id',
    component: require('app/inbox/message').default,
    onEnter: function () {
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

