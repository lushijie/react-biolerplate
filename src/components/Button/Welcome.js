/*
* @Author: lushijie
* @Date:   2017-02-07 14:24:51
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-07 15:44:33
*/
import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  note: {
    opacity: 0.5,
  }
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to STORYBOOK</h1>
        <p>
          This is a UI component dev environment for your app.
        </p>
        <p>
          Link to <a style={styles.link} href='#' onClick={this.showApp.bind(this)}>Button</a>.
        </p>
        <p style={styles.note}>
          <b>NOTE:</b>
          <br/>
          Have a look at the <code style={styles.code}>.storybook/webpack.config.js</code> to add webpack
          loaders and plugins you are using in this project.
        </p>
      </div>
    );
  }
}
