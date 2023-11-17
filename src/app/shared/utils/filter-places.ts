import { TranslatedPlace } from '@shared/types/translated-place';

export const filterPlaces = (
  allPlaces: ReadonlyArray<TranslatedPlace> | undefined,
  fieldValue: string
): ReadonlyArray<TranslatedPlace> => {
  if (allPlaces === undefined || allPlaces.length === 0) {
    return [];
  }

  const [part1, part2, part3] = fieldValue
    .trim()
    .split(fieldValue.includes(', ') ? ', ' : ' ');

  if (part3 !== undefined) {
    return [];
  }

  const formattedPart1 = part1.trim().toLowerCase();

  if (part2 === undefined) {
    return allPlaces.filter((place) => {
      return (
        place.plainCityLabel.toLowerCase().includes(formattedPart1) ||
        place.plainCountryLabel.toLowerCase().includes(formattedPart1)
      );
    });
  }

  const formattedPart2 = part2.trim().toLowerCase();

  return allPlaces.filter((place) => {
    const formattedCityLabel = place.plainCityLabel.toLowerCase();
    const formattedCountryLabel = place.plainCountryLabel.toLowerCase();

    return (
      (formattedCityLabel.includes(formattedPart1) &&
        formattedCountryLabel.includes(formattedPart2)) ||
      (formattedCityLabel.includes(formattedPart2) &&
        formattedCountryLabel.includes(formattedPart1))
    );
  });
};
