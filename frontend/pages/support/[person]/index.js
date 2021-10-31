import { useRouter } from "next/router";

export default function Support() {
    const { query } = useRouter();
    const { person } = query;

    return (
        <div className="flex flex-1 flex-col">
            <h1 className="text-5xl mt-12 mx-8 capitalize">
                Welcome, {person}!
            </h1>
            <subtitle className="block mx-8 my-6">User Support</subtitle>
            <p className="mx-8 my-6">Please wait for someone to call you so you can be the best supporter ever.</p>
            <div className="flex-1 flex flex-col justify-center">
                <img className="px-8 my-6" src="/img/Isometric Stickers Pencil.png" />
            </div>
        </div>
    )
}