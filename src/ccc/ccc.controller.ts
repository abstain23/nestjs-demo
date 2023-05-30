import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
  OnModuleDestroy,
} from '@nestjs/common';
import { CccService } from './ccc.service';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';

@Controller('ccc')
export class CccController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly cccService: CccService) {}

  onModuleInit() {
    console.log('ccccc controller onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('ccccc controller onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('ccc controller onModuleDestroy');
  }
  beforeApplicationShutdown(signal?: string) {
    console.log('ccc controller beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('ccc controller onApplicationShutdown', signal);
  }

  @Post()
  create(@Body() createCccDto: CreateCccDto) {
    return this.cccService.create(createCccDto);
  }

  @Get()
  findAll() {
    return this.cccService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cccService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCccDto: UpdateCccDto) {
    return this.cccService.update(+id, updateCccDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cccService.remove(+id);
  }
}
