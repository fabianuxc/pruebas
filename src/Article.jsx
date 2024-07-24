import './Article.css'
import { Articles } from './Articles'
export function Article({elements, title, description}) {
    return(
        <>
        <section className="box">
            <img src='http://unavatar.io/paco' />
           <div><h1 className='ita'> { title }</h1>
           
           <div className='description'>{ description }</div>
           </div>
        </section>
        
        </>
    )
}