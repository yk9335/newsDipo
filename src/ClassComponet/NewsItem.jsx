import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12' >
                <div className="card">
                    <img src={this.props.pic} height='200px' className="card-img-top" alt="Img Not Work" />
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: "100px" }}>{this.props.titel.slice(0, 80) + " ..."}</h5>
                        <h7 className="card-title">{this.props.name}</h7>
                        <br />
                        <h7 className="card-title">{this.props.date}</h7>
                        <hr />
                        <p className="card-text" style={{ height: "200px" }}>{this.props.description.slice(0, 200) + " ..."}</p>
                        <a href={this.props.url} taget="blank" className="btn btn-primary">For More</a>
                    </div>
                </div>
            </div>
        )
    }
}
