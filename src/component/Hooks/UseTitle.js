import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Toy-Ghor | ${title}` ;
    }, [title])
};

export default useTitle;