import { computed } from "vue"

export function myDemo(message){
    const demo = computed(()=>{
        return message.value + "hahaha"
    })
    return demo
}