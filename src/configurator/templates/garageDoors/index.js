import React from 'react';

const TemplateDiv = ({text}) => {
  return (
      <div>
          {text}
      </div>
  );
};

const Height = () => <TemplateDiv text="This is the garage height." />;
const Width = () => <TemplateDiv text="This is the garage width." />;
const GarageSize = () => <TemplateDiv text="This is the garage size." />;
const GarageDesign = () => <TemplateDiv text="This is the garage design." />;
const GarageConstruction = () => <TemplateDiv text="This is the garage construction." />;
const GarageTopSection = () => <TemplateDiv text="This is the garage top section." />;
const GarageGlassType = () => <TemplateDiv text="This is the garage glass type." />;
const GarageHandle = () => <TemplateDiv text="This is the garage handle." />;
const GarageStepPlate = () => <TemplateDiv text="This is the garage step plate." />;
const GarageHinge = () => <TemplateDiv text="This is the garage hinge." />;
const GarageOpener = () => <TemplateDiv text="This is the garage opener." />;
const GarageInstallOption = () => <TemplateDiv text="This is the garage install option." />;

export const options = [
  { name: 'Height', template: <Height /> },
  { name: 'Width', template: <Width /> },
  { name: 'Garage_Size_Type', template: <GarageSize /> },
  { name: 'Garage_ReserveWood_Design2', template: <GarageDesign /> },
  { name: 'Garage_ReserveWood_Construction', template: <GarageConstruction /> },
  { name: 'Garage_ReserveWood_TopSection', template: <GarageTopSection /> },
  { name: 'Garage_ReserveWood_GlassType', template: <GarageGlassType /> },
];


