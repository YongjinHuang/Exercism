package purchase

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	return kind == "car" || kind == "truck"
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	var s string
	if option1 > option2 {
		s = option2
	} else {
		s = option1
	}
	return s + " is clearly the better choice."
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	var ratio float64
	if age < 3 {
		ratio = 0.8
	} else if age < 10 {
		ratio = 0.7
	} else {
		ratio = 0.5
	}
	return originalPrice * ratio
}
