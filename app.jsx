import React from 'react';
class Welcome extends React.Component {
   render() {
      return (
         <div>
         	{/*child comment, put {} around */}
            Hello World!!!<br />
            {this.props.foo} <br/>
         </div>
      );//123
   }
}
export default Welcome;