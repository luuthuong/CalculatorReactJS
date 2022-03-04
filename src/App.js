import {useState,useEffect,useRef} from 'react'

function App() {

	const [cal, setCal] = useState('');
	const [rs, setRs] = useState('');
	let calRef=useRef('0');
	// useEffect(() => {
	// 	// console.log('Current:',cal);
	// }, [cal])
	const op = ['+', '-', '*', '/'];

	const calcOperator = (value) => {
		if (
			op.includes(value) && cal === '' || op.includes(value) && op.includes(cal.slice(-1))
		) {
			return;
		}
		setCal(cal + value);
		!op.includes(value) && setRs(eval((cal + value)).toString())
	}
	const equalCalc=()=>{
		setCal(eval(cal).toString());
		setRs('')
	}
	const deleteCalc = () => {
		if (cal !== '') {
			let newCal = cal.slice(0, -1);
			setCal(newCal);
			if (!op.includes(cal.slice(-2, -1))) {
				setRs(newCal);
			}
		}
	}
	const clearCal = () => {
		setCal('');
		setRs('');
	}
	
	const createditgits = () => {
		const dg = [];
		for (let i = 1; i < 10; i++) {
			dg.push(
				<button
						key={i}
						onClick={()=>calcOperator(i.toString())}
						>{i}</button>
			)
		}
		const [a,b,c]=[dg.slice(0,3),dg.slice(3,6),dg.slice(6)];
		dg.splice(0,dg.length,c,b,a);
		return dg;
	}


	return (
		<>
		<h1>CALCULATOR</h1>
		<div className="calculator">
			<div className="display">
				{rs?<span>{rs}</span>:''}{cal||'0'}
			</div>
			<div className="button">
				<div className="operator">
					<button onClick={()=>calcOperator('+')}> + </button>
					<button onClick={()=>calcOperator('-')}> - </button>
					<button onClick={()=>calcOperator('*')}> * </button>
					<button onClick={()=>calcOperator('/')}> / </button>
					<button onClick={()=>clearCal()}> C </button>
					<button onClick={()=>deleteCalc()}> DEL </button>

				</div>
				<div className="ditgits">
					{createditgits()}
					<button onClick={()=>calcOperator('.')}> . </button>
					<button onClick={()=>calcOperator('0')}>  0 </button>
					<button onClick={equalCalc}> = </button>
				</div>
			</div>
		</div>
		</>
		
	);
}
export default App;
