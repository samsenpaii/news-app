import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, discription ,imageUrl, newsUrl} = this.props;
    return (
      <>
      <div>
        <div className="card mx-2 my-2" style={{width: '18rem'}}>
            <img src={!imageUrl?"https://th.bing.com/th/id/R.9d7b29446a6adc7316a4b775dd8754ec?rik=JlaOShB8Otei%2bA&riu=http%3a%2f%2fwww.lowerycommunications.com%2fwp%2fwp-content%2fuploads%2f2013%2f12%2fslider-for-news-m.jpg&ehk=pBuBXaobIcXuoEzAUW8R4653wTMiXjzA58x80zL0UFM%3d&risl=&pid=ImgRaw&r=0":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            {discription}...
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
        </div>
      </div>
      </div>
      </>
    )
  }
}

export default NewsItems
