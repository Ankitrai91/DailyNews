import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export default class News extends Component {


static defaultProps = {
  country:'in',
  pageSize:'9',
  category: 'general'
}
static propTypes = { 
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
  


  constructor(){
    super()
    console.log("hello i m a constructor")

    this.state = {
      articles:[],
      loading:false,
      page:1
    }
  }



 async componentDidMount(){
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55ac16791c6d4b03a4155654413b4dfd&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
       totalResults:parsedData.totalResults,
      loading:false

      })
  }



  handeleNext=async()=>{
    console.log("clicked next")
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55ac16791c6d4b03a4155654413b4dfd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
    })
}
  }





  handelePrev=async()=>{
    console.log("clicked prev")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=55ac16791c6d4b03a4155654413b4dfd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false

    })
  }




  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center my-4 '>NewsFunk- Top-Headlines</h1>
        {this.state.loading &&<Spinner/>}
           <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
      return   <div className="col-md-4 " key={element.url}>
      <NewsItem  title={element.title? element.title:""} description ={element.description? element.description:""} Imageurl ={element.urlToImage} newsUrl={element.url}/>
      </div>
        })}
        <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelePrev}  > &larr; Previous</button>
    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/15)} type="button" className="btn btn-dark"onClick={this.handeleNext} >Next &rarr;</button>
</div>
        </div>
        
      </div>
    )
  }
}
