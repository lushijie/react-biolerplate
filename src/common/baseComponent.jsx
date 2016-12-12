import React from 'react';

class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  listen(store, type, callback, failedCallBack){
    type = type.split(' ');
    store.listen((respType, data) => {
      let stype = respType;

      //可能failedCallBack存在的情况下的调用
      if(respType.indexOf('Failed') > -1) {
        stype = respType.slice(0, respType.indexOf('Failed')) + 'Success';
      }

      if( type.indexOf(respType) > -1 || type.indexOf(stype) > -1) {
        type.forEach(t => {
          if(respType === t) {
            callback(data, t);
          }
          if(t.indexOf('Success') > -1) {
            let ftype = t.slice(0, t.indexOf('Success')) + 'Failed';
            if(typeof failedCallBack === 'function') {
              this.listen(store, ftype, failedCallBack);
            }else {
              this.listen(store, ftype, function() {
                console.log('通用错误处理');
              });
            }
          }
        });
      }
    });
  }
}

export {BaseComponent};
export default BaseComponent;
