import Title from "../../components/title";
import Link from "next/link";

export default function Customer() {
	let call_function = () => {
		console.log('calling');
	};
	return (
		<>
			<Title title="We Can Solve Your Problems" description="Call us and we'll solve your issues snippity-snap!" />
			<div className="my-auto">
				<img className="px-8 w-auto" src="/img/Isometric Stickers Brainstorming.png" />
			</div>
			<Link href="/call">
				<a className="button">Call Now</a>
			</Link>
		</>
	);
}
