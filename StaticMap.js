import React from 'react';
import PropTypes from 'prop-types';

const StaticMap = props => {
  let url = 'https://maps.googleapis.com/maps/api/staticmap?';

  const getParams = configObj => {
    let params = '';
    Object.keys(configObj).forEach((each, index) => {
      if (index > 0) {
        params += '&';
      }
      params += `${each}=${props.config[each]}`;
    });
    return params;
  };

  const getMarkers = markers => {
    let markerList = '';

    markers.forEach(marker => {
      // the icon for the marker here should be the hosted image url
      const { icon, lat, long } = marker;
      markerList += `&markers=icon:${icon}|${lat},${long}`;
    });
    return markerList;
  };

  url += `${getParams(props.config)}${getMarkers(props.markers)}`;
  return (
    <div>
      <img src={url} alt="map" />
    </div>
  );
};

StaticMap.propTypes = {
  config: PropTypes.object.isRequired,
  markers: PropTypes.array
};

StaticMap.defaultProps = {
  markers: []
};

export default StaticMap;
