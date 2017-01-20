/*
* @Author: lushijie
* @Date:   2016-12-10 11:17:53
* @Last Modified by:   lushijie
* @Last Modified time: 2016-12-17 12:52:34
* Actions: https://github.com/reflux/refluxjs/tree/master/docs/actions
*/
import Reflux from 'reflux';
import request from 'common/request';

export const HomeActions = Reflux.createActions([
  'testListener1',
  'testListener2',
  'testRequest'
]);

export const HomeStore = Reflux.createStore({
  listenables: [HomeActions],
  onTestListener1() {
    this.trigger('onTestListener1Success', {errno: 0, data: 'onTestListener1Success'});
    this.trigger('onTestListener1Failed',  {errno: -1, data: 'onTestListener1Failed'});
  },

  onTestListener2() {
    this.trigger('onTestListener2Success', {errno: 0, data: 'onTestListener2Success'});
    this.trigger('onTestListener2Failed',  {errno: -1, data: 'onTestListener2Failed'});
  },

  onTestRequest({...arg}) {
    request({
      url: '/test/profile',
      method: 'get',
      data: arg
    }).then(
      resp => this.trigger('onTestRequestSuccess', resp),
      resp => this.trigger('onTestRequestFailed', resp)
    );
  }
})
