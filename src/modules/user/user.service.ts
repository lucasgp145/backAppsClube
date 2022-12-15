import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

        async create(data: UserDTO) {

            const userExists = await this.prisma.user.findFirst({
                where: {
                    phoneNumber : data.phoneNumber
                }
            })

            if(userExists){
                throw new Error("Phone registered in a plan phone")
            }

          
            const user = await this.prisma.user.create({
                data,
            })
            return user;
        
            
        }

        async findOne(id: string) {
            return this.prisma.user.findUnique({ where: { id } });
          }

        async update(id: string, data: UserDTO){
            const userExists = await this.prisma.user.findUnique({
                where: {
                    phoneNumber : data.phoneNumber
                }
            })

            if(!userExists){
                throw new Error('User does not exists!');
                
            }

           return await this.prisma.user.update({
                data,
                where: {
                    id
                }

            })
        }

        async findAll(){
            return this.prisma.user.findMany();
        }

}
