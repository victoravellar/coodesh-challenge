export default abstract class CacheService {
  static set(key: string, data: any): void {
    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(key, serializedData);
  }

  static get(key: string): any | null {
    const serializedData = sessionStorage.getItem(key);
    if (serializedData) {
      const data: any = JSON.parse(serializedData);
      return data;
    }
    return null;
  }
}
