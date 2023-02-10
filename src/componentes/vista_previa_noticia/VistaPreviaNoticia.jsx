const VistaPreviaNoticia = (props) => {
  return (
    <div>
      <div className='vistaPreviaNoticia'>
        <div className='imagenDeFondo'>
          <img src={props.articulo.urlToImage} alt='' />
        </div>
        <div className='descripcion'>
          <div className='categoria'>sport</div>
          <div className='title'>{props.articulo.title}</div>
          <div className='autor'>
            <span>{props.articulo.author}</span>
            <span>{props.articulo.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VistaPreviaNoticia;
