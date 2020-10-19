import React from 'react'
import "./SearchResult.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,

}) {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="search-heart" />

            <div className="searchResult-info">
                <div className="searchResult-top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>________</p>
                    <p>{description}</p>
                    <div className="info-bottom">
                        <div className="stars">
                            <StarIcon className="icon-star" />
                            <p>
                            <strong>{star}</strong>
                            </p>
                        </div>
                        <div className="price">
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
