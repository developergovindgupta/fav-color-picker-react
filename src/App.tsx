import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker, { colorPickerChangeResult, ColorObject } from './components/ColorPicker';
import ColorDetail from './components/ColorDetail';
import { colorObject } from 'string-color-converter';

function App() {
	const [selectedColor, setSelectedColor] = useState<colorObject>();
	const [changeType, setChangeType] = useState('');
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
			<div style={{ display: 'inline-flex', margin: 'auto', flexWrap: 'wrap', backgroundColor: 'white' }}>
				<div style={{ padding: '20px', margin: 'auto' }}>
					<ColorPicker
						color='white'
						width={300}
						height={150}
						onChange={(e: colorPickerChangeResult) => {
							setSelectedColor(e.color);
							setChangeType(e.type);
						}}
						favourites={['red', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'pink', 'white', 'silver', 'gray', 'maroon', 'black']}
					/>
				</div>
				<div style={{ padding: '20px', margin: 'auto' }}>
					<h2 style={{ margin: 'auto' }}>Event Type:{changeType}</h2>
					<ColorDetail color={selectedColor} />
				</div>
				<div style={{ padding: '20px', margin: 'auto' }}>
					<ColorPicker
						color={selectedColor?.rgba}
						onChange={(e: colorPickerChangeResult) => {
							document.body.style.backgroundColor = e.color.rgba;
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
