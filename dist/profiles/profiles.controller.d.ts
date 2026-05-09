import createProfileDto from './dto/create-profile.dto';
export declare class ProfilesController {
    findAll(age: number): {
        age: number;
    }[];
    findOne(id: string): {
        id: string;
    };
    create(createProfileDto: createProfileDto): void;
}
