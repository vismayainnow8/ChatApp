import React from 'react';
import PropTypes from 'prop-types';
import {Surface, Shape, Path, Group} from '@react-native-community/art';
import {colors} from '../../../Assets';

function createPath(cx, cy, r, startAngle, arcAngle) {
  const p = new Path();
  p.moveTo(cx + r * Math.cos(startAngle), cy + r * Math.sin(startAngle));
  p.onArc(
    undefined,
    undefined,
    undefined,
    undefined,
    cx,
    cy,
    r,
    r,
    startAngle,
    startAngle + arcAngle,
  );
  return p;
}

const ArcShape = ({dimensions, color, startAngle, arcAngle}) => {
  const {radius, innerRadius, width} = dimensions;
  const path = createPath(
    radius,
    radius,
    radius - width / 2,
    (startAngle / 180) * Math.PI,
    (arcAngle / 180) * Math.PI,
    false,
    innerRadius,
  );
  const strokeWidth = width;
  return (
    <Shape
      d={path}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeCap={'rounded'}
    />
  );
};

const getArcAngle = (percentage) => (percentage / 100) * 360;
const shouldShowDivider = (sections, dividerSize) =>
  sections.length > 1 && !Number.isNaN(dividerSize);

const Sections = ({dimensions, sections}) => {
  const percentage = 100 / sections.length;
  let startValue = 0;
  let paintedSections = [];
  const {dividerSize} = dimensions;
  const showDividers = shouldShowDivider(sections, dividerSize);
  paintedSections = sections.map((section, idx) => {
    const color = section.seen
      ? colors.barInactive
      : colors.themePrimary.normal;
    const startAngle = (startValue / 100) * 360;
    const arcAngle = getArcAngle(percentage - dividerSize / 2 ?? 0);
    startValue += percentage;
    paintedSections.push({percentage, color, startAngle, arcAngle});
    return (
      <ArcShape
        key={idx}
        dimensions={dimensions}
        color={color}
        startAngle={showDividers ? startAngle + dividerSize : startAngle}
        arcAngle={arcAngle}
      />
    );
  });
  return paintedSections;
};

const StoryCircle = ({data, radius, innerRadius, dividerSize}) => {
  const width = radius - innerRadius;
  const dimensions = {radius, innerRadius, width, dividerSize};

  return (
    <Surface width={radius * 2} height={radius * 2} style={{margin: 0}}>
      <Group rotation={-90} originX={radius} originY={radius}>
        <Sections dimensions={dimensions} sections={data} />
      </Group>
    </Surface>
  );
};

export default StoryCircle;

StoryCircle.propTypes = {
  data: PropTypes.arrayOf({
    uri: PropTypes.string.isRequired,
    seen: PropTypes.string.isRequired,
  }).isRequired,
  radius: PropTypes.number.isRequired,
  innerRadius: PropTypes.number,
  dividerSize: PropTypes.number,
};

StoryCircle.defaultProps = {
  dividerSize: 0,
  innerRadius: 0,
};
