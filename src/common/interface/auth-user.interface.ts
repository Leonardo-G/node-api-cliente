export interface AuthUser {
    user: PayloadUser;
}

interface PayloadUser {
    
    usuario: IdUser;
    iat: number,
    exp: number;
}

interface IdUser{
    _id: string
}