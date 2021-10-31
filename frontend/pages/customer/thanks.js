import Image from '../../components/image';
import Title from "../../components/title";

export default function Customer() {
	let call_function = () => {
		console.log('calling');
	};
	return (
		<>
			<Title title="Thanks for Calling!" description="If you need more help, feel free to call again!" />
			<div className="my-auto">
				<img className="w-full lg:hidden" src="/img/Happy Bunch Color.png" />
			</div>
			<button className="button" name="Call Again" function={call_function}>Call Again</button>
		</>
	);
}
