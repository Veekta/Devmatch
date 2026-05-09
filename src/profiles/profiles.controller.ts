import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import {CreateProfileDto} from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

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
    create(@Body() CreateProfileDto: CreateProfileDto){
        return{
            name: CreateProfileDto.name,
            description: CreateProfileDto.description
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() UpdateProfileDto: UpdateProfileDto ){
        return {
           id,
           ...UpdateProfileDto
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id: string){}
}
