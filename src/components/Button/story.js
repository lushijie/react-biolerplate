/*
* @Author: lushijie
* @Date:   2017-02-07 14:21:36
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-07 17:37:30
*/
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
// import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import autobind from 'autobind-decorator';

import Button from './Button';
import ButtonREADME from './README.md';
import Welcome from './Welcome';

// const stories = storiesOf('Storybook Knobs', module);
// stories.addDecorator(withKnobs);

@autobind
class ButtonWrapper extends React.Component {
  // initialState
  state = {
    //_notification: null
  }

  handleButtonClick() {
    alert(123);
  }

  render() {
    return (
      <div className="test">
        <Button onClick={this.handleButtonClick}>1234</Button>
      </div>
    )
  }
}

storiesOf('Welcome', module)
  .add('link to button', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .addDecorator(withReadme(ButtonREADME))
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with container', () => (
    <div style={{border: '1px solid red'}}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </div>
  )).
  add('with event', () => (
    <ButtonWrapper />
  ))
