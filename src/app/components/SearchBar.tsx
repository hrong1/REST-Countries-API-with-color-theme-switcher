export default function SearchBar() {
  return (
    <search className="
      flex
      m-5
    ">
      <input
        className="
          mr-auto
          bg-surface
          rounded-sm
          p-3
          shadow
        "
      ></input>
      <form
        className="
          bg-surface
          rounded-sm
          ml-auto
          p-3
          shadow
        "
      >Filter by Region</form>
    </search>
  );
}