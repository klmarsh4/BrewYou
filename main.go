package main

import (
    "fmt"
    "gopkg.in/mgo.v2"
)

func main() {
  session, _ := mgo.Dial("mongodb://<username>:<password>@ds147985.mlab.com:47985/brewyou")
  //fmt.Println(err)
  c := session.DB("brewyou").C("Users")
  var result interface{}
  c.Find(nil).One(&result)
  fmt.Println(result)
}