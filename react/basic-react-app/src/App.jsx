import "./App.css"
import Producttab from "./Producttab.jsx"
import {Title} from "./Title.jsx"
import Msgbox from "./msgbox.jsx"
import Amazoncardtab from "./amazoncardtab.jsx"
import "./amazoncard.css"
import {Buttonclick,Buttonhover} from "./button.jsx"

function App() {
  /*
  return (<div>
    <Producttab/>
  </div>
  )
}
  */

/*
return (<div class="final">
  <h3>Blockbuster Sale series!</h3>
  <Amazoncardtab/>
  </div>)
*/
return (
  <div>
    <Buttonclick/>
    <Buttonhover/>
  </div>
)

}

export default App
