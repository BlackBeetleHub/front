import axios from 'axios'

export default {
  Api: function () {
    return axios.create({
      baseURL: `http://localhost:4000/`
    })
  },
  LinguaLeo: function () {
    return axios.create({
      baseURL: `https://lingualeo.com/`
    })
  }
}
