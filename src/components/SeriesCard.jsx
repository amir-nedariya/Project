/* eslint-disable react/prop-types */
import styles from "./Netflix.module.css";
import styled from "styled-components";

const SeriesCard = ({data}) => {
    // console.log(props)
    const {id,img_url,name,rating,description,genre,cast,watch_url} = data;

    // const btn_style ={}
    // const ButtonAmir = styled.button({
    //   padding:"1.2rem 2.4rem",
    //   border:"none",
    //   fontSize:"1.6rem",
    //   backgroundColor:`${rating > 8.5 ? "#7dcea0":"#f7dc6f"}`,
    //   color:"var(--bg-color)",
    //   fontweight:"bold",
    //   cursore:"pointer",
    //   });


       // const btn_style ={}
    const ButtonAmir = styled.button`
      padding:1.2rem 2.4rem;
      border:none;
      font-Size:1.6rem;
      background-Color:${(props) =>props.rating > 8.5 ? "#7dcea0":"#f7dc6f"};
      color:var(--bg-color);
      font-weight:bold;
      cursore:pointer;
      `;


      const Rating =styled.h3`
      font-size:1.6rem;
      color:#7dcea0;
      text-transform: capitalize;
      `



    const ratingClass =rating>8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
        <div>
           <img src={img_url} 
           alt={name} 
           width="40%" 
           height="40%"
            />
        </div>
    {/* <div className={styles["card_content"]}> */}
      <div className="flex flex-col gap-6 py-6 px-6 text-cyan-300">
     <h2>Name:{name}</h2>
     <Rating>
      Rating: 
      <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
     </Rating>
     <p  className="text-3xl font-bold underline">Sumamry:{description}</p>
     <p>genre: {genre}</p>
     <p>cast:{cast}</p>
     <a href={watch_url} target="_blank">
        {/* <button style={btn_style}>watch now</button> */}
        <ButtonAmir rating={rating}>watch now</ButtonAmir>
     </a>
     </div>
    </li>
  )
}

export default SeriesCard