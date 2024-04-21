import { host } from '../../host/host'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoriesPageCard({id, title, image}) {
   return (
      <div className={s.card}>
         <Link to={`/categories/${id}`}>
            <div>
               <img src={host+image} alt={title} />
               <p> {title} </p>
            </div>
         </Link>
      </div>
      )
   }

