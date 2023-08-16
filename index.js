import styles from "./create.module.css";
import classNames from "classnames";

import {
  PlusOutlined,
  CheckOutlined,
  ArrowLeftOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const icons = {
  create: (
    <PlusOutlined style={{ fontSize: 20, position: "relative", right: -200 }} />
  ),
  check: (
    <CheckOutlined style={{ fontSize: 20, position: "relative", right: 0 }} />
  ),
  cancel: (
    <CloseOutlined style={{ fontSize: 20, position: "relative", right: 0 }} />
  ),
  back: (
    <ArrowLeftOutlined
      style={{ fontSize: 20, position: "relative", right: 0 }}
    />
  ),
};




export const CreateButton = ({ type = "create", label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        [styles.button]: true,
        [styles.buttonPrimary]: type === "create" || type === "check",
        [styles.danger]: type === "cancel",
        [styles.neutral]: type === "back",
      })}
    >
      <div>
        <p>{label}</p>
      </div>
      {icons[type]}
    </button>
  );
};
