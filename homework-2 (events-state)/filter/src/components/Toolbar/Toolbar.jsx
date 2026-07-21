import "./Toolbar.css";
function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          className={
            filter === selected
              ? "btn btn-active btn-primary"
              : "btn btn-dash btn-primary"
          }
          key={filter}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
