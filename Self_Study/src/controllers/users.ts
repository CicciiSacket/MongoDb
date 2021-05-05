import { Request, Response } from "express";
import { UserModel, User } from "../model/users";

export const getUsers = async(_:Request,res:Response)=>{ //lista degli utenti
    let users = await UserModel.find();
    return res.status(200).json(users);
}

export const addUser = async({body:{name,surname}}:Request, res:Response) =>{ //creare un nuovo user
    const userExist = await UserModel.findOne({ name: name });
    if (userExist) { return res.status(400).json({ message: "User already exists" })}
    var userNew = new UserModel({
        name:name,
        surname:surname
    })
    try {
        await userNew.save();
        return res.status(201).json(userNew);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

export const updateUsers = async({body:{NewSurname},params:{id}}:Request, res:Response)=>{ //cambiare cognome
    try{
        const user =  await UserModel.findByIdAndUpdate(
            id,
            {surname : NewSurname},
            {new:true}
        )
        // if(await UserModel.findOne(NewSurname)){return res.status(400).json({message:"user already exist"})} //FARE CON MIDDLEWARE
        if (!NewSurname){ return res.status(400).json({message:"Insert correct form of surname"}) } //da fixare con middleware
        return res.status(201).json(user)
    }
    catch(err){
        return res.status(404).json({message:"User not found"})
    }
}

export const deleteUser = async ({params:{id}}:Request, res:Response) =>{
    try {
        const user = await UserModel.findByIdAndDelete(id)
        if (!user) {return res.status(404).json({ message: "User not found" })}
        return res.status(200).json({ message: "User eliminated :", user })
    } catch (err) {
        return res.status(404).json({ message: "User not found" });
    }
}