
import {Request, Response} from 'express'
import { prismaClient } from '..';
import  {hashSync, compareSync} from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../schema/secrets';
import { BadRequestsException } from '../exceptions/bad-requests';
import { ErroCodes } from '../exceptions/rootexceptions';

export const login =  async (req: Request ,res: Response)=>{
    const {email,password} = req.body;

    let user = await prismaClient.user.findFirst({where : {email}})
    if(!user){
        // return res.status(400).json({message : 'User already exists' })
        throw Error('User does not exists!')
    }
    if(compareSync(password,user.password)){
        throw Error('incorrect pasword!')
    }
    const token = jwt.sign({
        userId : user.id
    },JWT_SECRET)
        res.json({user, token})
}



export const signup = async (req: Request ,res: Response)=>{
    const {email,password,name} = req.body;

    let user = await prismaClient.user.findFirst({where : {email}})
    if(user){
        // return res.status(400).json({message : 'User already exists' })
        throw new BadRequestsException('User not found!', ErroCodes.USER_ALREADY_EXISTS )
    }
    user = await prismaClient.user.create({data : {
        email,
        password:hashSync(password, 10),
        name}})
        res.json(user)
}