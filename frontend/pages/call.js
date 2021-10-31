import Webinar from "../components/webinar";
import { useRouter } from "next/router";

const EMOTIONS = {
    1: "😡",
    2: "️🙁",
    3: "🥱",
    4: "😑",
    5: "😄",
}

function Overlay({ rank }) {
    return (
        <div className="absolute z-30 text-4xl right-8 mt-20">{EMOTIONS[rank]}</div>
    )
}

export default function Call() {
    const router = useRouter();
    const { query } = router;

    return (
        <>
            {query.support ? <Overlay rank={3} /> : <></>}
            <Webinar handler={() => {
                if (query.support)
                    router.push(`/support/${query.support}/thanks`)
                else
                    router.push('/customer/thanks')
            }} />
        </>
    );
}