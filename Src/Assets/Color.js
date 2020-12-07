const materialColors = {
  Red: {
      0: '#FFEBEE', 1: '#FFCDD2', 2: '#EF9A9A', 3: '#E57373', 4: '#EF5350', 5: '#F44336', 6: '#E53935', 7: '#D32F2F', 8: '#C62828', 9: '#B71C1C', A1: '#FF8A80', A2: '#FF5252', A4: '#FF1744', A7: '#D50000',
  },
  Pink: {
      0: '#FCE4EC', 1: '#F8BBD0', 2: '#F48FB1', 3: '#F06292', 4: '#EC407A', 5: '#E91E63', 6: '#D81B60', 7: '#C2185B', 8: '#AD1457', 9: '#880E4F', A1: '#FF80AB', A2: '#FF4081', A4: '#F50057', A7: '#C51162',
  },
  Purple: {
      0: '#F3E5F5', 1: '#E1BEE7', 2: '#CE93D8', 3: '#BA68C8', 4: '#AB47BC', 5: '#9C27B0', 6: '#8E24AA', 7: '#7B1FA2', 8: '#6A1B9A', 9: '#4A148C', A1: '#EA80FC', A2: '#E040FB', A4: '#D500F9', A7: '#AA00FF',
  },
  DeepPurple: {
      0: '#EDE7F6', 1: '#D1C4E9', 2: '#B39DDB', 3: '#9575CD', 4: '#7E57C2', 5: '#673AB7', 6: '#5E35B1', 7: '#512DA8', 8: '#4527A0', 9: '#311B92', A1: '#B388FF', A2: '#7C4DFF', A4: '#651FFF', A7: '#6200EA',
  },
  Indigo: {
      0: '#E8EAF6', 1: '#C5CAE9', 2: '#9FA8DA', 3: '#7986CB', 4: '#5C6BC0', 5: '#3F51B5', 6: '#3949AB', 7: '#303F9F', 8: '#283593', 9: '#1A237E', A1: '#8C9EFF', A2: '#536DFE', A4: '#3D5AFE', A7: '#304FFE',
  },
  Blue: {
      0: '#E3F2FD', 1: '#BBDEFB', 2: '#90CAF9', 3: '#64B5F6', 4: '#42A5F5', 5: '#2196F3', 6: '#1E88E5', 7: '#1976D2', 8: '#1565C0', 9: '#0D47A1', A1: '#82B1FF', A2: '#448AFF', A4: '#2979FF', A7: '#2962FF',
  },
  LightBlue: {
      0: '#E1F5FE', 1: '#B3E5FC', 2: '#81D4FA', 3: '#4FC3F7', 4: '#29B6F6', 5: '#03A9F4', 6: '#039BE5', 7: '#0288D1', 8: '#0277BD', 9: '#01579B', A1: '#80D8FF', A2: '#40C4FF', A4: '#00B0FF', A7: '#0091EA',
  },
  Cyan: {
      0: '#E0F7FA', 1: '#B2EBF2', 2: '#80DEEA', 3: '#4DD0E1', 4: '#26C6DA', 5: '#00BCD4', 6: '#00ACC1', 7: '#0097A7', 8: '#00838F', 9: '#006064', A1: '#84FFFF', A2: '#18FFFF', A4: '#00E5FF', A7: '#00B8D4',
  },
  Teal: {
      0: '#E0F2F1', 1: '#B2DFDB', 2: '#80CBC4', 3: '#4DB6AC', 4: '#26A69A', 5: '#009688', 6: '#00897B', 7: '#00796B', 8: '#00695C', 9: '#004D40', A1: '#A7FFEB', A2: '#64FFDA', A4: '#1DE9B6', A7: '#00BFA5',
  },
  Green: {
      0: '#E8F5E9', 1: '#C8E6C9', 2: '#A5D6A7', 3: '#81C784', 4: '#66BB6A', 5: '#4CAF50', 6: '#43A047', 7: '#388E3C', 8: '#2E7D32', 9: '#1B5E20', A1: '#B9F6CA', A2: '#69F0AE', A4: '#00E676', A7: '#00C853',
  },
  LightGreen: {
      0: '#F1F8E9', 1: '#DCEDC8', 2: '#C5E1A5', 3: '#AED581', 4: '#9CCC65', 5: '#8BC34A', 6: '#7CB342', 7: '#689F38', 8: '#558B2F', 9: '#33691E', A1: '#CCFF90', A2: '#B2FF59', A4: '#76FF03', A7: '#64DD17',
  },
  Lime: {
      0: '#F9FBE7', 1: '#F0F4C3', 2: '#E6EE9C', 3: '#DCE775', 4: '#D4E157', 5: '#CDDC39', 6: '#C0CA33', 7: '#AFB42B', 8: '#9E9D24', 9: '#827717', A1: '#F4FF81', A2: '#EEFF41', A4: '#C6FF00', A7: '#AEEA00',
  },
  Yellow: {
      0: '#FFFDE7', 1: '#FFF9C4', 2: '#FFF59D', 3: '#FFF176', 4: '#FFEE58', 5: '#FFEB3B', 6: '#FDD835', 7: '#FBC02D', 8: '#F9A825', 9: '#F57F17', A1: '#FFFF8D', A2: '#FFFF00', A4: '#FFEA00', A7: '#FFD600',
  },
  Amber: {
      0: '#FFF8E1', 1: '#FFECB3', 2: '#FFE082', 3: '#FFD54F', 4: '#FFCA28', 5: '#FFC107', 6: '#FFB300', 7: '#FFA000', 8: '#FF8F00', 9: '#FF6F00', A1: '#FFE57F', A2: '#FFD740', A4: '#FFC400', A7: '#FFAB00',
  },
  Orange: {
      0: '#FFF3E0', 1: '#FFE0B2', 2: '#FFCC80', 3: '#FFB74D', 4: '#FFA726', 5: '#FF9800', 6: '#FB8C00', 7: '#F57C00', 8: '#EF6C00', 9: '#E65100', A1: '#FFD180', A2: '#FFAB40', A4: '#FF9100', A7: '#FF6D00',
  },
  DeepOrange: {
      0: '#FBE9E7', 1: '#FFCCBC', 2: '#FFAB91', 3: '#FF8A65', 4: '#FF7043', 5: '#FF5722', 6: '#F4511E', 7: '#E64A19', 8: '#D84315', 9: '#BF360C', A1: '#FF9E80', A2: '#FF6E40', A4: '#FF3D00', A7: '#DD2C00',
  },
  Brown: {
      0: '#EFEBE9', 1: '#D7CCC8', 2: '#BCAAA4', 3: '#A1887F', 4: '#8D6E63', 5: '#795548', 6: '#6D4C41', 7: '#5D4037', 8: '#4E342E', 9: '#3E2723',
  },
  Gray: {
      0: '#FAFAFA', 1: '#F5F5F5', 2: '#EEEEEE', 3: '#E0E0E0', 4: '#BDBDBD', 5: '#9E9E9E', 6: '#757575', 7: '#616161', 8: '#424242', 9: '#212121',
  },
  BlueGray: {
      0: '#ECEFF1', 1: '#CFD8DC', 2: '#B0BEC5', 3: '#90A4AE', 4: '#78909C', 5: '#607D8B', 6: '#546E7A', 7: '#455A64', 8: '#37474F', 9: '#263238',
  },
  Primary: {
      0: '#e0f6fb', 1: '#b1e8f3', 2: '#7ed8eb', 3: '#4ac9e1', 4: '#22beda', 5: '#00b3d2', 6: '#00a3bf', 7: '#008fa5', 8: '#007b8c', 9: '#005961',
  },
  Secondary: {
      0: '#fffde6', 1: '#fff9c2', 2: '#fef59a', 3: '#fdf170', 4: '#fbec4d', 5: '#f8e726', 6: '#fdd927', 7: '#fcc11e', 8: '#fba813', 9: '#f97e00',
  },
  Text: {
      0: '#f3fbf7', 1: '#ecf4f0', 2: '#e3ebe7', 3: '#d4dcd8', 4: '#b0b8b4', 5: '#909894', 6: '#68706c', 7: '#555c59', 8: '#373d3a', 9: '#171d1a',
  },
  Black: '#000000', White: '#FFFFFF',
};

export const colors = {
  themePrimary: materialColors.Primary,
  themeSecondary: materialColors.Secondary,
  red: materialColors.Red,
  themeTertiary: materialColors.Text,
  black: materialColors.Black,
  white: materialColors.White,
  primary: '#f3f4f6',
  secoundary: '#fd9c3b',
  tertiary: '#c5c5c5',
  fontPrimary: '#000000',
  fontSecoundary: '#555555',
  fontTertiary: '#98989a',
  fontDisabled: '#8f8f91',
  seperator: '#8f8f91',
};
