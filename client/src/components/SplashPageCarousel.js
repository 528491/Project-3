import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'child-beach.jpg',
    altText: 'Happy Family Playing on Beach',
    caption: '"Life Changing"',
    header: 'Slide 1 Header'
  },
  {
    src: 'adult-and-baby.jpg',
    altText: 'Red Memetober',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'child-riding-bike',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  },
  {
    src: 'family-photo-op.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const SplashPageCarousel = () => <UncontrolledCarousel items={items} />;

export default SplashPageCarousel;