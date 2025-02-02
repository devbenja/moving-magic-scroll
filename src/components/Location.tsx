import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion } from "framer-motion";

export const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-99.1332, 19.4326], // Coordenadas de Ciudad de México (ajusta según tu ubicación)
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([-99.1332, 19.4326]) // Ajusta estas coordenadas a la ubicación exacta de tu empresa
      .addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

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
            {!mapboxToken ? (
              <div className="space-y-4">
                <p className="text-gray-600">
                  Para ver el mapa, por favor ingresa tu token público de Mapbox:
                </p>
                <input
                  type="text"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  placeholder="Ingresa tu token público de Mapbox"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <p className="text-sm text-gray-500">
                  Puedes obtener tu token público en{" "}
                  <a
                    href="https://www.mapbox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
              </div>
            ) : (
              <>
                <div ref={mapContainer} className="h-[400px] w-full rounded-lg mb-6" />
                <div className="text-center space-y-2">
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