import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News =(props)=> {

const [articles,setArticles] = useState([])
const [loading,setLoading] = useState(true)
const [page,setPage] = useState(1)
const [totalResults,setTotalResults] = useState(0)

// 
  
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



const updateNews =async ()=>{
  // console.log("cdm")
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=205e3b8e783341c3be93b92d32dc6ec2&page=${props.page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  let parsedData = await data.json()

  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false)
 
}

useEffect(()=>{
document.title = `${capitalizeFirstLetter(props.category)}-NewsFunk`;

  updateNews()
},[])



 const fetchMoreData =async ()=>{
   









   
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=205e3b8e783341c3be93b92d32dc6ec2&page=${page+1}&
   setPage(page+1)
      pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
  
  }



    return (
      <div className='container my-5'>
        <h1 className='text-center my-4 ' style={{margin:'35px 0px'}}>NewsFunk- Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading &&<Spinner/>} 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          // hasMore={true}
          loader={<Spinner/>}
        >
         
<div className="container">

           <div className="row">
        {     articles.map((element)=>{
          return   <div className="col-md-4 " key={element.url}>
      <NewsItem  title={element.title? element.title:""} description ={element.description? element.description:""} Imageurl ={element.urlToImage} newsUrl={element.url} author ={element.author} date = {element.publishedAt} source={element.source.name}/>
      </div>
        })}
</div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelePrev}  > &larr; Previous</button>
    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/15)} type="button" className="btn btn-dark"onClick={this.handeleNext} >Next &rarr;</button>
</div> */}
        </div>
        
        
        )
        
      }
      News.defaultProps = {
        country:'in',
        pageSize:'9',
        category: 'general',
        // author: 'unknown'
      }
      News.propTypes = { 
        country: PropTypes.string.isRequired,
        pageSize: PropTypes.number,
        category: PropTypes.string
        
      }
    export default News