import Api from '@/services/Api'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default {
  getAllWords (authParams) {
    return Api().get('get_all_words', authParams)
  },
  getAllUserKnownWords (identificationParams) {
    return Api().post('get_all_user_words', identificationParams)
  },
  createAccount (createParams) {
    return Api().post('/create_account', createParams)
  },
  getAccountIdByEmail (getParams) {
    return Api().get('/account_id', getParams)
  }
}
