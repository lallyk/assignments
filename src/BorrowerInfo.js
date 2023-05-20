import React,{useState} from 'react';
import classes from "./BorrowerInfo.module.css";
const BorrowerInfo=()=>{
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [numberOfUnits, setNumberOfUnits] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Property Name:', propertyName);
    console.log('Property Type:', propertyType);
    console.log('Number of Units:', numberOfUnits);
    console.log('Property Address:', propertyAddress);
    console.log('File:', file);
  };
  return(
    <div> 
    <center>
    <div className={classes.container}>
     <h1>Borrower Company Info</h1>
      <form onSubmit={handleFormSubmit}>
      <div className={classes.items}>
        <label className={classes.formdata}>Property Name:</label>
        <div>
          <input
          type="text"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
        />
        </div>
        <label className={classes.formdata}>Property Type:</label>
        <div>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Select Property Type</option>
          <option value="Own House">Own House</option>
          <option value="Rented">Rented</option>
        </select></div>
        <br />
        <label className={classes.formdata}>Property Type:</label>
        <div>
        <select
          value={numberOfUnits}
          onChange={(e) => setNumberOfUnits(e.target.value)}
        >
          <option value="">Select Number of Units</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select></div></div>
        <br />
        <label className={classes.formdata}>Property Address:</label>
        <div>
        <textarea
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
        ></textarea></div>
        <br />
        <label className={classes.formdata}>File Attachment:</label>
        <div className={classes.dotted}>
        <span style={{color:"blue"}}>Browse</span><span> to Attach a File</span>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        /></div>
        <br />
        <button type="reset" className={classes.back}>Back</button>
        <button type="submit" className={classes.continue}>Continue</button>
      </form>
    </div></center></div>)
}
export default BorrowerInfo;