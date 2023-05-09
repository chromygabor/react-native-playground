import {AffirmationData} from '../../models';
import {Repository} from '../AffirmationRepository';

export const FeedRepository: Repository = {
  getNextItem: function (): AffirmationData | undefined {
    throw new Error('Function not implemented.');
  },
  getPreviousItem: function (): AffirmationData | undefined {
    throw new Error('Function not implemented.');
  },
  getNextItems: function (_window: number): AffirmationData[] {
    throw new Error('Function not implemented.');
  },
};
