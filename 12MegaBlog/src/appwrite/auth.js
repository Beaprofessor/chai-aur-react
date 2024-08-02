import conf from '../conf.js'
import {Client , Account , ID } from 'appwrite'


export class AuthService {

    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email, password, name)
            if(userAccount){
                    // call another method
                    return this.login({email,password})
            }
            else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error;
        }
    }

    async logout(){
    try {
        return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite issue :: Logout  :: error", error )
        }
    }

    async getCurrentUser(){
        try{
            await this.account.get()
        }
        catch(error){
            console.log("Appwrite service: getCurrentUser :: error" , error)
        }
        return null
    }
}

const authService = new AuthService()

export default AuthService

