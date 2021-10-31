import Button from '../components/button';

export default function Manager(props) {
	let manager_name = 'Joe';
	var employees = [{ Joe: 'Link to Joe' }, { James: 'Link to James' }];

	let call_function = (e, url) => {
		console.log('calling', url);
	};

	return (
		<>
			<h1 className="group relative w-5/6 place-self-center pt-12 text-5xl font-medium text-blue mx-8">
				Welcome {manager_name}!
			</h1>
			<p className="group relative w-5/6 place-self-center pt-6 text-lg font-medium text-blue mx-8">
				Manager
			</p>
			<p className="group relative w-5/6 mb-8 place-self-center pt-6 text-lg font-medium text-blue mx-8">
				Here's how your team is doing
			</p>

			{employees.map((employee) => (
				<div className="my-2">
					<Button
						name={Object.keys(employee)}
						function={(e) => call_function(e, employee[Object.keys(employee)])}
					/>
				</div>
			))}

			{/* {Object.keys.map((employee_name) => (
				<>
					<div className="my-2">
						<Button name="James" function={call_function} />
					</div>
				</>
			))} */}
		</>
	);
}
