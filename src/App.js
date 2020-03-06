import React, { Component } from 'react';

//components
import Header from './js/layout/Header.js';
import Footer from './js/layout/Footer.js';

class App extends Component {

  constructor(props){
    super();
    this.state = {
      siteURL: '',
      isLoading: true,
      totalPosts: 0,
      paginatedPages: 0,
      currentPaginationPage: 1,
      posts: []
    }
  }

  componentDidMount() {
    let siteURL = 'http://mysite.labcat.ms';

    this.setState(
      {
        ...this.state,
        siteURL
      }
    );

    window.addEventListener(
      'load',
        () => {
            this.fetchPosts(this.state.currentPaginationPage);
        }
    );
  }

  fetchPosts(page){
    let endPoint = this.state.siteURL + '/wp-json/wp/v2/pages?page=' + page;
    fetch(
       endPoint,
       {
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
    ).then(
        (response) => {
            if(this.state.currentPaginationPage < 2){
                let totalPosts = response.headers.get("X-WP-Total");
                let paginatedPages = parseInt(response.headers.get("X-WP-TotalPages"));

                this.setState(
                    {
                        ...this.state,
                        totalPosts,
                        paginatedPages
                    }
                );
            }

            response.json().then(
              (responseJson) => {
                const posts = responseJson;
                const currentPaginationPage = this.state.currentPaginationPage + 1;
                this.setState(
                    {
                        ...this.state,
                        posts,
                        currentPaginationPage
                    }
                );

                if(this.state.currentPaginationPage <= this.state.paginatedPages){
                    this.fetchPosts(this.state.currentPaginationPage);
                }
              }
            );
      }
    )
  .catch((
      error) => {
          console.error(error);
      }
  );
}

  render() {
    let content = '';

    
    if(this.state.posts.length){
      content = this.state.posts[0].content;
    }

    return (
      <React.Fragment>
        <Header/>
          <main id="main">
            <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
          </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App
