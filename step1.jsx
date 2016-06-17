import React, {Component} from 'react';
import {render} from 'react-dom';
import Welcome from './app.jsx';
import './index.scss';

//-----------------------------------------------------------------------------------------
//...props
//
// var props = { foo: 'foo1', foo2: 'foo2'};
// render(<Welcome {...props} foo="override" />, document.getElementById('app'));



//-----------------------------------------------------------------------------------------
//dangerouslySetInnerHTML
//
// render(<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />, document.getElementById('app2'));


//-----------------------------------------------------------------------------------------
//map
//
// var names = ['Alice', 'Emily', 'Kate'];
// render(
// 	<div>{
// 	    names.map(function (name, index) {
// 	      return <div key={index}>Hello, {name}!</div>
// 	    })
// 	  }
// 	</div>, 
// 	document.getElementById('app2')
// );

//-----------------------------------------------------------------------------------------
//this.props.children
//
// var HelloMessage = React.createClass({
//   render: function() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// });
// render(<HelloMessage name="lushijie"/>, document.getElementById('app2'));


//-----------------------------------------------------------------------------------------
//this.props.children 与 React.Children.map
//
// var NotesList = React.createClass({
//   render: function() {
//     return (
//       <ol>
//       {
//         React.Children.map(this.props.children, function (child) {
//           return <li>{child}</li>;
//         })
//       }
//       </ol>
//     );
//   }
// });
// render(
//   <NotesList>
//     <span>hello</span>
//     <span>world</span>
//   </NotesList>,
//   document.getElementById('app2')
// );
// 
// 
// 
//-----------------------------------------------------------------------------------------
//propTypes 与 getDefaultProps
//
// var MyTitle = React.createClass({
//   getDefaultProps : function () {
// 		return {
// 		    title : 'Hello World'
// 		};
// 	},
//   propTypes: {
//     title: React.PropTypes.string.isRequired,
//   },
//   render: function() {
//      return <h1> {this.props.title} </h1>;
//    }
// });

// render(
//   <MyTitle title="lushijie" />,
//   document.getElementById('app2')
// );
// 

//-----------------------------------------------------------------------------------------
//handleClick 与 getInitialState
//
// var LikeButton = React.createClass({
//   getInitialState: function() {
//     return {liked: false};
//   },
//   handleClick: function(event) {
//     this.setState({liked: !this.state.liked});
//   },
//   render: function() {
//     var text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <p onClick={this.handleClick}>
//         You {text} this. Click to toggle.
//       </p>
//     );
//   }
// });

// render(
//   <LikeButton />,
//   document.getElementById('app2')
// );

//---------------------------------------------------------------------------------------
//ref从组件获取真实 DOM 的节点
//
// var MyComponent = React.createClass({
//   handleClick: function() {
//     this.refs.myTextInput.focus();
//   },
//   render: function() {
//     return (
//       <div>
//         <input type="text" ref="myTextInput" />
//         <input type="button" value="Focus the text input" onClick={this.handleClick} />
//       </div>
//     );
//   }
// });

// render(
//   <MyComponent />,
//   document.getElementById('app2')
// );
// 


//---------------------------------------------------------------------------------------
//event.target.value
//
// var Input = React.createClass({
//   getInitialState: function() {
//     return {value: 'Hello!'};
//   },
//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },
//   render: function () {
//     var value = this.state.value;
//     return (
//       <div>
//         <input type="text" value={value} onChange={this.handleChange} />
//         <p>{value}</p>
//       </div>
//     );
//   }
// });

// render(<Input/>,document.getElementById('app2'));





//---------------------------------------------------------------------------------------
//组件生命周期
//
// var Hello = React.createClass({
//   getInitialState: function () {
//   	return null;
//   },
//   componentWillMount: function(){
//   	console.log('componentWillMount',arguments);
//   },
//   componentDidMount: function(){
//   	console.log('componentDidMount',arguments);
//   },
//   componentWillUpdate: function(){
//   	console.log('componentWillUpdate',arguments);
//   },
//   componentDidUpdate: function(){
//   	console.log('componentDidUpdate',arguments);
//   },
//   componentWillUnmount: function(){
//   	console.log('componentWillUnmount',arguments);
//   },
//   componentWillReceiveProps: function(){
//   	console.log('componentWillReceiveProps',arguments);
//   },
//   shouldComponentUpdate: function(){
//   	console.log('shouldComponentUpdate',arguments);
//   },
//   render: function () {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// });

// render(
//   <Hello name="world"/>,
//   document.getElementById('app2')
// );
// 

//---------------------------------------------------------------------------------------
//继承component


// class LikeButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   handleClick(e) {
//     this.setState({ liked: !this.state.liked });
//   }

//   render() {
//     const text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <p onClick={this.handleClick.bind(this)}>
//           You {text} this. Click to toggle.
//       </p>
//     );
//   }
// }

// render(
//     <LikeButton />,
//     document.getElementById('app2')
// );
// 
// 
// 
// 
//---------------------------------------------------------------------------------------
//组合组件

// const ProfilePic = (props) => {
//   return (
//     <img src={'http://graph.facebook.com/' + props.username + '/picture'} />
//   );
// }

// const ProfileLink = (props) => {
//   return (
//     <a href={'http://www.facebook.com/' + props.username}>
//       {props.username}
//     </a>
//   );
// }

// const Avatar = (props) => {
//   return (
//     <div>
//       <ProfilePic username={props.username} />
//       <ProfileLink username={props.username} />
//     </div>
//   );
// }

// render(
//   <Avatar username="pwh" />,
//   document.getElementById('app2')
// );
// 
// 

//---------------------------------------------------------------------------------------
//父子组件间通信
// class GroceryList extends Component {
//   handleClick(i) {
//     console.log('You clicked: ' + this.props.items[i]);
//   }
//   render() {
//     return (
//       <div>
//         {this.props.items.map((item, i) => {
//           return (
//             <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// render(
//   <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, document.getElementById('app2')
// );
// 

//---------------------------------------------------------------------------------------
//ES6
// export default class TabNumer extends Component {
// 	//stage-0
//     static defaultProps = {
//         subTitle: 'Result'
//     }

//     //stage-0
//     // static propTypes = {
//     //     autoPlay: React.PropTypes.bool.isRequired,
//     //     maxLoops: React.PropTypes.number.isRequired,
//     //     posterFrameSrc: React.PropTypes.string.isRequired,
//     //     videoSrc: React.PropTypes.string.isRequired,
//     // };  // 注意这里有分号

//     //stage-0
//     state = {
//         num: 10
//     }

//     //同state={}
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //        num : 0
//     //     };
//     // }
// 	componentWillMount() {
// 		console.info('componentWillMount');
// 	}
// 	componentDidMount() {
// 		console.info('componentDidMount');
// 	}
// 	handleAddNum() {
// 		this.setState({num: ++this.state.num});
// 	}
// 	handleMinusNum() {
// 		this.setState({num: --this.state.num});
// 	}
// 	render (){
// 		return (
// 			<div className="am">
// 				<input type="button" value="增加" onClick={e => this.handleAddNum(e)}/>
// 				<span>{this.props.subTitle}</span>
// 				<span>{this.state.num}</span>
// 				<input type="button" value="减少" onClick={e => this.handleMinusNum(e)} />
// 			</div>
// 		);
// 	};
// }
// render(
// 	<TabNumer />,
// 	document.getElementById('app2')
// );