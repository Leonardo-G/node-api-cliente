import { MongoIdValidationPipe } from './mongo-id-validation.pipe';

describe('MongoIdValidationPipe', () => {
  it('should be defined', () => {
    expect(new MongoIdValidationPipe()).toBeDefined();
  });
});
