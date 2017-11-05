import Api from '@/services/Api'

export default {
  getAllWords (authParams) {
    return Api().get('get_all_words', authParams)
  }
}
