/*
* @Author: lushijie
* @Date:   2016-12-10 11:17:53
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-15 12:06:01
*/
import Reflux from 'reflux';
import request from 'common/request';


export const HomeActions = Reflux.createActions([
  'getMenu',
  'test',
  'testQuest'
]);

// export const HomeActions = Reflux.createActions({
//   'getMenu': {},
//   'test': {},
//   'testQuest': {
//     preEmit: function() {
//       console.log('this is preEmit');
//     }
//   }
// });

export const HomeStore = Reflux.createStore({
  listenables: [HomeActions],
  onGetMenu() {
   this.trigger('onGetMenuSuccess', {errno: 0, data: 'onGetMenuSuccess'});
   this.trigger('onGetMenuFailed',  {errno: -1, data: 'onGetMenuFailed'});
  },
  onTestQuest({...arg}) {
    request({
      // url: 'http://127.0.0.1:3000/posts',
      url: '/test/profile',
      method: 'get',
      data: arg
    }).then(
      resp => this.trigger('onTestQuestSuccess', resp),
      resp => this.trigger('onTestQuestFailed', resp)
    );
  },
  onTest() {
    this.trigger('onTestSuccess', { errno: 0, data: 'onTestSuccess' });
    this.trigger('onTestFailed', { errno: -1, data: 'onTestFailed' });
  }
})
