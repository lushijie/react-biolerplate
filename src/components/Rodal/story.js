/*
* @Author: lushijie
* @Date:   2017-02-07 14:21:36
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-07 14:26:51
*/
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
// import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import Button from './Button';
import ButtonREADME from './README.md';
import Welcome from './Welcome';

// const stories = storiesOf('Storybook Knobs', module);
// stories.addDecorator(withKnobs);


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));


storiesOf('Button', module)
  .addDecorator(withReadme(ButtonREADME))
  .add('with readme', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
