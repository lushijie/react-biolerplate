/*
* @Author: lushijie
* @Date:   2017-02-07 17:44:03
* @Last Modified by:   lushijie
* @Last Modified time: 2017-02-07 17:45:05
*/
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
// import autobind from 'autobind-decorator';

import README from './README.md';
import Welcome from './index';

storiesOf('Welcome', module)
  .addDecorator(withReadme(README))
  .add('link to button', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
