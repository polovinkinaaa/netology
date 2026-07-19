import "./Toolbar.css";
function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className="toolbar">
            {filters.map((filter, i) => (
                <button className={filter === selected ? "btn btn-active btn-primary" : "btn btn-dash btn-primary"} key = {i} onClick={() => onSelectFilter(filter)}>{filter}</button>
            ))}
        </div>
    )
}

export default Toolbar;