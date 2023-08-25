import FirstVisitSale from '@/components/FirstVisitSale/FirstVisitSale';
import Courses from '@/components/TrainingPage/Courses';
import Main from '@/components/TrainingPage/Main';
import TrainBenefit from '@/components/TrainingPage/TrainBenefit';
import React from 'react';

const Training = () => {
  return (
    <>
      <Main />
      <Courses />
      <FirstVisitSale />
      <TrainBenefit />
    </>
  );
};

export default Training;