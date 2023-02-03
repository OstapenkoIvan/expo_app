import { StyleSheet } from "react-native";
import sprite from "../assets/sprite.svg";

const IconComponent = ({ iconname, classname }) => {
  return (
    <svg width="25">
      <use id={iconname} href={`${sprite}#${iconname}`} />
    </svg>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    width: 20,
  },
});
// style={[styles.defaultStyle, classname]}
export default IconComponent;
