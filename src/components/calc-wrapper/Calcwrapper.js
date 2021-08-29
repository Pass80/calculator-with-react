import React, {useState} from 'react'
import Button from '../button/Button'
import Input from '../input/Input';
import './Calcwrapper.css';

 



 function Calcwrapper() {

	const [display, setDisplayValue] = useState(""
   );

	return (
		<div className="calc-wrapper">
			<Input onScreen={display} />
			<Button addValue={setDisplayValue} />
			
		</div>
	)
}

export default Calcwrapper;
