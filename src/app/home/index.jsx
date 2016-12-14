import React, {Component} from 'react';
import {BaseComponent} from 'components/baseComponent';
import {render} from 'react-dom';
import {withRouter} from 'react-router';
import {HomeActions, HomeStore} from 'models/home';

export default withRouter(class extends BaseComponent {

  static displayName = 'app-home';

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {

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
    // this.listen(HomeStore, 'onTest onGetMenu', function(data, type) {
    //   console.log(type, data);
    // }, function(data) {
    //   console.log('自定义错误处理', data);
    // });

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
    console.log(this.props);
    //this.props.router.pushState({test:123},'/inbox');
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>This is Home page!</h3>
      </div>
    )
  }
})
