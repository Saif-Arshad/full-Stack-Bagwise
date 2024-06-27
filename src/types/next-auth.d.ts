import 'next-auth' 

declare module 'next-auth'{
    interface User {
        _id?:String;
        isVerified?:boolean;
        name?:String
    }
    interface Session {
        // user{
            _id?:String;
            isVerified?:boolean;
            username?:String
        // } & DeffaultSession('user')
     
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        _id?:String  ;
        isVerified?:boolean;
        name?:String
    }
}