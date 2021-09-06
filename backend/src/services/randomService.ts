import { v4 as uuid } from 'uuid';

class RandomService {
  randomStrings(count: number): string[] {
    const res: string[] = [];

    for (let i = 0; i < count; ++i) {
      res.push(uuid());
    }

    return res;
  }
}

export default new RandomService();
