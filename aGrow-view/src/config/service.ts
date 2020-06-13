export default class LocalStorageService {

    static addItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getlocalStorage(key) {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    }

    static removeUserLocalStorage(key){
        localStorage.removeItem(key);
    }

    static removeUserAuthenticate(){
        LocalStorageService.removeUserLocalStorage('client');
    }
}