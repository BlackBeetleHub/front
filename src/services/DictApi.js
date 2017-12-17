import Api from '@/services/Api'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default {
  getAllWords (authParams) {
    return Api.Api().get('/get_all_words', authParams)
  },
  getAllUserKnownWords (identificationParams) {
    return Api.Api().get('/get_all_custom_words', identificationParams)
  },
  createAccount (createParams) {
    return Api.Api().post('/create_account', createParams)
  },
  getAccountIdByEmail (getParams) {
    return Api.Api().get('/account_id', getParams)
  },
  getInformationAboutWord (wordParams) {
    return Api.LinguaLeo().get('/ru/userdict3/getTranslations', wordParams)
  },
  addWordInUserDict (wordParams) {
    return Api.Api().get('/add_custom_word', wordParams)
  }
}
