export class authUseCase {
    constructor() {}
    
    async auth(params: any): Promise<string>{
        const user = params.username;
        const password = params.password;

        if(!user && password) throw Error(`Usuário ou senha não fornecido`)

        return `Logado`
    }
}