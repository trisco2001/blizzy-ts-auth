export class Environment {
    key: string
    secret: string
    
    constructor() {
        this.key = process.env["APIKEY"]!
        this.secret = process.env["SECRET"]!
    }
}