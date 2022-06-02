import React, { Component } from 'react'

export class NewsItem extends Component {



  constructor(){
    super()
    console.log("hello i m a constructor")
  }
  render() {
      let  {title,description,Imageurl,newsUrl} = this.props;
    return (
      <div >
       <div className="card my-4 mx-4">
  <img src={Imageurl?Imageurl:'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/ogvp482g5sdf6ljt_1654081090.jpeg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel='noreferrer' href={newsUrl} target="_blank"  className="btn btn-dark">Read More</a>
  </div>
</div>

      </div>
      
    )
  }
}

export default NewsItem
