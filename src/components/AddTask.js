//------------------------------------
//             Dodawanie zadań
//------------------------------------
import React, {useState} from "react";
import './Style.css';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Task from "./Task";
import { Dropdown,} from 'react-dropdown-now';
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";



const AddTask = () => {
   
    const [text, settext] = useState('');
    const [checked, setchecked] = useState(false);
    const [date, setdate] = useState(minDate);
    const [editItem, seteditItem] = useState(false);
    
    const handleChange = (e) => {
        setItem(
            e.target.value
        );
    };


   const handleText = (e) => {
        settext(
            e.target.value
        )
    }


    // funkcja z kalendarza
    const handleDate = (e) => {
        setdate(
           e.target.value
        )
    }
    // przycisk ważne

    const handleCheckbox = (e) => {
        setchecked(
            e.target.checked
        )
    }
    // metoda tworzy nowy obiekt i dodaje go 
    const handleClick = () => {
        console.log("dodaj");

    
        settext('')
        setchecked(false),
        // funkcja slice wycina elementy
        setminDate(),
        seteditItem (false)

    };
   


    minDate = new Date().toISOString().slice(0,10);
    // state = {
    //     text:'',
    //     checked: false,
    //     // funkcja slice wycina elementy
    //     date: this.minDate,
    //     editItem: false

        
    //  }  

    // handleEditing = () => {
    //     this.setState({
    //         editing: true,
    //     })
    //     console.log("edit mode activated")
    // }

    // handleUpdatedDone = event => {
    //     if(event.key === "Enter"){
    //         this.setState({ editing: false })

    //     }
    //     console.log(event.key)
    // }
   // }

    // toggleEditing = () => {
    // this.setState({
    //     Editing: !this.state.editing

    //   })
    // }
    
   
// w tym miejscu jeśli chcielibyśmy napisać if(text) musielibyśmy odwołać się do stanu
        const {text, checked, date} = state;
        // a tutaj już nie musimy ;) length - długość
        if(text.length >2) {
        const add = props.add(text, date, checked)
        if(add){
            setState({
                text: '',
                checked: false,
                 minDate
            })
        }
        } else {
            console.log("Dodaj zadanie zawierające min 3 znaki")
        }

    }



        if(state.editing){
            return "Editing";
        }
        // użycie +1 to zamiana linijki na dole na wartość string zaś 
        // *1 to zamiana na number
        let maxDate = minDate.slice(0,4) * 1 + 1;
        // console.log(maxDate);
        maxDate = maxDate+"-12-12";
        return (
            <div className="form">
        
        {/* Okienko z  dodawaniem zadań */}

        <input type="text" placeholder="dodaj zadanie" 
        value = {state.text} onChange={handleText} />
       {/* Checkbox ważne */}
        <input type="checkbox" checked = {state.checked}
        id="important" onChange={handleCheckbox}/>
        <label htmlFor="important">Ważne!</label><br />
        
        {/* Okienko z kalendarzem */}
       <TextField
        id="datetime-local"
        label="Do kiedy należy zrobić:"
        type="datetime-local"
        value={state.date}
        min={minDate} 
        max={maxDate}
        onChange={handleDate}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }} />
   {/* Wysuwana lista */}
 
   <Dropdown
        placeholder="Wybierz Pracownika z listy"
        className="dropdown"
        options={['Klienci', 'Pracownicy', 'Inni']}
        value="one" 
        onChange={(value) => console.log('change!', value)}
        onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
        arrowClosed={<span className="arrow-closed" />}
        arrowOpen={<span className="arrow-open" />} 
              
/>


      <br /> 
      
       <button onClick={handleClick}>Zatwierdź</button>
       
        



        <hr/>

       
        </div>
            )
    

  
export default AddTask;