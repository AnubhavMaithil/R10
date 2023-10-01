import style from "./style.module.css";

const index = ({ text, attributes }) => {
    return (
        <div
            className={style.button}
            style={attributes}
            // data-scroll
            // data-scroll-speed="0.5"
        >
            {text}
        </div>
    );
};

export default index;
