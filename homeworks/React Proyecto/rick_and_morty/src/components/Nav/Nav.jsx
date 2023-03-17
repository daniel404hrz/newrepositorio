import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import search from './SearchBar/SearchBar.module.css'
class Nav extends React.Component{
  render() {
    return (
      <div className={search.caja_fixed}>

       <Link className={search.Link} to='/home'>Home</Link>
        <Link className={search.Link} to='/about'>About</Link>
        <Link className={search.Link} to='/favorites'>Favorites</Link>

        <SearchBar onSearch={this.props.onSearch} />
     
      </div>
    );
  }
}

export default Nav;
