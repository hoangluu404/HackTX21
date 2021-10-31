import Title from "../../components/title";
import Link from "next/link";

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
			<Link href="/call">
				<a className="button" name="Call Again" function={call_function}>Call Again</a>
			</Link>
		</>
	);
}
