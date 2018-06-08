import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';
const API_KEY = 'AIzaSyByDjkkv2qqCCT2IQiMkadzG1Q1-DOdAq0';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch();
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
        placeholder: 'Search. . .'
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} placeholderText={this.state.placeholder} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </div>
      );
  }
}
