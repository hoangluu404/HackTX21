import Webinar from "../components/webinar";
import { useRouter } from "next/router";

function Overlay() {
    return (
        <div className="absolute z-30">😄</div>
    )
}

export default function Call() {
    const { query } = useRouter();

    return (
        <>
            {query.manager ? <Overlay /> : <></>}
            <div class="absolute z-10">
                <Webinar />
            </div>
        </>
    );
}