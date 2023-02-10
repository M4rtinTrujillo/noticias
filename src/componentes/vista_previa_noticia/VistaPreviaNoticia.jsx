import '../../hojas de estilo/vistaprevia-noticia.css'


const VistaPreviaNoticia = (props) => {
  return (

<div className='vistaPreviaNoticia'>
        <div className='imagenDeFondo'>
          <img src={props.articulo.urlToImage} alt='' />
        </div>
        <div className='descripcion'>
          <div className='categoria'>
          {props.articulo.source.name}
          </div>
          <div className='title'>{props.articulo.title}</div>
          <div className='autor'>
            <span>{props.articulo.author}</span>
            <span>{props.articulo.publishedAt}</span>
          </div>
        </div>
      </div>



  );
};
export default VistaPreviaNoticia;
