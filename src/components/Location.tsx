import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.4326,
  lng: -99.1332
};

export const Location = () => {
  const [googleMapsKey, setGoogleMapsKey] = useState("");

  return (
    <section className="py-20 bg-white" id="ubicacion">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary text-center mb-8">
            Nuestra Ubicación
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-6">
            {!googleMapsKey ? (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Para ver el mapa, por favor ingresa tu API key de Google Maps:
                </p>
                <input
                  type="text"
                  value={googleMapsKey}
                  onChange={(e) => setGoogleMapsKey(e.target.value)}
                  placeholder="Ingresa tu API key de Google Maps"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <p className="text-sm text-gray-500">
                  Puedes obtener tu API key en{" "}
                  <a
                    href="https://console.cloud.google.com/google/maps-apis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Cloud Console
                  </a>
                </p>
              </div>
            ) : (
              <>
                <LoadScript googleMapsApiKey={googleMapsKey}>
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={{
                      zoomControl: true,
                      streetViewControl: true,
                      mapTypeControl: true,
                      fullscreenControl: true
                    }}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
                <div className="text-center space-y-2 mt-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Dirección de la Empresa
                  </h3>
                  <p className="text-gray-600">
                    Av. Ejemplo #123, Col. Centro
                    <br />
                    Ciudad de México, CDMX
                    <br />
                    CP 12345
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};