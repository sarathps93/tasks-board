export const prepareIndexedDB = () => {
    if (!window.indexedDB) {
       return false;
    };

    return true;
}

export default prepareIndexedDB;
