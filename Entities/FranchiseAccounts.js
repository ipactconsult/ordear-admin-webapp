const mongoose = require('mongoose')
const FranchiseSchema =  mongoose.Schema({
    Franchise_name:String,
    Belongs_to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
})
module.exports= new mongoose.model('franchiseAccounts',FranchiseSchema)