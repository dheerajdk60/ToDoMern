const mongoose=require('mongoose')
const Schema=mongoose.Schema

const TodoSchema= new Schema({
    text:{
        type:String,
        require:true
    },
    complete:{
        type:Boolean,
        require:false
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
})

const Todo=mongoose.model("Todo",TodoSchema)

module.exports=Todo