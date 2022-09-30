import React from "react";

const NewsItem =(props)=> {
  // constructor() {
  //   super();
  //   console.log("hello i m a constructor");
  // }
    let { title, description, Imageurl, newsUrl, author, date,source } = props;
    return (
      <div>
        <div className="card my-4 mx-4 ">
          <img style={{height: '180px', width: '100%', display: 'block'}}
            src={
              Imageurl
                ? Imageurl
                : "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ogvp482g5sdf6ljt_1654081090.jpeg"
            }
            className="card-img-top mh-2" 
            alt="..."
          />
          <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
            <h5 className="card-title">
              {title}
              
            </h5>

            <p className="card-text">{description}</p>
            <p className="card-text text-danger">
              
              <small>
                By {author ? author : "unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
