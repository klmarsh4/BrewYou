package main

import (
    "fmt"
    "BrewYou/users"
)

func main() {
  user := users.GetOne()
  fmt.Println(user)
}
