const getStoreReadList = () => {
    const storedListString = localStorage.getItem('read-list')
    if(storedListString){
        const storedList = JSON.parse(storedListString)
        return storedList
    } else{
        return [];
    }
}
const addToStoreReadList = (id) => {
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the read list')
    }else{
        storedList.push(id)
        const storedListString = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListString)
    }
}
const getStoreWishList = () => {
    const storedListString = localStorage.getItem('wish-list')
    if(storedListString){
        const storedList = JSON.parse(storedListString)
        return storedList
    } else{
        return [];
    }
}
const addToStoreWishList = (id) => {
    const storedList = getStoreWishList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the read list')
    }else{
        storedList.push(id)
        const storedListString = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListString)
    }
}
export { addToStoreReadList, addToStoreWishList}