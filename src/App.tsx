import { useEffect, useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

function App() {
  const [page, setPage] = useState(0)

  useEffect(() => {
    function keyListener(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        setPage(page => Math.max(page - 1, 0))
      }
      if (event.key === 'ArrowRight' || event.key === ' ') {
        setPage(page => Math.min(page + 1, 3))
      }
    }

    window.addEventListener('keydown', keyListener)

    return () => window.removeEventListener('keydown', keyListener)
  })

  switch (page) {
    case 0:
      return <><PageOne /><PageTwo /><PageThree /></>
    case 1:
      return <PageOne />
    case 2:
      return <PageTwo />
    case 3:
      return <PageThree />
    default:
      return <PageOne />
  }

}

export default App;
