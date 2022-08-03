import axios from "axios";

export default abstract class HttpService {
  static getWord(word: string) {
    return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  }
}
