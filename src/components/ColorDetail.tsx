import React from 'react';
import { colorObject } from 'string-color-converter';

const ColorDetail = (props: { color: colorObject | undefined }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Property</th>
					<th>Description &lt; ColorObject &gt;</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>.name</td>
					<td style={{ backgroundColor: props.color?.rgb, textShadow: '1px 1px white', fontWeight: 'bold' }}>{props.color?.name}</td>
				</tr>
				<tr>
					<td>.rgb</td>
					<td>{props.color?.rgb}</td>
				</tr>
				<tr>
					<td>.rgba</td>
					<td>{props.color?.rgba}</td>
				</tr>
				<tr>
					<td>.hex</td>
					<td>{props.color?.hex}</td>
				</tr>
				<tr>
					<td>.hexa</td>
					<td>{props.color?.hexa}</td>
				</tr>
				<tr>
					<td>.hsl</td>
					<td>{props.color?.hsl}</td>
				</tr>
				<tr>
					<td>.hsla</td>
					<td>{props.color?.hsla}</td>
				</tr>
				<tr>
					<td>.r</td>
					<td>{props.color?.r}</td>
				</tr>
				<tr>
					<td>.g</td>
					<td>{props.color?.g}</td>
				</tr>
				<tr>
					<td>.b</td>
					<td>{props.color?.b}</td>
				</tr>
				<tr>
					<td>.a</td>
					<td>{props.color?.a}</td>
				</tr>
				<tr>
					<td>.h</td>
					<td>{props.color?.h}</td>
				</tr>
				<tr>
					<td>.s</td>
					<td>{props.color?.s}</td>
				</tr>
				<tr>
					<td>.l</td>
					<td>{props.color?.l}</td>
				</tr>
				<tr>
					<td>.str</td>
					<td>{props.color?.str}</td>
				</tr>
				<tr>
					<td>.isValid</td>
					<td>{props.color?.isValid}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ColorDetail;
