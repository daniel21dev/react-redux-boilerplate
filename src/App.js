import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostsAction } from "./actions/postsActions";


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getPostsAction() )
  }, [])

  return (
    <div>
      hola
    </div>
  );
}

export default App;
