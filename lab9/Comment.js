//Класс Коментарии с неполным функционалом, для демострации паттерна Одиночка

class Comment{
    constructor(count_likes){
        
        if(Comment.access_count_likes) {
            return Comment.likes
        }

        Comment.access_count_likes = true
        Comment.likes = this
        this.count_likes = count_likes

        
    }

    getCountLikesComment(){
        return this.count_likes
    }

    addCountLikesComment(){
        return this.count_likes++
    }

    removeCountLikesComment(){
        return this.count_likes--
    }
}


module.exports = Comment