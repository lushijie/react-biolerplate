import { configure, setAddon } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

setOptions({
  // name: 'README addon',
  // url: 'https://www.sohu.com',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});


function loadStories() {
  require('../src/components/stories');
}

configure(loadStories, module);
