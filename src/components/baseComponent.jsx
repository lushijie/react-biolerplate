import React from 'react';

class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.listeners = [];
  }

  commonSuccessCB(data, type) {
    console.log('Default Success:', type, data);
  }

  commonFailedCB(data, type) {
    console.log('Default Failed:', type, data);
  }

  unsubscribe() {
    this.listeners.forEach(function (fn) {
      fn();
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
          } else if(scb === true) {
            this.commonSuccessCB(data, respType);
          }
        } else if(respType === ftype) {
          if(typeof fcb === 'function') {
            fcb(data, respType);
          } else if(fcb === true) {
            this.commonFailedCB(data, respType);
          }
        }
      });

      // record listeners for unsubscribe
      if(this.listeners.indexOf(listener) == -1) {
        this.listeners.push(listener);
      }

    });
  }
}

export {BaseComponent};
export default BaseComponent;
