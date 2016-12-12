import React from 'react';
// import {decorate as mixin} from 'react-mixin';
// import {ListenerMixin} from 'reflux';
// import Alert from 'common/alert';

class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.__stores = [];
    this.__listens = [];
  }
  /**
   * 获取store的位置，支持监听多个store
   * @param  {[type]} store [description]
   * @return {[type]}       [description]
   */
  // _getStoreIndex(store){
  //   let index = this.__stores.indexOf(store);
  //   if(index > -1){
  //     return index;
  //   }
  //   this.__stores.push(store);
  //   return this.__stores.length - 1;
  // }

  listen(store, type, callback){
    type = type.split(' ');
    store.listen((triggerType, data) => {
      type.forEach(function(t) {
        if(triggerType === t) {
          callback(data, t);
        }
      });
    });
    //}
    // type.split(/\s+/).forEach( t => {
    //   // 注意此处依然可以单独绑定 failed 事件，要防止failed 事件绑定两次
    //   // 所以如果要单独绑定 failed 事件(独立于Success)，要使Success的(failcb===false）
    //   this.__listens[index].push((triggerType, data) => {
    //     if(t && t === triggerType || !t){
    //       callback.bind(this)(data);
    //     }
    //   });

      // 为 "Success"(Success 结尾的事件)事件绑定 Failed 事件
      // 1.failcb === false 时，Success 不集成错误处理事件,需要按照 success 的方式单独绑定
      // 2.failcb 为空, 执行默认的错误处理
      // 3.failcb 为函数，执行 failcb 定义的错误处理
      // let ftype, isAutoBind;
      // if(t.indexOf('Success') > -1) {
      //   ftype = t.slice(0, t.indexOf('Success')) + 'Failed';
      // }
      // isAutoBind = (failcb === false) ? false : true;
      // if(isAutoBind && ftype) {
      //   this.__listens[index].push((data, triggerType) => {
      //     if(ftype && ftype === triggerType || !ftype){
      //       if(failcb) {
      //         console.warn('执行自定义的错误处理', data);
      //         failcb && failcb.bind(this)(data, triggerType);
      //       }else{
      //         console.warn('执行默认的错误处理', data);
      //         Alert.error(data);
      //       }
      //     }
      //   });
      // }
    //});
  }
}

export {BaseComponent};
export default BaseComponent;
