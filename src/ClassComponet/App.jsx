import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi",
      pageSize:8,
      search:''
    }
  }
  changeLanguage=(data)=>{
    this.setState({language:data})
  }
  changePageSize=(data)=>{
    this.setState({pageSize:data})
  }
  searchNews=(data)=>{
    this.setState({search:data})
  }
  render() { 
    return (
        <BrowserRouter>
        <Navbar changeLanguage={this.changeLanguage} changePageSize={this.changePageSize} searchNews={this.searchNews} />
            <Routes>
                <Route path='/' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="All"/>}/>
                <Route path='/Politics' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Politics"/>}/>
                <Route path='/Sports' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Sports" />}/>
                <Route path='/Technology' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Technology" />}/>
                <Route path='/Entertainment' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Entertainment" />}/>
                <Route path='/Business' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Business" />}/>
                <Route path='/Eduction' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Eduction" />}/>
                <Route path='/Crime' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Crime" />}/>
                <Route path='/Medical' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Medical" />}/>
                <Route path='/Science' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Science" />}/>
                <Route path='/Jokes' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q="Jokes"/>}/>
                
            </Routes>
        <Footer/>
        </BrowserRouter>      
    )
  }
}
