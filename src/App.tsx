import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker, { colorPickerChangeResult } from './components/ColorPicker';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h3>fav-color-picker-react</h3>
				<a className='App-link' href='https://github.com/developergovindgupta/fav-color-picker-react' target='_blank' rel='noopener noreferrer'>
					view source
				</a>
			</header>
			<br />
			<ColorPicker
				color='red'
				width={300}
				height={150}
				onChange={(e: colorPickerChangeResult) => {
					// console.log(e);
					document.body.style.backgroundColor = e.color.hsla;
				}}
				favourites={['red', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'pink', 'white', 'silver', 'gray', 'maroon', 'black']}
			/>
		</div>
	);
}

export default App;
