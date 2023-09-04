import "./Search.css";
export const Search = ({ setFilter }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
  };
  return (
    <form id="form-search" className="form gap margin-y" onSubmit={search}>
      <input
        placeholder="search list ....."
        onChange={handleSearch}
        type="text"
        className="btn border normal-title color-black"
      />
      <button type="submit" className="btn btn-primary normal-title">
        Search
      </button>
    </form>
  );
};
