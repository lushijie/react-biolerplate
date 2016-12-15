import React from 'react';

class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  _commonFailedCB(data, type) {
    console.log('默认错误', type, data);
  }

  listen(store, type, scb, fcb){
    type = type.split(' ');
    type.forEach(t => {
      let stype = t + 'Success',
          ftype = t + 'Failed';

      store.listen((respType, data) => {
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
            this._commonFailedCB(data, respType);
          }
        }
      });
    });
  }
}

export {BaseComponent};
export default BaseComponent;
