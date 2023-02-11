import '../../hojas de estilo/vistaprevia-noticia.css';

import { Link } from 'react-router-dom';

const VistaPreviaNoticia = ({ articulo, index }) => {
  return (
    <Link to={`/inicio/${index}`}>
      <div className='vistaPreviaNoticia'>
        <div className='imagenDeFondo'>
          <img src={articulo.urlToImage} alt='' />
        </div>
        <div className='descripcion'>
          <div className='categoria'>{articulo.source.name}</div>
          <div className='title'>{articulo.title}</div>
          <div className='autor'>
            <span>{articulo.author}</span>
            <span>{articulo.publishedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VistaPreviaNoticia;
