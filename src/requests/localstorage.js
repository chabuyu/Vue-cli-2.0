export default{
    name:'local',
    methods:{
        //存localstorage
        setStorage(name,item) {
            localStorage.setItem(name,JSON.stringify(item));
            // console.log(item)
        },
        //取localstorage
        getStorage(name){
            JSON.parse(localStorage.getItem(name));
        }
    }
}