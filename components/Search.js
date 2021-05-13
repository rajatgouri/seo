import style from '../styles/Search/style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className="container flex justify-center flex-col py-10">
            <h1 className="text-center text-2xl lg:text-6xl font-black md:text-4xl">Advice and answer from our team</h1> 
                      <i className="fas fa-clock"></i>
            <p className="text-center text-sm py-5 lg:text-2xl md:text-lg"> Get account assistance,technical support,or help with any other issues.</p>
            <div className={style.wraper}>
            <input 
            type="text"
            className={style.input}
            placeholder="Seach for answers..."
            />
            <FontAwesomeIcon icon={faSearch} className={style.icon}/>
            <button className={style.button}>Search</button>
            </div>


        </div>
    )
}

export default Search
