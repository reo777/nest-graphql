import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interfaces/items.interface';
import { ItemType } from './dto/createItem.dto';
import { ItemInput } from './items.inputType';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  async create(createItemDTO: ItemInput): Promise<ItemType> {
    const createdItem = new this.itemModel(createItemDTO);
    return await createdItem.save();
  }

  async findAll(): Promise<ItemType[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: ItemType['id']): Promise<ItemType> {
    return await this.itemModel.findOne({ id });
  }

  async delete(id: ItemType['id']): Promise<ItemType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: ItemType['id'], item: ItemInput): Promise<ItemType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
