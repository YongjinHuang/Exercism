package chessboard

// Declare a type named File which stores if a square is occupied by a piece - this will be a slice of bools
type File []bool

// Declare a type named Chessboard which contains a map of eight Files, accessed with keys from "A" to "H"
type Chessboard map[string]File

// CountInFile returns how many squares are occupied in the chessboard,
// within the given file.
func CountInFile(cb Chessboard, file string) int {
	if _, exist := cb[file]; !exist {
		return 0
	}
	res := 0
	for _, ch := range cb[file] {
		if ch {
			res++
		}
	}
	return res
}

// CountInRank returns how many squares are occupied in the chessboard,
// within the given rank.
func CountInRank(cb Chessboard, rank int) int {
	if !(rank >= 1 && rank <= 8) {
		return 0
	}
	res := 0
	for _, file := range cb {
		if file[rank-1] {
			res++
		}
	}
	return res
}

// CountAll should count how many squares are present in the chessboard.
func CountAll(cb Chessboard) int {
	res := 0
	for _, file := range cb {
		for range file {
			res++
		}
	}
	return res
}

// CountOccupied returns how many squares are occupied in the chessboard.
func CountOccupied(cb Chessboard) int {
	res := 0
	for key := range cb {
		res += CountInFile(cb, key)
	}
	return res
}
