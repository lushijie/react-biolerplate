/*
* @Author: lushijie
* @Date:   2016-09-29 15:06:27
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-29 15:06:52
*/

export default function(cb, module) {
  return require.ensure([], (require) => {
    cb(null, module)
  });
}
