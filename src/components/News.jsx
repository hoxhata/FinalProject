import { useEffect, useState } from "react"
import "../styles/News.css"


function News() {

  // const [isLoading, setIsLoading] = useState(true);  // kur eshte duke marr te dhenat ne API

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const jsonData = await response.json();
        setData(jsonData);

        // setIsLoading(false);  // kur eshte duke marr te dhenat ne API

      } catch (error) {
        console.error('Error fetching data:', error);

        // setIsLoading(false);  // kur eshte duke marr te dhenat ne API

      }
    };
    fetchData();
  }, []);

  

  const itemsPerRow = 2;
  const rows = [];
  for (let i = 0; i < data.length; i += itemsPerRow) {
    rows.push(data.slice(i, i + itemsPerRow));
  }




  return (
    <>
        <div className="news-container">
      <h2 className="news-title">Latest News</h2>
      {rows.map((row, index) => (
        <ul className="news-list" key={index}>
          {row.map(item => (
            <li className="news-item" key={item.id}>
              <img className="news-image" src={item.url} alt={item.title} />
              <p className="news-caption">{item.title}</p>
            </li>
          ))}
        </ul>
      ))}
    </div>
       
      
    
    </>
  )
  }



export default News