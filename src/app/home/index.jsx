import React, {Component} from 'react';
import {BaseComponent} from 'common/baseComponent';
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
    // HomeStore.listen(function(type, data) {
    //   console.log(type, data);
    // });
    this.listen(HomeStore, 'onTestSuccess', function(data) {
      console.log(data);
    });
    HomeActions.getMenu();
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
