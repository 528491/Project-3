import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'child-beach.jpg',
    altText: 'Happy Family Playing on Beach',
    caption: '- Mark P., Father of Two, Software Engineer.',
    header: '"Life Changing"'
  },
  {
    src: 'adult-and-baby.jpg',
    altText: 'Red Memetober',
    caption: 'Alexandra, Mother of Three, Attourney',
    header: "'Lets me focus on my family, not scheduling.'"
  },
  {
    src: 'child-riding-bike.jpg',
    altText: 'Child Riding Bike',
    caption: 'Thomas, Teacher and Father of Six',
    header: 'My Go-To App for anything calendar-related!'
  },
  {
    src: 'family-photo-op.jpg',
    altText: 'Slide 3',
    caption: 'Anonymous',
    header: 'Awesome! These Guys Should get an A!'
  }
];

const SplashPageCarousel = () => <UncontrolledCarousel items={items} />;

export default SplashPageCarousel;