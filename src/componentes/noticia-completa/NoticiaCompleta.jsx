import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NoticiaCompleta = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const API_KEY = 'f7c7be445787401ab815378dd443d132';
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://newsapi.org/v2/everything?q=peru&from=2023-02-10&sortBy=popularity&apiKey=${API_KEY}`
      );
      const data = await result.json();
      console.log('articulos', data.articles);
      setNews(data.articles);
    };

    fetchData();
  }, []);

  return (
    <div>
      {news.length !== 0 ? (
        <div className='noticia-completa'>
          <div className='titulo'>{news[id].title}</div>
          <div className='imagen'>
            <img src={news[id].urlToImage} alt='' />
          </div>
          <div className='contenido'>
            <p>
              {news[id].content}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, placeat nam. Dolores quas quam praesentium? Reiciendis
              error architecto animi maiores non at ducimus, commodi dolor
              reprehenderit perspiciatis nesciunt, unde illo!
            </p>
          </div>
          <div className='noticia-completa'>
            <span>para mayor informacion visite la url</span>
            <Link to={news[id].url}>{news[id].url}</Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default NoticiaCompleta;
