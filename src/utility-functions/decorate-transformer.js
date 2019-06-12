export default function decorateTransformer(transformerModel) {
  transformerModel.overallRating = () => {
    return (
      transformerModel.strength +
      transformerModel.intelligence +
      transformerModel.speed +
      transformerModel.endurance +
      transformerModel.firepower
    );
  };
  return transformerModel;
}
