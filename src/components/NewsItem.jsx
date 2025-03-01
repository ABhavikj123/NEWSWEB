import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsItem = (props) => {
  const { title, description, imageurl, newsurl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card" style={{ height: '100%' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={imageurl || '../image.png'}
          className="card-img-top"
          alt="News"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5
            className="card-title text-truncate"
            style={{
              maxHeight: '3rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              flexGrow: 1,
              maxHeight: '4.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </p>
          <p
            className="card-text text-truncate"
            style={{
              maxHeight: '1.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <small className="text-muted">
              {author || 'Unknown'} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
