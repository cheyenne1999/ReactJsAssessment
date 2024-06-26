import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setInput } from '../slices/GooglePlacesAutoCompleteSlices.js';
import { Link } from 'react-router-dom';

const GooglePlacesAutocomplete = () => {
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const cardRef = useRef(null);
  const infowindowContentRef = useRef(null);
  const dispatch = useDispatch(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCiRrdyEWMyEnD9MaBpsCXaUHZxabU93gU&libraries=places`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 3.140853, lng: 101.693207 },
        zoom: 13,
        mapTypeControl: false,
      });

      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ['formatted_address', 'geometry', 'name'],
        strictBounds: false,
      });

      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(cardRef.current);

      autocomplete.bindTo('bounds', map);

      const infowindow = new window.google.maps.InfoWindow();
      infowindowContentRef.current = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContentRef.current);

      const marker = new window.google.maps.Marker({
        map,
        anchorPoint: new window.google.maps.Point(0, -29),
      });

      autocomplete.addListener('place_changed', () => {
        infowindow.close();
        marker.setVisible(false);

        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
            window.alert(`No details available for input: '${place.name}'`);
            return;
          } else {
            const fullAddress = `${place.name} - ${place.formatted_address}`;
            dispatch(setInput(fullAddress));
          }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
        infowindowContentRef.current.children['place-name'].textContent = place.name;
        infowindowContentRef.current.children['place-address'].textContent = place.formatted_address;
        infowindow.open(map, marker);
      });
    }, [dispatch]);

    return () => {
      script.removeEventListener('load', null);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
        <div class="card">
            <div class="card-header">
                Google Auto Complete
            </div>                
        </div>
      <div id="pac-card" ref={cardRef}>
        <input  id="pac-input" className="form-control" type="text" ref={inputRef} placeholder="Enter a location"/>
        
      </div>
      <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
      <div id="infowindow-content">
        <span id="place-name" className="title"></span><br />
        <span id="place-address"></span>
      </div>
      <Link to={"/display"} class="btn btn-primary d-flex justify-content-center">Go to Display Page</Link>
    </div>
  );
};
export default GooglePlacesAutocomplete;