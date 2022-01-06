import React, { useState, useEffect } from 'react';
import Data from './Data';
import { FaBeer, FaImdb } from 'react-icons/fa';
import Main from './Filter'

function ApiTesting() {

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(Data);
  const [test,setTest]=useState('')
  console.log(test);

  const [showButton, setShowButton] = useState(false);
  function Main(props){
    setData(props.row)
}

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  const excludeColumns = ["Title", "Rating"];

  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };
  
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(Data);
    else {
      const filteredData = Data.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  return (
    <>
      <div className="App">
        <div className='input'>
          <div className="search-container">
            <input type="text" name="search" placeholder="Search Movie here." class="search-input" value={searchText}
              onChange={e => handleChange(e.target.value)} />
            <a href="#" class="search-btn"><i class="fas fa-search"></i>
            </a>
          </div>
          </div>
          
        <div className="box-container">
          {data.map((value, i) => {
           
            const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, imdbRating } = value;
            
            return (
              <>
             
                <div key={i} className="box" style={{ backgroundColor: 'dark' }} onClick={()=>{
                  alert(Title);
                }} >
                  <b></b><img src={Poster} alt="Img not found 😛" />

                  <br />
                  <b>Title: </b>{Title}<br />
                  <b>Year: </b>{Year}<br />
                  <b>Rated: </b>{Rated}<br />
                  <b>Released: </b>{Released}<br />
                  <FaImdb /><br />
                  IMDb: <b>{imdbRating}</b>

                </div>

              </>)
          })
          
          }
          <div className="clearboth"></div>
          {data.length === 0 && <span>😥No records found 😥 !</span>}
        </div>
      </div>
      {/* <Main filter_data={data}/> */}
    </>);
}

export default ApiTesting;
