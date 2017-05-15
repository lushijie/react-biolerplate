// import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'Component Doc',
  url: 'https://github.com/lushijie/',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true
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

