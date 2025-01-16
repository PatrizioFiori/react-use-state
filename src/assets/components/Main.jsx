import languages from "../data/languages"
import { useState } from "react"

const Main = () => {

    const [lang, setLang] = useState(0)
    const [color, setcolor] = useState(0)

    return (

        <div className="container">
            <div className="sezioneBtn text-center">
                {languages.map((linguaggi, index) => {
                    return (
                        <button onClick={() => { setLang(index) }} className="mx-5 p-2 rounded-3" key={linguaggi.id} >{linguaggi.title}</button>
                    )
                })}
            </div>
            <div className="container sezioneTesto">
                <h2 className="p-3">{languages[lang].title}</h2>
                <p className="p-3">{languages[lang].description}</p>

            </div>
        </div>
    )
}

export default Main