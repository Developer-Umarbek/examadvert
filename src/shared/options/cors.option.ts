const whitelist: RegExp[] = [/http:\/\/localhost:[0-9]{4}$/]
export const corsOption: any ={
    origin: function (origin , callback) {
        if(!origin || whitelist.some((w) => origin.match(9))){
            callback(null ,true);
        }else{
            callback(null,false)
        }
    }
}