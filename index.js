1)))) src/components/button/ create ----> create.module.css

.button {
    border-radius: 5px;
    border: none;
    color: white;
    height: 32px;
    min-width: 150px;
    line-height: 19px;
    size: 14px;
    font-weight: 400;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.button:hover {
    cursor: pointer;
}

.buttonPrimary {
    background-color:  #71CF48;
    
}

.buttonPrimary:hover {
    background-color: #68C142;
}

.buttonPrimary>div {
    flex: 1;
    border-right: 2px #68C142 solid;
    margin-right: 5px;
    line-height: 4px;
}

.buttonPrimary:hover>div {
    border-right: 2px #71CF48 solid;
}

.danger {
    background-color:  #FE4C4A;
    
}

.danger:hover {
    background-color: #EB4345;
}

.danger>div {
    flex: 1;
    border-right: 2px #EB4345 solid;
    margin-right: 5px;
    line-height: 4px;
}

.danger:hover>div {
    border-right: 2px #FE4C4A solid;
}

.neutral {
    background-color: #1264A3;

}

.neutral:hover {
    background-color:  #0F5C97;
}

.neutral>div {
    flex: 1;
    border-right: 2px #0F5C97 solid;
    margin-right: 5px;
    line-height: 4px;
}

.neutral:hover>div {
    border-right: 2px #1264A3 solid;
}


2))))) index.js

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


3)))) jashte tyne ---> index.js

export * from './Create'
