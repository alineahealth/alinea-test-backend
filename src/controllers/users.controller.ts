import {authUseCase}  from "../use-cases/users/auth.usecase"

export class userController {
    constructor() {}
    
    async auth(params: any): Promise<string>{
        const useCase = new authUseCase()
        return useCase.auth(params)
    }
}