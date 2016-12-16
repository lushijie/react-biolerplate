import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'components/baseComponent';
import {render} from 'react-dom';
import {withRouter} from 'react-router';
import {HomeActions, HomeStore} from 'models/home';
import Notification from 'react-notification-system';

//autobind 依赖babel-plugin-transform-decorators-legacy
@autobind
export default withRouter(class extends BaseComponent {

  static displayName = 'app-home';

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    //_notification: null
  }

  componentWillMount() {

    //只绑定onGetMenuSuccess事件
    // this.listen(HomeStore, 'onGetMenu', function(data, type) {
    //   console.log(type, data);
    // });

    //只绑定onGetMenuFailed事件
    // this.listen(HomeStore, 'onGetMenu', true ,function(data, type) {
    //   console.log(type, data);
    // });

    //绑定onGetMenuSuccess事件
    //默认的onGetMenuFailed事件
    // this.listen(HomeStore, 'onGetMenu', function(data, type) {
    //   console.log(type, data);
    // }, true);

    //绑定onGetMenuSuccess事件
    //自定义的onGetMenuFailed事件
    // this.listen(HomeStore, 'onGetMenu', function(data, type) {
    //   console.log(type, data);
    // }, function(data) {
    //   console.log('自定义错误处理', data);
    // });

    //绑定onTestSuccess与onGetMenuSuccess事件
    // this.listen(HomeStore, 'onTest onGetMenu', function(data, type) {
    //   console.log(type, data);
    // });


    //绑定onTestSuccess与onGetMenuSuccess事件
    //默认的onTestFailed与onGetMenuFailed
    // this.listen(HomeStore, 'onTest onGetMenu', function(data, type) {
    //   console.log(type, data);
    // }, true);


    //绑定onTestSuccess与onGetMenuSuccess事件,
    //自定义的onTestFailed与onGetMenuFailed
    this.listen(HomeStore, 'onTest onGetMenu', function(data, type) {
      console.log(type, data);
    }, function(data) {
      console.log('自定义错误处理', data);
    });

    this.listen(HomeStore, 'onTestQuest', function(data, type) {
      console.log('data', data);
      console.log('type', type);
    }, function(data) {
      console.log('自定义错误处理', data);
    });

    HomeActions.getMenu();
    HomeActions.testQuest({
      test: '   123',
      objtest: {
        a: 'a    ',
        b: 'b'
      }
    });
    HomeActions.test();
  }

  componentDidMount() {
    console.log('withRouter props:', this.props);
    //this.props.router.pushState({test:123},'/inbox');
    this._notification = this._notificationRef;
  }

  test() {
    this._notification.addNotification({
      message: 'Notification message',
      level: 'success',
      position: 'tc',
      autoDismiss: 500,
    });
  }

  render() {
    return (
      <div>
        <Notification ref={(c) => this._notificationRef = c}/>
        <h2>Home</h2>
        <h3>This is Home page!</h3>
        <button onClick={() => this.test()}>Notification测试</button>
      </div>
    )
  }
})
