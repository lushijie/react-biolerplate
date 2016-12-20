import React from 'react';

class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.listeners = [];
  }

  commonFailedCB(data, type) {
    console.log('默认错误', type, data);
  }

  // 取消监听
  unsubscribe() {
    this.listeners.forEach(function (ele) {
      ele();
    })
  }

  listen(store, type, scb, fcb){
    var self = this;
    type = type.split(' ');
    type.forEach(t => {
      let stype = t + 'Success',
          ftype = t + 'Failed';

      var listener = store.listen((respType, data) => {
        if(respType === stype) {
          if(typeof scb === 'function') {
            scb(data, respType);
          }
          return;
        }
        if(respType === ftype) {
          if(typeof fcb === 'function') {
            fcb(data, respType);
            return;
          }
          if(fcb === true) {
            this.commonFailedCB(data, respType);
          }
        }
      });

      if(this.listeners.indexOf(listener) == -1) {
        this.listeners.push(listener);
      }

    });
  }
}

export {BaseComponent};
export default BaseComponent;
