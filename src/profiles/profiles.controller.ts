import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import createProfileDto from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {

    @Get()
    findAll(@Query('age') age: number){
        return [{age}]
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return {id}
    }
    
    @Post()
    create(@Body() createProfileDto: createProfileDto){

    }
}
