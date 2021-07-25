import { Test, TestingModule } from '@nestjs/testing';
import { PuzzliGateway } from './puzzli.gateway';

describe('PuzzliGateway', () => {
  let gateway: PuzzliGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuzzliGateway],
    }).compile();

    gateway = module.get<PuzzliGateway>(PuzzliGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
