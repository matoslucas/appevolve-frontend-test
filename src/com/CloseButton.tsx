import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
type CloseButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};
const CloseButton = ({ onClick, isOpen}: CloseButtonProps) => {
  return (
    <div className="close-button-box" onClick={() => onClick()}>
      {isOpen ? (
        <FontAwesomeIcon icon={faBars}  size={"2x"} />
      ) : (
        <FontAwesomeIcon icon={faTimes} size={"2x"} />
      )}
    </div>
  );
};
export default CloseButton;
