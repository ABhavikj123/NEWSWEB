import React from 'react'

const SearchNewsItem=(props)=> {
    let { title, description, imageurl, newsurl, author, date,source} = props;
    return (
      <div container="my-3">
        <div className="card">
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
          <span className=" badge rounded-pill bg-danger">
              {source}
            </span></div>
          <img src={!imageurl ? "../download.png" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">{!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default SearchNewsItem