import axios from "axios"

const KEY = 'AIzaSyB1p3Vt2ZKEW8jQ9Ymg0Uydxm-Y0hIq6YA'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet" ,
    type:'video',
    maxResults: 20 ,
    key : KEY
  }
})