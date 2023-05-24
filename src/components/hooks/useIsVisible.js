import { useState } from "react";

const useIsVisible = () => {
    const [visible, setVisile] = useState(false);
    const handleClick = e => {
        e.preventDefault();
        setVisile(x => !x);
    };

    return {
        visible,
        handleClick,
    };
};

export default useIsVisible;
