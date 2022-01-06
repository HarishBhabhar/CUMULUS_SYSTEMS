import React from "react";
import Data from "./Data";
import Main from './ApiTesting'

  function strip(Title) {
    return Title.replace(/^(a|an|the)\s/i, "");
  }

 export default class Appx extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Data: Data,
        value: "Sort"
      };
      
    }
   
    handleChange = (e) => {
      this.setState({ value: e.target.value })  
    //   console.log(this.state.value)
    }
  
    handleSubmit = (e) => {
      const { value, Data } = this.state;
    
      switch (value) {
        case "Low imdbRating":
          this.setState({
            Data: Data.sort((a, b) => (a.imdbRating > b.imdbRating ? 1 : -1))
          });
          break;
        case "High imdbRating":
          this.setState({
            Data: Data.sort((a, b) => (b.imdbRating > a.imdbRating ? 1 : -1))
          });
          break;
        case "A-Z":
          this.setState({
            Data: Data.sort(
              (a, b) => (strip(a.Title) > strip(b.Title) ? 1 : -1)
            )
          });
          break;
        case "Z-A":
          this.setState({
            Data: Data.sort(
              (a, b) => (strip(b.Title) > strip(a.Title) ? 1 : -1)
            )
          });
          break;
          case "Year":
          this.setState({
            Data: Data.sort(
              (a, b) => (strip(b.Year) > strip(a.Year) ? 1 : -1)
            )
          });
          break;
        default:
          this.setState({
            Data: Data
          })
          break;
        
      }
      
      e.preventDefault();
    }
  
    render() {
      
      const { Data,value } = this.state;
      return (

        <div>
            
          <form onSubmit={this.handleSubmit}>
            <select id="imdbRating-filter" value={value} onChange={this.handleChange}>
              <option value="Sort">Sort</option>
              <option value="Low imdbRating">Low imdbRating</option>
              <option value="High imdbRating">High imdbRating</option>
              <option value="A-Z"> Sort By Title A-Z</option>
              <option value="Z-A"> Sort By Title Z-A</option>
              <option value="Year"> Sort By Year</option>
            </select>
            <input type="submit" value="Filter" className="btn" />
          </form>

         <Main row={Data}/>
        </div>
      );
    }
  }
  
//   class Movietemplate extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       const { Genre, imdbRating, Poster } = this.props.movie;
//       return (
//         <figure>
//           <img src={Poster} />
//           <figcaption>
//             {/* <p>{Genre.join(' ')}</p> */}
//             <div className="imdbRating">
//               <i className="fa fa-heart" />
//               <h4>{imdbRating}</h4>
//             </div>
//           </figcaption>
//         </figure>
//       );
//     }
//   }
  
  