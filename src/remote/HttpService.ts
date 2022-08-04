import axios from "axios";
import CacheService from "../infra/CacheService";
import { Word } from "../utils/types/interfaces";

export default abstract class HttpService {
  static async getWord(word: string): Promise<Word> {
    const responseCached = CacheService.get(word);

    if (responseCached) return responseCached;

    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const { data } = response;
    const wordResponse = data[0].word;
    CacheService.set(wordResponse, data[0]);

    return data[0];
  }
}
