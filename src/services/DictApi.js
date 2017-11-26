import Api from '@/services/Api'

export default {
  getAllWords (authParams) {
    return Api().get('get_all_words', authParams)
  },
  getAllUserKnownWords (identificationParams) {
    return Api().post('get_all_user_words', identificationParams)
  },
  createAccount (createParams) {
    return Api().post('create_account', createParams)
  }
}
