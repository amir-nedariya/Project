import Netflixseries from "./components/Netflixseries";
// import "./components/Netflix.css" ;
import "./components/Netflix.module.css";



export const App = () =>{
//   return ( [<Netflixseries key="1"/> , <Netflixseries key="2"/> ]
   
    return(
      <section className="container">
        <h1 className="card-heading">List of Best Netflix Series</h1>
        <br />
        <br />
     <Netflixseries/>
     </section>
  );
};


export default App

