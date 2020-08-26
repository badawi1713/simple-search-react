import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import youtubeAPI from "../../../api/youtubeAPI";

class Home extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.termSubmitHandler("pokemon");
  }

  termSubmitHandler = async (term) => {
    if (term.trim() === "") {
      alert("Please fill search term");
    }
    const response = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });

    try {
      this.setState({ videos: response.data.items });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  videoSelectHandler = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar submitHandler={this.termSubmitHandler} />

        {this.state.selectedVideo === null ? (
          <VideoList
            videoSelect={this.videoSelectHandler}
            videos={this.state.videos}
          />
        ) : (
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  videoSelect={this.videoSelectHandler}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
