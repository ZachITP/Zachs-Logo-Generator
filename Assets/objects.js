class object{
   
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    //Circle object
    class Circle extends object{
        create(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
        }
    }
    //Square object
    class Square extends object{
        create(){
            return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
        }
    }
    //Triangle object
    class Triangle extends object{
        create(){
            
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
        }
    };
    
    module.exports = {Circle, Square, Triangle}