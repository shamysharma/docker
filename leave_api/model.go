package main

type leave struct {
	Id               string `form:"id"`
	Name             string `form:"name"`
	Leave_type       string `form:"leave_type"`
	From_date        string `form:"from_date"`
	To_date          string `form:"to_date"`
	Team_name        string `form:"team_name"`
	Reporter         string `form:"reporter"`
	Sick_leaves_file string `form:"sick_leaves_file"`

}

func (e leave) String() {}


type leave_for_get struct {

	leave
	Sick_leaves_file string `form:"sick_leaves_file"`
	
	
}