import listProjectData from '../../../assets/data.json'
import {Component} from "react";
import Toolbar from "../Toolbar/Toolbar.jsx";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./Portfolio.css";

export default class Portfolio extends Component {
    state = {
        activeFilter: "All"
    }

    render () {
        const filters = ["All", "Websites", "Flayers", "Business Cards"]
        const selectedProjects = this.state.activeFilter === "All" ? listProjectData : listProjectData.filter((project) => (project.category === this.state.activeFilter))

        return (
            <div className="portfolio">
                <Toolbar
                    filters={filters}
                    selected={this.state.activeFilter}
                    onSelectFilter={(filter) => this.setState({activeFilter: filter})}/>
                <ProjectList
                    projects = {selectedProjects}
                />
            </div>
        )
    }
}
