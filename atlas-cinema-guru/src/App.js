import {useState} from 'react';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import SearchBar from './components/general/SearchBar';
import Button from './components/general/Button'

function App() {
  // SearchBar useState
  const [title, setTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { label: 'Default', value: '1' },
    { label: 'Latest', value: '2' },
    { label: 'Oldest', value: '3' },
    { label: 'Highest Rated', value: '4' },
    { label: 'Lowest Rated', value: '5' },
  ];

  return (
    <div className="App">
      <div className="SearchBar">
        <SearchBar title={title} setTitle={setTitle}/>
      </div>
      <div className="Button">
        <Button />
      </div>
      <div className="Input">
      <Input />
      </div>
      <div className="selectInput">
        <SelectInput label="Choose an option" options={options} value={selectedOption} setValue={selectedOption} />
      </div>
    </div>
  );
}

export default App;
