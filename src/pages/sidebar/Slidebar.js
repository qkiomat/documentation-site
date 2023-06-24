import './Slidebar.css'
import materials from '../../data/materials.json'

function Slidebar(){
    return(
        <div className='Slidebar'>
            <nav>
                <ul>
                    {materials.map((item, idx)=>
                        <li key={idx}>
                            <a href={item.href}>{item.title}</a>    
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Slidebar;