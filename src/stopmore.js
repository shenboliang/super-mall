export default function(event,delay){

           var  timer = null

        return   function(...arg){

                if(timer){
                    clearTimeout(timer)
                }

                 timer = setTimeout(() => {
                   event.apply(this,arg)
               }, delay);

        }


}