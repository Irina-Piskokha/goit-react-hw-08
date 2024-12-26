import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        name="search"
        placeholder="Enter name"
        className={s.searchForm}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
