import { IsString , IsNotEmpty, MinLength, MaxLength, IsUUID, IsUrl} from "class-validator";

export class CreateTodoDto {  
    @IsNotEmpty() 
    advert_buy: string;

    @IsNotEmpty() 
    @IsUrl()
    advert_url: string;
}
