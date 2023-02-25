import React from 'react' 
import {useSelector,useDispatch}from 'react-redux'
import {incNumber, decNumber} from './components/Action/UpDown'
import index from './index'




const App = () => {
  const myState =  useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

    return (

      <>
      <div className="texting">
        <h1>Increment Decrement Counter</h1>
        <h4>usind react and redux</h4>

        <div className="btn">
          <a className="quality_news" title="Decrement" onClick={() => dispatch(decNumber())}><span>Subtract</span></a>
          <input name="quantity" type="text" className="quantity_input" value={myState}/>
          <a className="quantity_plus" title="Increment" 
          onClick={() => dispatch(incNumber())}><span>Add</span></a>
         
        </div>
      </div>
      </>
    )
  }

export default App