import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({example: 'Admin', description: 'Role value'})
    readonly value: string;
    @ApiProperty({example: 'Administrator', description: 'Role description'})
    readonly description: string;
}