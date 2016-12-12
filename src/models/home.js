/*
* @Author: lushijie
* @Date:   2016-12-10 11:17:53
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-12 14:01:35
*/
import Reflux from 'reflux';
// import request from 'common/request';

export const HomeActions = Reflux.createActions([
  'getMenu',
  'test'
]);

export const HomeStore = Reflux.createStore({
  listenables: [HomeActions],
  onGetMenu() {
    this.trigger('onGetMenuSuccess', { errno: 0, data: 'onGetMenuSuccess' });
    this.trigger('onGetMenuFailed', { errno: -1, data: 'onGetMenuFailed' });
  },
  onTest() {
    this.trigger('onTestSuccess', { errno: 0, data: 'onTestSuccess' });
    this.trigger('onTestFailed', { errno: -1, data: 'onTestFailed' });
  }
})
