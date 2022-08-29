import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './AppStyling.css'; 


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className= "main" style={{marginTop: '10px', backgroundImage: 'url(/img/1.png)'}}>
        <div className="ui container " style={{ marginTop: '0px', textAlign: 'center'}}>
          <div className='logo' style={{textAlign: 'center', fontSize: '50px', paddingTop: '30px', marginBottom: '15px', position: 'scroll'}}> SearchIt</div>
          <SearchBar style={{marginTop: '15px'}} onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
