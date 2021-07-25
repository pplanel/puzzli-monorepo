import { Module } from '@nestjs/common';
import { PuzzliGateway } from './puzzli.gateway';

@Module({
    providers: [PuzzliGateway]
})
export class PuzzliModule {}
