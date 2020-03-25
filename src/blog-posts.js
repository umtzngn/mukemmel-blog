export const getPosts = () => {
    return [
        {
            title : "Yeni baslik",
            slug : "yeni-yazi",
            details : require("./posts/yeni-yazi.md").default,
            date : "25.03.2020"  

        },
        {
            title :"İyi bir mühendisin 10 özelliği",
            slug : "iyi-bir-muhendis",
            details :require("./posts/iyi-bir-muhendis.md").default,
            date : "25.03.2020"
        
        },
        {

            title : "Merhaba Dünya!",
            slug : "merhaba",
            details :require("./posts/merhaba.md").default,
            date : "25.03.2020"
        }
         
    ];
};