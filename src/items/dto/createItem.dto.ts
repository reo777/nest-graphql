import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
// DTO
// データをどうやって送信するかを定義する
@ObjectType()
export class ItemType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @Field()
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @Field()
  readonly description: string;
}
