import Button from '../components/button';
import Image from '../components/image';

export default function Customer() {
	let call_function = () => {
		console.log('calling');
	};
	return (
		<>
			<h1 className="group relative w-5/6 place-self-center pt-12 text-5xl font-medium text-blue mx-8">
				We Can Solve Your Problems
			</h1>
			<p className="group relative w-5/6 place-self-center pt-6 text-lg font-medium text-blue mx-8">
				Call us and we'll solve your issues snippity-snap!
			</p>
			<div className="">
				<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1200px-Open_book_nae_02.svg.png" />
			</div>
			<div className="">
				<Button name="Call Now" function={call_function} />
			</div>
		</>
	);
}
