package lasagna

// TODO: define the 'PreparationTime()' function
func PreparationTime(layers []string, preTimePerLayer int) int {
	if preTimePerLayer == 0 {
		preTimePerLayer = 2
	}
	return len(layers) * preTimePerLayer
}

// TODO: define the 'Quantities()' function
func Quantities(layers []string) (int, float64) {
	gramOfNoodles, literOfSauce := 0, 0.0
	for _, layer := range layers {
		if layer == "noodles" {
			gramOfNoodles += 50
		}
		if layer == "sauce" {
			literOfSauce += 0.2
		}
	}
	return gramOfNoodles, literOfSauce
}

// TODO: define the 'AddSecretIngredient()' function
func AddSecretIngredient(friendsList []string, myList []string) {
	myList[len(myList)-1] = friendsList[len(friendsList)-1]
}

// TODO: define the 'ScaleRecipe()' function
func ScaleRecipe(quantities []float64, portions int) []float64 {
	newQuantites := make([]float64, len(quantities))
	for i, quantity := range quantities {
		newQuantites[i] = quantity * float64(portions) / 2
	}
	return newQuantites
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
