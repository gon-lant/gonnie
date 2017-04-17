import React from "react";

export default class Search extends React.Component {
	constructor(props) {
    super();
  }
	render() {
		return (
			<form class="navbar-form navbar-left">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
			);
	}
}