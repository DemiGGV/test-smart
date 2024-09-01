import { useDispatch, useSelector } from "react-redux";
import {
  getEmailFilter,
  getNameFilter,
  getPhoneFilter,
  getUsernameFilter,
} from "../../Redux/selectors";
import { setFilter } from "../../Redux/filters/filtersSlice";
import { HeaderMenuWrapper, InputStyled } from "./HeaderTable.styled";

export const HeaderTable = () => {
  const dispatch = useDispatch();

  const name = useSelector(getNameFilter);
  const username = useSelector(getUsernameFilter);
  const email = useSelector(getEmailFilter);
  const phone = useSelector(getPhoneFilter);

  const handleChange = (e) => {
    e.preventDefault;
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <HeaderMenuWrapper>
      <InputStyled
        placeholder="name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <InputStyled
        placeholder="username"
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <InputStyled
        placeholder="email"
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <InputStyled
        placeholder="phone"
        type="text"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
    </HeaderMenuWrapper>
  );
};