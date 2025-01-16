import languages from "../data/languages"

const Main = () => {
    return (

        <div className="container">
            <div className="sezioneBtn text-center">
                {languages.map((linguaggi) => {
                    return (
                        <button className="mx-5 p-2 rounded-3" key={linguaggi.id} >{linguaggi.title}</button>
                    )
                })}
            </div>
            <div className="container sezioneTesto">
                <h2 className="p-3">w</h2>
                <p className="p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur vel ipsum optio laboriosam deserunt, fugiat deleniti? Aut sit culpa cum ea fugiat, sed placeat libero earum recusandae repudiandae voluptatem.</p>

            </div>
        </div>
    )
}

export default Main