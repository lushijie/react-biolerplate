/*
* @Author: lushijie
* @Date:   2017-02-07 14:21:36
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-09 16:14:33
*/
import React from 'react';
import autobind from 'autobind-decorator';
import withReadme from 'storybook-readme/with-readme';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import Button from './index';
import ButtonREADME from './README.md';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

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

stories
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
  .add('with knobs', () => (
    <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>
  ))
