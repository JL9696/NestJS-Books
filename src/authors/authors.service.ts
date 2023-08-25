import { Injectable, ConflictException } from '@nestjs/common';
import { Author } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prismaService: PrismaService){}

  public getAll(): Promise<Author[]> {
    return this.prismaService.author.findMany();
  }

  public getById(id: Author['id']): Promise<Author | null> {
    return this.prismaService.author.findUnique({
      where: { id },
    });
  }

  public async create(authorData: Omit<Author, 'id'>): Promise<Author>{
    try {
      return await this.prismaService.author.create({
        data: authorData,
      });
    } catch (error) {
      if(error.code === 'P2002')
        throw new ConflictException('Name is already taken');
      throw error;
    } 
  }

  public async updateById(
    id: Author['id'],
    authorData: Omit<Author, 'id'>,
  ): Promise<Author> {
    try {
      return await this.prismaService.author.update({
        where: { id },
        data: authorData,
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Name is already taken');
      throw error;
    }
  }

  public deleteById(id: Author['id']): Promise<Author>{
    return this.prismaService.author.delete({
      where: { id },
    });
  }
}