import Title from "../../../components/title";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Thanks() {
    const { query } = useRouter();
    const { person } = query;
    return (
        <>
            <Title title={`Thanks, ${person}!`} description="You did great!" />
            <div className="flex-1 flex flex-col justify-center">
                <img src="/img/Isometric Stickers Smile.png" />
            </div>
            <Link href={`/support/${person}`}>
                <a className="button mb-0 mt-8">Go Back</a>
            </Link>
        </>
    )
}