import languages from "../data/languages"
import { useState } from "react"

const Main = () => {

    const [lang, setLang] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [activeButton, setActiveButton] = useState(null)

    return (

        <div className="container">
            <div className="sezioneBtn text-center">
                {languages.map((linguaggi, index) => {
                    return (
                        <button onClick={() => { setLang(index); setIsActive(true); setActiveButton(index) }} className={`mx-5 p-2 rounded-3 ${activeButton === index ? "bg-info text-white" : ""}`} key={linguaggi.id} >{linguaggi.title}</button>

                    )
                })}
            </div>
            <div className="container sezioneTesto">
                <h2 className="p-3"> {isActive ? languages[lang].title : "Linguaggio non selezionato"}</h2>
                <p className="p-3">{isActive ? languages[lang].description : "Seleziona un linguaggio"}</p>
            </div>
        </div>
    )
}

export default Main