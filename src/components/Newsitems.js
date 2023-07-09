import React from "react";

export  default function  Newsitems(props) {
    // let { newsTitle, discraption, imgurl, moreAboutnews } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.imgurl} className="card-img-top" alt="this is a img" />
          <div className="card-body">
            <h5 className="card-title">{props.newsTitle}</h5>
            <p className="card-text">{props.discraption}</p>
            <a
              href={props.moreAboutnews}
              target="Blank"
              className="btn btn-sn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }


