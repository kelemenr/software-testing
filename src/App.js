import './App.css';
import wave from './wave-header.svg';
import CalculatorTable from './components/calculatorTable.component.js';
import useNumberDropDown from './hooks/useNumberDropDown';
import DropDownContext from './context/dropdown-context.js';
import useTypeDropDown from './hooks/useTypeDropDown';

function App() {

  const {chosenNumber, setChosenNumber} = useNumberDropDown();
  const {chosenType, setChosenType} = useTypeDropDown();

  return (
    <div>
      <div>
        <img src={wave}></img>
      </div>
      <h2><span>►</span> Expected Return Calculator</h2>
      <div className='content'>
        <p>
          There are three types of bets: <b>normal, combined, and two-chance</b>. <br></br>
          There can be maximum <b>10 bets</b> for the normal and two-chance, and there can only be <b>2 or 3 bets</b> for the combined one, and only <b>one bet</b> for the two-chance. <br></br>
          The <b>minimum value</b> for a coupon in the normal one is <b>5$ and 2$</b> in the combined, and <b>1000$ at maximum</b> for each one.
          <p>In the <b>normal</b> one: the provided odds will be multiplied with each other.<br></br>
          If there are <b>5 or more bets</b> made, there is an <b>extra 5%</b> for the final odds.</p>
          <p>In the <b>combined</b> one: there are <b>two types</b> of bets: <b>2/3 and 3/4</b>. In this type of bet we are making a bet for each one of the possible outcomes.<br></br>
          The expected winning is the average of the multiplication  of the outcome odds.<br></br>
          There is an opportunity for calculating the case when not every bet is correct. In this case the odds will be 0 for the the cases where the bet is wrong.</p>
          In the <b>two-chance</b>: <b>either a draw or one of the team's win counts as a correct bet</b>. In this case we are select a team, and if it wins, we get the <b>full odds</b>, but if it is a draw, we are getting <b>50% less odds</b>. </p>
      </div>
      <div className='content'>
        <DropDownContext.Provider value={{ chosenValue: chosenNumber, chosenType: 'normal', setChosenNumber, setChosenType }} >
          <CalculatorTable></CalculatorTable>
        </DropDownContext.Provider>
      </div>
    </div>
  );
}

export default App;
