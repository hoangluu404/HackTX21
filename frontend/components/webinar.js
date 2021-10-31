import React, { useRef, useEffect, useState } from "react";
import DailyIframe from "@daily-co/daily-js";
import { useRouter } from "next/router";

const CALL_OPTIONS = {
    iframeStyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999999,
        margin: 0,
        width: "100%",
        height: "100%"
    },
    showLeaveButton: true,
    showFullscreenButton: true,
    //   showLocalVideo: false,
    //   showParticipantsBar: false,
};

const DEFAULT_HEIGHT = 400;

const WebinarCall = ({ handler }) => {
    const videoRef = useRef(null);
    const router = useRouter();

    const [height, setHeight] = useState(DEFAULT_HEIGHT);
    const [callframe, setCallframe] = useState(null);

    useEffect(() => {
        if (!videoRef || !videoRef?.current || callframe) return;
        // CALL_OPTIONS.url = "https://[DOMAIN].daily.co/[ROOM-NAME]";
        CALL_OPTIONS.url = "https://kustomer.daily.co/Hoang-Manager";

        const newCallframe = DailyIframe.createFrame(
            videoRef.current,
            CALL_OPTIONS
        );

        newCallframe.on("left-meeting", () => {
            newCallframe.leave().then(handler)
        })

        newCallframe.join().then(() => {
            // setHeight((videoRef?.current?.clientWidth || 500) * 0.75);
            setCallframe(newCallframe);
        });
    }, [videoRef]);

    return (
        <div className="flex-1 relative z-0" ref={videoRef}>
        </div>
    );
};

export default WebinarCall;