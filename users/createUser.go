package users

import (
    "fmt"
    "gopkg.in/mgo.v2"
)

func GetOne() (result map[string]string) {
  session, err := mgo.Dial("mongodb://<dbuser>:<dbpassword>@ds147985.mlab.com:47985/brewyou")
  if err != nil{
      fmt.Println(err)
  }
  c := session.DB("brewyou").C("Users")
  c.Find(nil).One(&result)
  delete(result, "_id")
  return result
}
