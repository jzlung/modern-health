export const getHashFromSectionName = name => {
  return name.toLowerCase().split('').filter(char => /[a-z ]/.test(char)).join('').replace(/ /g, '-');
};

export const getSectionDataFromHash = (program, hash, data) => {
  return data.programs[program].sections.find(sectionData => getHashFromSectionName(sectionData.name) === hash);
};