import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1
        }
    }
    async getAPIData() {
        this.setState({ page: 1 })
        if (this.props.search === '')
            var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=b14d9742fa0c4a588624f03c1a89f96d`)
        else
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=b14d9742fa0c4a588624f03c1a89f96d`)
        var result = await rawdata.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&apiKey=b14d9742fa0c4a588624f03c1a89f96d`)
        var result = await rawdata.json()
        this.setState({
            articles: this.state.articles.concat(result.articles)
        })
    }
    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(old) {
        if (this.props.q !== old.q || this.props.language !== old.language || this.props.pageSize !== old.pageSize || this.props.search !== old.search) {
            this.getAPIData()
        }
    }
    render() {
        return (
            <>
                <div className='container-fluid'>
                    {this.props.search?
                        <h5 className='backgraund text-center m-1 p-1 text-light'>Your search "{this.props.search}" </h5>:
                        <h5 className='backgraund text-center m-1 p-1 text-light'>{this.props.q} News Section </h5>
                    }
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={<div className='container-fluid w-100 ' style={{ height: '300px' }} >
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>}
                    >
                        <div className='row'>

                            {
                                this.state.articles.map((item, index) => {
                                    return <NewsItem
                                        key={index}
                                        titel={item.title}
                                        author={item.author}
                                        name={item.source.name}
                                        description={item.description}
                                        url={item.url}
                                        pic={item.urlToImage}
                                        date={item.publishedAt}
                                    />
                                })
                            }

                        </div>
                    </InfiniteScroll>
                </div>

            </>
        )
    }
}
