const getUsers = (req,res)=>{
    res.send('Get Users Successful');
}

const addUser = (req,res)=>{
    console.log(req.body);
    res.json({status:'User added successfully'})
}

const editUser = (req,res)=>{
    console.log(req.body);
    res.json({status:'User updated successfully'});
}

const deleteUser = (req,res)=>{
    console.log(req.body);
    res.json({status:'User deleted successfully'})
}
module.exports = {getUsers,addUser,editUser,deleteUser}