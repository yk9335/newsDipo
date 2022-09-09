import React, { Component } from 'react'
import "../Asstes/Css/Style.css"
import { Link } from "react-router-dom"
export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            s:""
        }
    }
    getData(e) {
        this.setState({ s:e.target.value })
    }
    postData(e) {
        e.preventDefault()
        document.getElementById("search").value=""
        this.props.searchNews(this.state.s)
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg sticky-top backgraond">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/" onClick={()=>this.props.searchNews('')}>News DIPO</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light  active" aria-current="page" to="/"onClick={()=>this.props.searchNews('')}>All News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light " to="/Politics"onClick={()=>this.props.searchNews('')}>Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light " to="/Sports"onClick={()=>this.props.searchNews('')}>Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light " to="/Technology"onClick={()=>this.props.searchNews('')}>Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light " to="/Entertainment"onClick={()=>this.props.searchNews('')}>Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light " to="/Business"onClick={()=>this.props.searchNews('')}>Business</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Other
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Eduction"onClick={()=>this.props.searchNews('')}>Eduction</Link></li>
                                        <li><Link className="dropdown-item" to="/Crime"onClick={()=>this.props.searchNews('')}>Crime</Link></li>
                                        <li><Link className="dropdown-item" to="/Medical"onClick={()=>this.props.searchNews('')}>Medical</Link></li>
                                        <li><Link className="dropdown-item" to="/Science"onClick={()=>this.props.searchNews('')}>Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Jokes"onClick={()=>this.props.searchNews('')}>Jokes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('en')}>English</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('hi')}>Hindi</button></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light  dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Page Size
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(10)}>1 to 10</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(50)}>1 to 50</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize(100)}>1 to 100</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changePageSize('all')}>1 to All</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" style={{width:"30%"}} role="search" onSubmit={(e)=>this.postData(e)}>
                                <input className="form-control me-2" type="search" name='search' id='search' placeholder="Enter Somthing to Seach" aria-label="Search" onChange={(e)=>this.getData(e)}/>
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
