import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    findAll(age: number): {
        age: number;
    }[];
    findOne(id: string): {
        id: string;
    };
    create(CreateProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
    update(id: string, UpdateProfileDto: UpdateProfileDto): {
        name: string;
        description: string;
        id: string;
    };
    remove(id: string): void;
}
