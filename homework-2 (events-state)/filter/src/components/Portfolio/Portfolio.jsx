import listProjectData from '../../../assets/data.json'
import {Component} from "react";
import Toolbar from "../Toolbar/Toolbar.jsx";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./Portfolio.css";

export default class Portfolio extends Component {
    filters = ["All", "Websites", "Flayers", "Business Cards"]
    projects = listProjectData
    state = {
        activeFilter: "All"
    }

    render () {
        const selectedProjects = this.state.activeFilter === "All" ? this.projects : this.projects.filter((project) => (project.category === this.state.activeFilter))

        return (
            <div className="portfolio">
                <Toolbar
                    filters={this.filters}
                    selected={this.state.activeFilter}
                    onSelectFilter={(filter) => this.setState({activeFilter: filter})}/>
                <ProjectList
                    projects = {selectedProjects}
                />
            </div>
        )
    }
}
