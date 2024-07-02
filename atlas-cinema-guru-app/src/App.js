import {useState} from 'react';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import SearchBar from './components/general/SearchBar';
import Button from './components/general/Button';

function App() {
  // SearchBar useState
  const [title, setTitle] = useState('');
  // SelectedInput useState
  const [selectedOption, setSelectedOption] = useState('');
  // Input useState
  const [inputValue, setInputValue] = useState('');

  const options = [
    { label: 'Default', value: '1' },
    { label: 'Latest', value: '2' },
    { label: 'Oldest', value: '3' },
    { label: 'Highest Rated', value: '4' },
    { label: 'Lowest Rated', value: '5' },
  ];

  return (
    <div className="App">
      <div>
        <SearchBar 
        title={title}
        setTitle={setTitle}/>
      </div>
      <div>
        <Button label="Load More..."/>
      </div>
      <div>
        <Input 
        label="placeholder title" 
        type="text" 
        value={inputValue} 
        setValue={setInputValue}/>
      </div>
      <div>
        <SelectInput
        label="Choose an option"
        options={options}
        value={selectedOption}
        setValue={setSelectedOption} />
      </div>
    </div>
  );
}

export default App;
