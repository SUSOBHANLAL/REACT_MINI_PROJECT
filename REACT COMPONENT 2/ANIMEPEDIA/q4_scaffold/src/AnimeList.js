import { Component } from "react";
import AnimeCard from './AnimeCard';

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const data = this.props.anime;
    return <div className="anime-list">
      {data.map((data,i)=>(
        <AnimeCard key={i} name = {data.name} image = {data.image}/>
      ))}
    </div>;
  }
}

export default AnimeList;
