import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class Fetch extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		fetch('https://yvone.github.io/DAW/some-numbers.json').then((response)=>{
			return response.json()
		}).then((data)=>{
			console.log(data);
			let pares = data.filter(function(elem){
				return (elem%2)===0;
			});
			console.log(pares);
		});
	}

	render(){
		return(
			<button onClick={this.handleClick}>Data</button>
		);
	}
}

ReactDOM.render(
	<Fetch />,
	document.getElementById('root')
);