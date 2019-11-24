import { getTweets } from './controller/TweetActions';
import { createRating } from './controller/RatingActions';
import { createVent } from './controller/VentActions';
import { createSubject } from './controller/SubjectActions';

export const AppRoutes = [
  {
    path: '/api/tweets',
    method: 'get',
    action: getTweets,
  },
  {
    path: '/api/rating',
    method: 'post',
    action: createRating,
  },
  {
    path: '/api/vent',
    method: 'post',
    action: createVent,
  },
  {
    path: '/api/subject',
    method: 'post',
    action: createSubject,
  },
];
