import style from '../styles/Search/style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className="container flex justify-center flex-col py-10">
            <h4 className="text-center text-2xl lg:text-6xl font-black md:text-4xl dark:text-gray-100">Advice and answer from our team</h4> 
            <p className="text-center text-sm py-5 lg:text-2xl md:text-lg dark:text-gray-100"> Get account assistance,technical support,or help with any other issues.</p>
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
