
import React from 'react';
import EmojiContainer from './components/EmojiContainer';
import Header from './components/Header'
import emojiList from "./json/emoji.json"
console.log(emojiList);

class App extends React.Component{
  state={
    searchValue:"",
    emojiData:emojiList
  }
  grabValueFromInput=(e)=>{
    
    // console.log("user is typing");
    let filteredEmoji=emojiList.filter(item=>{
      let inputValue=e.target.value.toLowerCase();
      if(item.title.toLowerCase().includes(inputValue)){
        return true;
      }
      if(item.keywords.toLowerCase().includes(inputValue)){
        return true;
      }
      return false;
    })
    this.setState({
      searchValue:e.target.value,
      emojiData:filteredEmoji
    })
  }
  render(){
    console.log("render In App", this.state.searchValue);

return(
    <div className="App" style={{backgroundColor:"#EAEDF0"}}>
      <Header/>
      <div style={{display:"flex",justifyContent:"center"}}>
        <input type="text" name="" id="" style={{fontSize:"20px",width:"400px", outline:"none",borderRadius:"10px",border:"1px solid light-gray"}} onChange={this.grabValueFromInput}/>
      </div>
      <EmojiContainer emojiData={this.state.emojiData}/>
    </div>);}}
  




export default App;






// // Other way using Class Component

// export default function App() {
//   state={
//     searchValue:""
//   }
//   grabValueFromInput=(e)=>{
//     console.log("user is typing");
//   }
//   return (
//     <div className="App" style={{backgroundColor:"#EAEDF0"}}>
//       <Header/>
//       <div style={{display:"flex",justifyContent:"center"}}>
//         <input type="text" name="" id="" style={{fontSize:"20px",width:"400px",outline:"none",borderRadius:"10px",border:"1px solid light-gray"}} onChange={this.grabValueFromInput}/>
//       </div>
//     </div>
//   );
// }
