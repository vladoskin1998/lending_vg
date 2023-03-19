import { HeaderList } from "../header/headerList"

const textList = [
    "Performing Artist in Mad Apple by Cirque Du Soleil in Las Vegas.",
    "Participant Festival Mondial du Cirque de Demain in Paris in 2020.",
    "La Merce-Mac Festival in Barcelona, Spain in 2020.",
    "Inshi. New circus in Kiev, Ukraine in 2021.",
    "Flic Flac-The Modern Art of Circus in Dortmund, Germany in 2021-2022.",
    "TV show “SuperIntuition” in Kiev, Ukraine.",
]

export const About = () => {
    return (
        <div className="about about__born-image">
            <h4 className="title__links">About</h4>
            <div className="about__vg">
                <video
                    poster={"./images/about-video-poster.png"}
                    className="about__vg-video"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="about__vg-title">
                    <h3>Veronika</h3>
                    <h3>Goroshkova</h3>
                </div>
            </div>
            <div className="about__born">
                <div className="about__born-1 about__born-image"></div>
                <div className="about__born-2 about__born-image"></div>
                <div className="about__born-3 about__born-image"></div>
                <div className="about__born-4 about__born-image">
                    <div className="about__born-4_main">
                        <h4>05.05.1999</h4>
                        <h4>Born in Mariupol, Ukraine</h4>
                        <h4>
                            Professional circus artist specialised in Aerial
                            pole
                        </h4>
                    </div>
                    <div className="about__born-4_submain">
                        <p>
                            Veronika started training in 2015. A graduate of
                            Kiev Municipal Academy of Variety and Circus Arts.
                        </p>
                        <p>
                            Veronika Goroshkova was selected to perform on the
                            prestigious Festival Mondial du Cirque de Demain in
                            Paris in 2020.
                        </p>
                        <p>
                            Currently Performing in Mad Apple by Cirque Du
                            Soleil in Las Vegas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__expirience">
                <div className="about__expirience-1 about__born-image">
                    <h4 className="title__links">Experience</h4>
                    <HeaderList textList={textList} />
                </div>
                <div className="about__expirience-2 about__born-image"></div>
                <div className="about__expirience-3 about__born-image"></div>
                <div className="about__expirience-4 about__born-image"></div>
            </div>
        </div>
    )
}
