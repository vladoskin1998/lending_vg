import { useRef, useEffect, useState } from "react"
import { BottomLine } from "../../../svg/bottomLine";
import { ColaborationVideo } from "./colaborationVideo";
import { ColaborationPhoto } from "./colaborationPhoto";

const Collaboration = ({ scrollToBottom }: { scrollToBottom: () => void }) => {

    const ref = useRef<HTMLDivElement>(null)
    const [w, setW] = useState(500)

    useEffect(() => {
        if (ref?.current?.offsetWidth !== undefined) {
            setW(2.9 * (ref?.current?.offsetWidth / 8))
        }

        console.log("width", ref?.current?.offsetWidth);
    }, []);

    return (<div className="collaboration" id="Collaboration">
        <div className="collaboration__area1 about__born-image">
            <h4 className="title__links">Collaboration</h4>
            <h3 className="collaboration__area1-subtitle">Open for</h3>
            <div className="collaboration__area1-interesting" ref={ref}>
                <div>i</div>
                <div>n</div>
                <div>t</div>
                <div>e</div>
                <div>r</div>
                <div>e</div>
                <div>s</div>
                <div>t
                    <h3 className="collaboration__area1-subtitle collaboration__area1-bottitle">offers, photo sessions, </h3>
                </div>
            </div>
            <h5 className="collaboration__area1-foottitle">For all questions of cooperation, please follow the
                <button className="collaboration__area1-foottitle_contacts" onClick={scrollToBottom}>Contacts <BottomLine /></button>
            </h5>
            <ColaborationPhoto />
            <ColaborationVideo />
        </div>
        <div className="collaboration__area2">
            <div className="collaboration__area2-interesting" style={{ width: `${w}px` }}>
                <div>i
                    <h3 className="collaboration__area1-subtitle collaboration__area2-bottitle">and video filming! </h3>
                </div>
                <div>n</div>
                <div>g</div>
            </div>
            <h5 className="collaboration__area2-videotitle">
                Also open for cooperation with brands of clothing, shoes, jewelry, etc.
            </h5>
            <ColaborationVideo />
        </div>
    </div>)
}

export default Collaboration