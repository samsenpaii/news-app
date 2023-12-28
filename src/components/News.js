import React, { Component } from 'react'
import NewsItems from './NewsItems'

export  class News extends Component {

  constructor(){
    super();
    this.state={
      articles :[ ],
      loading : false,
      page : 1
    }
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ccec2138afb34d03874b4aa9e947a4ea&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults})
  }

  handelPreClick = async()=>{
    console.log("Previous clicked")
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ccec2138afb34d03874b4aa9e947a4ea&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
       page : this.page - 1,
       articles : parsedData.articles
    })
  }

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    }
    else {
        let url =  `https://newsapi.org/v2/top-headlines?country=in&apikey=ccec2138afb34d03874b4aa9e947a4ea&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.page + 1,
            articles: parsedData.articles
        })
    }
  }
  render() {
    return (
      <>
      <div className='container my-3'>
        <h1>TOP NEWS </h1>
          <div className="row">
            {this.state.articles.map((elements)=>{
              return <div className="col-md-4" key={elements.url}>
              <NewsItems  title={elements.title?elements.title.slice(0, 45):""} discription={elements.description?elements.description.slice(0, 88):""} imageUrl={elements.urlToImage} newsUrl={elements.url}/>
             </div>
            })}
              
          </div>
          <div className="container d-flex justify-content-evenly">
         <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handelPreClick}>&larr; Pervious </button>
         <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

      </div>
      </div>
      </>
    )
  }
}

export default News;
