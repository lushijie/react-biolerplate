import React, {Component} from 'react';
import {render} from 'react-dom';
import {withRouter} from 'react-router';

export default withRouter(class extends Component {
  static displayName = 'app-home';

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {

  }

  componentWillMount() {

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
