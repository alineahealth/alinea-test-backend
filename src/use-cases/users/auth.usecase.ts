export class authUseCase {
    constructor() {}
    
    async auth(): Promise<string>{
        return `Logado`
    }
}