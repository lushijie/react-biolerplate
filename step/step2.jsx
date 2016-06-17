import React, {Component} from 'react';
import {render} from 'react-dom';
import Welcome from './app.jsx';
import './index.scss';


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