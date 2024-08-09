import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.searchBlock}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.input}
      />
    </div>
  );
};
