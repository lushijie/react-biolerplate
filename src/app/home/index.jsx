import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router'
import Notification from 'react-notification-system'
import {BaseComponent, Alert, Rodal} from 'components'
import {HomeActions, HomeStore} from 'models'

//autobind 依赖babel-plugin-transform-decorators-legacy
@autobind
export default withRouter(class extends BaseComponent {
  // constructor会默认附加
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  // 在调试时相当有用
  static displayName = 'app-home'

  // props属性校验
  static propTypes = {

  }

  // defaultProps
  static defaultProps = {

  }

  // initialState
  state = {
    //_notification: null

  }


  componentWillMount() {
    //只绑定onTestListener1Success事件
    this.listen(HomeStore, 'onTestListener1', function(data, type) {
      console.log(type, data);
    });

    //只绑定onTestListener1Failed事件
    // this.listen(HomeStore, 'onTestListener1', true ,function(data, type) {
    //   console.log(type, data);
    // });

    //绑定onTestListener1Success事件与默认的onTestListener1Failed事件
    // this.listen(HomeStore, 'onTestListener1', function(data, type) {
    //   console.log(type, data);
    // }, true);

    //绑定onTestListener1Success事件与自定义的onTestListener1Failed事件
    // this.listen(HomeStore, 'onTestListener1', function(data, type) {
    //   console.log(type, data);
    // }, function(data) {
    //   console.log('自定义错误处理', data);
    // });

    //绑定onTestListener1Success与onTestListener2Success事件
    // this.listen(HomeStore, 'onTestListener1 onTestListener2', function(data, type) {
    //   console.log(type, data);
    // });

    //绑定onTestListener1Success与onTestListener2Success事件
    //默认的onTestListener1Failed与onTestListener2Failed
    // this.listen(HomeStore, 'onTestListener1 onTestListener2', function(data, type) {
    //   console.log(type, data);
    // }, true);

    //绑定onTestListener1Success与onTestListener2Success事件,
    //自定义的onTestListener1Failed与onTestListener2Failed
    // this.listen(HomeStore, 'onTestListener1 onTestListener2', function(data, type) {
    //   console.log(type, data);
    // }, function(data) {
    //   console.log('自定义错误处理', data);
    // });

    //接口请求测试
    // this.listen(HomeStore, 'onTestRequest', function(data, type) {
    //   console.log(type, data);
    // }, function(data) {
    //   console.log('自定义错误处理', data);
    // });

    HomeActions.testListener1();
    HomeActions.testListener2();
    // HomeActions.testRequest({
    //   str: '   123',
    //   obj: {
    //     a: 'a    ',
    //     b: 'b'
    //   }
    // });
  }

  componentDidMount() {
    console.log('withRouter props:', this.props);
    this._notification = this._notificationRef;
  }

  componentWillReceiveProps(nextProps) {
    //todo
  }

  shouldComponentUpdate(nextProps, nextState) {
    //todo
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    //todo
  }

  componentDidUpdate(prevProps, prevState) {
    //todo
  }

  componentWillUnmount() {
    //todo
    this.unsubscribe();
  }

  handleTestNotification(evt) {
    console.log(evt.target);
    this._notification.addNotification({
      message: 'Notification message',
      level: 'success',
      position: 'tc',
      autoDismiss: 500,
    });
  }

  handleShowRodal() {
    this.setState({rodalVisible: true});
  }

  handleHideRodal() {
    this.setState({rodalVisible: false});
  }

  handleTestRouterJump() {
    this.props.router.pushState({arg:123},'/inbox');
  }
  handleShowAlert() {
    Alert.info('Test message 2');
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>This is Home page!</h3>
        <button onClick={(evt) => this.handleTestNotification(evt)}>Notification测试</button>
        <button onClick={() => this.handleTestRouterJump()}>路由跳转测试</button>
        <button onClick={() => this.handleShowRodal()}>Rodal测试</button>
        <button onClick={() => this.handleShowAlert()}>Alert测试</button>

        <Notification ref={(c) => this._notificationRef = c}/>

        <Rodal visible={this.state.rodalVisible}
            onClose={() => this.handleHideRodal()}
        >
          <div>Content</div>
        </Rodal>


      </div>
    )
  }
})
