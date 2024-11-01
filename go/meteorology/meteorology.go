package meteorology

import "fmt"

type TemperatureUnit int

const (
	Celsius    TemperatureUnit = 0
	Fahrenheit TemperatureUnit = 1
)

func (unit TemperatureUnit) String() string {
	if unit == Celsius {
		return "°C"
	}
	if unit == Fahrenheit {
		return "°F"
	}
	return ""
}

// Add a String method to the TemperatureUnit type

type Temperature struct {
	degree int
	unit   TemperatureUnit
}

// Add a String method to the Temperature type
func (t Temperature) String() string {
	return fmt.Sprintf("%d %v", t.degree, t.unit)
}

type SpeedUnit int

const (
	KmPerHour    SpeedUnit = 0
	MilesPerHour SpeedUnit = 1
)

func (su SpeedUnit) String() string {
	if su == KmPerHour {
		return "km/h"
	}
	if su == MilesPerHour {
		return "mph"
	}
	return ""
}

// Add a String method to SpeedUnit

type Speed struct {
	magnitude int
	unit      SpeedUnit
}

func (s Speed) String() string {
	return fmt.Sprintf("%d %v", s.magnitude, s.unit)
}

// Add a String method to Speed

type MeteorologyData struct {
	location      string
	temperature   Temperature
	windDirection string
	windSpeed     Speed
	humidity      int
}

func (d MeteorologyData) String() string {
	return fmt.Sprintf("%s: %v, Wind %s at %v, %d%% Humidity", d.location, d.temperature, d.windDirection, d.windSpeed, d.humidity)
}

// Add a String method to MeteorologyData
