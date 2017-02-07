// import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Component',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false
});

// addDecorator((story) => (
//   <div style={{textAlign: 'center'}}>
//     {story()}
//   </div>
// ));

function loadStories() {
  require('../src/components/stories');
}

configure(loadStories, module);

