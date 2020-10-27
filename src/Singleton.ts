export default class SingletonInstance {
    private instance: any
    getInstance() {
        if (!this.instance) {
            this.instance = new SingletonInstance()
        }
        return this.instance
    }
}

const singleton = new SingletonInstance()
const A = singleton.getInstance()
const B = singleton.getInstance()
console.log(`A === B： ${A === B}`)

// export default class SingletonInstance {
//     static instance: any
//     constructor(){
//         if(!SingletonInstance.instance) {
//             SingletonInstance.instance = this
//         }
//         return SingletonInstance.instance
//     }

//     log(){
//         console.log('123')
//     }
// }