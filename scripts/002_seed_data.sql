-- Insert sample farm
INSERT INTO farms (id, name, location, size_hectares, farm_type)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'Green Valley Farm', 'Nairobi, Kenya', 15.5, 'Mixed Crop')
ON CONFLICT (id) DO NOTHING;

-- Insert sample crops
INSERT INTO crops (farm_id, crop_name, variety, planting_date, expected_harvest_date, area_hectares, status)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'Maize', 'Hybrid 614', '2025-01-15', '2025-05-15', 5.0, 'growing'),
  ('00000000-0000-0000-0000-000000000001', 'Tomatoes', 'Roma VF', '2025-02-01', '2025-04-30', 2.5, 'growing'),
  ('00000000-0000-0000-0000-000000000001', 'Beans', 'Kidney Red', '2025-01-20', '2025-04-20', 3.0, 'growing'),
  ('00000000-0000-0000-0000-000000000001', 'Lettuce', 'Butterhead', '2025-02-10', '2025-03-25', 1.5, 'growing')
ON CONFLICT DO NOTHING;

-- Insert weather data for the past 7 days
INSERT INTO weather_data (farm_id, date, temperature_celsius, humidity_percent, rainfall_mm, wind_speed_kmh)
VALUES 
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '6 days', 28.5, 82, 5.2, 12.3),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '5 days', 29.1, 78, 0.0, 15.7),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '4 days', 27.8, 85, 12.5, 18.2),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '3 days', 28.9, 80, 2.1, 14.5),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '2 days', 29.5, 76, 0.0, 16.8),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '1 day', 28.2, 86, 8.3, 13.2),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE, 29.0, 84, 3.5, 15.0)
ON CONFLICT DO NOTHING;

-- Insert soil readings
INSERT INTO soil_readings (farm_id, reading_date, ph_level, nitrogen_ppm, phosphorus_ppm, potassium_ppm, moisture_percent, organic_matter_percent)
VALUES 
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '7 days', 6.8, 45, 32, 180, 68, 4.2),
  ('00000000-0000-0000-0000-000000000001', CURRENT_DATE, 6.9, 42, 35, 175, 72, 4.5)
ON CONFLICT DO NOTHING;

-- Insert recommendations
INSERT INTO recommendations (farm_id, recommendation_type, title, description, priority, status)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'irrigation', 'Increase Irrigation', 'Soil moisture is below optimal. Increase watering by 15% for the next 3 days.', 'high', 'pending'),
  ('00000000-0000-0000-0000-000000000001', 'fertilizer', 'Apply Nitrogen Fertilizer', 'Nitrogen levels are slightly low. Apply 20kg/ha of urea fertilizer.', 'medium', 'pending'),
  ('00000000-0000-0000-0000-000000000001', 'pest_control', 'Monitor for Aphids', 'Weather conditions favor aphid activity. Inspect crops daily.', 'medium', 'pending'),
  ('00000000-0000-0000-0000-000000000001', 'harvest', 'Prepare for Lettuce Harvest', 'Lettuce will be ready for harvest in 10-12 days. Prepare storage facilities.', 'low', 'pending')
ON CONFLICT DO NOTHING;

-- Insert activities
INSERT INTO activities (farm_id, activity_type, description, performed_by)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'irrigation', 'Irrigated maize field - 2 hours', 'John Kamau'),
  ('00000000-0000-0000-0000-000000000001', 'fertilizer', 'Applied compost to tomato beds', 'Mary Wanjiku'),
  ('00000000-0000-0000-0000-000000000001', 'weeding', 'Weeded bean section', 'John Kamau'),
  ('00000000-0000-0000-0000-000000000001', 'inspection', 'Routine crop health inspection', 'Mary Wanjiku'),
  ('00000000-0000-0000-0000-000000000001', 'pest_control', 'Applied organic pest spray to lettuce', 'John Kamau')
ON CONFLICT DO NOTHING;

-- Insert production data for the past 12 months
INSERT INTO production_data (farm_id, year, month, crop_type, yield_kg)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 2024, 1, 'Maize', 2800),
  ('00000000-0000-0000-0000-000000000001', 2024, 2, 'Maize', 3200),
  ('00000000-0000-0000-0000-000000000001', 2024, 3, 'Maize', 3500),
  ('00000000-0000-0000-0000-000000000001', 2024, 4, 'Maize', 4200),
  ('00000000-0000-0000-0000-000000000001', 2024, 5, 'Maize', 5100),
  ('00000000-0000-0000-0000-000000000001', 2024, 6, 'Maize', 4800),
  ('00000000-0000-0000-0000-000000000001', 2024, 7, 'Maize', 3900),
  ('00000000-0000-0000-0000-000000000001', 2024, 8, 'Maize', 3600),
  ('00000000-0000-0000-0000-000000000001', 2024, 9, 'Maize', 4100),
  ('00000000-0000-0000-0000-000000000001', 2024, 10, 'Maize', 4500),
  ('00000000-0000-0000-0000-000000000001', 2024, 11, 'Maize', 4800),
  ('00000000-0000-0000-0000-000000000001', 2024, 12, 'Maize', 5200),
  ('00000000-0000-0000-0000-000000000001', 2025, 1, 'Maize', 3100),
  ('00000000-0000-0000-0000-000000000001', 2024, 1, 'Tomatoes', 1200),
  ('00000000-0000-0000-0000-000000000001', 2024, 2, 'Tomatoes', 1400),
  ('00000000-0000-0000-0000-000000000001', 2024, 3, 'Tomatoes', 1600),
  ('00000000-0000-0000-0000-000000000001', 2024, 4, 'Tomatoes', 1900),
  ('00000000-0000-0000-0000-000000000001', 2024, 5, 'Tomatoes', 2200),
  ('00000000-0000-0000-0000-000000000001', 2024, 6, 'Tomatoes', 2100),
  ('00000000-0000-0000-0000-000000000001', 2024, 7, 'Tomatoes', 1800),
  ('00000000-0000-0000-0000-000000000001', 2024, 8, 'Tomatoes', 1700),
  ('00000000-0000-0000-0000-000000000001', 2024, 9, 'Tomatoes', 1900),
  ('00000000-0000-0000-0000-000000000001', 2024, 10, 'Tomatoes', 2000),
  ('00000000-0000-0000-0000-000000000001', 2024, 11, 'Tomatoes', 2100),
  ('00000000-0000-0000-0000-000000000001', 2024, 12, 'Tomatoes', 2300),
  ('00000000-0000-0000-0000-000000000001', 2025, 1, 'Tomatoes', 1500)
ON CONFLICT DO NOTHING;
