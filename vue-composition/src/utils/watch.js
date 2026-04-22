import {watch} from "vue"

export function watchcount(count){
    watch(count,async(newvalue,oldvalue)=>{
    console.log(newvalue,oldvalue)
})
}