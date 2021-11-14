import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Primary key'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@gmail.com', description: 'Email address'})
    @Column({
        type: DataType.STRING, unique: true, allowNull: false, validate: {
            isEmail: {
                msg: 'Must be a valid email address',
            },
        },
    })
    email: string;

    @ApiProperty({example: '123456', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Rob Stark', description: 'User name'})
    @Column({type: DataType.STRING, allowNull: true})
    name: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}