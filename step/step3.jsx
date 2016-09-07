import React, {Component} from 'react';
import {render} from 'react-dom';
import Welcome from './app.jsx';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router';
import './index.scss';

class App extends Component {
	render(){
		return (
			<div>
		        <h1>App</h1>
		        <ul>
		        	<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
		          	<li><Link to="/about" activeClassName="active">About</Link></li>
		         	 <li><Link to="/inbox" activeClassName="active">Inbox</Link></li>
		         	 <li><Link to="/inbox/messages/123" activeClassName="active">Message</Link></li>
		        </ul>
		        {this.props.children}
		      </div>
		)
	}
}

class Dashboard extends Component {
  render() {
    return <div>Welcome to the app!</div>
  }
}

class About extends Component {
	render() {
		return (
			<div>
				<h2>About</h2>
				{this.props.children || "Welcome to your About"}
			</div>
		)
	}
}

class Inbox extends Component {
	render() {
		return (
			<div>
			  	<h2>Inbox</h2>
			 	{this.props.children || "Welcome to your Inbox"}
			</div>
		)
	}
}

class Message extends Component {
	componentDidMount() {
		console.info(this.props.params.id);
	  	console.info(this.props.location.query);
	}
	render() {
		return (
			<h3>Message {this.props.params.id}</h3>
		)
	}
}

class NotFound extends Component {
	render () {
		return (
			<div> 404 NotFound</div>
		)
	}
}


// 路由实现方式1
// render(
// 	(
// 		<Router>
// 			<Route path="/" component={App}>
// 				<IndexRoute component={Dashboard} />
// 			    <Route path="about" component={About} />
// 			    <Route path="inbox" component={Inbox}>
// 		     	  {/* 使用 /messages/:id 替换 messages/:id */}
//                {/* <Route path="/messages/:id" component={Message} /> */}
// 			      {/* 跳转 /inbox/messages/:id 到 /messages/:id 来兼容旧的url */}
//                {/*<Redirect from="messages/:id" to="/messages/:id" /> */}
// 			      <Route path="messages/:id" component={Message} />

// 			    </Route>
// 			</Route>
// 		</Router>
// 	),document.getElementById('app2')
// );


// 路由实现方式2
// const routeConfig = [
//   { path: '/',
//     component: App,
//     indexRoute: { component: Dashboard },
//     childRoutes: [
//       { path: 'about', component: About },
//       { path: 'inbox',
//         component: Inbox,
//         childRoutes: [
//           {
//           	path: 'messages/:id', component: Message
//           }
//         ]
//       }
//     ]
//   }
// ]

//路由3，URL路径修改
const routeConfig = [
	{
		path: '/',
	    component: App,
	    indexRoute: { component: Dashboard },
	    childRoutes: [
	      { path: 'about', component: About },
	      { path: 'inbox',
	        component: Inbox,
	        childRoutes: [
	          { path: '/messages/:id', component: Message },
	          { path: 'messages/:id',
	            onEnter: function (nextState, replace) {
	               replace('/messages/' + nextState.params.id)//路由替换
	            },//onEnter hook会从最外层的父路由开始直到最下层子路由结束
	            onLeave: function () {
	            }//onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束
	          }
	        ]
	      }
	    ]
	},
	{
	  path: '*',
	  component: NotFound,
	}
]


render(<Router history={browserHistory} routes={routeConfig} />, document.getElementById('app2'))

