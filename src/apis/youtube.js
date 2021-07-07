import axios from 'axios';


const KEY = 'AIzaSyBxAhb6f1XF6cJWSKOobha0b9c8E5DzAcA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
