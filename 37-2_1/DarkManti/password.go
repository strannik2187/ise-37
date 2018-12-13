package main
import (
"fmt"
"math/rand"
"strconv"
"os"
)

func main() {
	var length int;
	fmt.Println("enter password length");
	fmt.Fscan(os.Stdin, &length)
	var s string = "";
	for i:=0; i < 1000; i++{
	for j:=0; j < length; j++{
	s+=strconv.Itoa(rand.Intn(10));
	}
	fmt.Println(s);
	s = "";
	}
}