import Webinar from "../components/webinar";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const emotionArray = [
    1, 1, 1, 2, 3, 4, 4, 5, 5, 5
]

const EMOTIONS = {
    1: "😡",
    2: "️🙁",
    3: "🥱",
    4: "😑",
    5: "😄",
}

function Overlay({ rank }) {
    return (
        <div className="absolute z-30 text-4xl right-8 mt-20 bg-white p-1 rounded-full">{EMOTIONS[rank]}</div>
    )
}

export default function Call() {
    const router = useRouter();
    const { query } = router;
    const [pos, setPos] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPos(pos + 1)
            if (pos >= emotionArray.length - 1) {
                setPos(0)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [pos])

    return (
        <>
            {query.support ? <Overlay rank={emotionArray[pos]} /> : <></>}
            <Webinar handler={() => {
                if (query.support)
                    router.push(`/support/${query.support}/thanks`)
                else
                    router.push('/customer/thanks')
            }} />
        </>
    );
}