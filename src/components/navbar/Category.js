import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { List, SLink } from "../../styled/styles";
import { NavLink } from "react-router-dom";

export const Category = () => {
  return (
    <List>
      <SLink to={"/food/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/food/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/food/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/food/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};
