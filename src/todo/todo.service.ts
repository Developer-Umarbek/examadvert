import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PG_CONNECTION } from 'src/shared/constants';
// import Express from 'Express';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@Inject(PG_CONNECTION) private pg: any) {}
  async create(createTodoDto: CreateTodoDto ): Promise<any> {   
       
    const { advert_buy , advert_url } = createTodoDto;
    const {
      rows: [row],
    } = await this.pg.query(
      'insert into advert( advert_buy ,advert_url) values($1 , $2 ) returning *',
      [ advert_buy, advert_url ],
    );

    return { message: 'Success created!', row };
  }

  async findAll() {
    const { rows } = await this.pg.query('select * from advert');
    return rows;
  }

  async findOne(id: string) {
    const {
      rows: [row],
    } = await this.pg.query('select * from advert where advert_id = $1', [id]);
    return row;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const { advert_buy, advert_url } = updateTodoDto;
    const {
      rows: [data],
    } = await this.pg.query(
      'update advert set advert_buy = $1, advert_url=$2 where advert_id = $3 returning *',
      [advert_buy, advert_url, id],
    );

    if(!data) throw new NotFoundException('Not found');

    return data;
  }

  remove(id: string) {
    this.pg.query('delete from advert where advert_id = $1', [id]);
  
    return {messsage: 'Success'};
  }
}
