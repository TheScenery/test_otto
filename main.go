package main

import (
	"fmt"
	"io/ioutil"

	"github.com/robertkrimen/otto"
)

func main() {
	srcPath := "./src.js"
	src, err := ioutil.ReadFile(srcPath)
	if err != nil {
		return
	}
	vm := otto.New()
	vm.Run(src)
	vm.Call("Otto_Add", nil, 1, 2)
	value, err := vm.Call("Otto_GetResult", nil)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(value)
}
